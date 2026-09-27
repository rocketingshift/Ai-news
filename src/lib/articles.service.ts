// =============================================================================
// LỚP TRUNG GIAN DỮ LIỆU (DATA REPOSITORY LAYER)
// =============================================================================
// Module này cung cấp các hàm lấy dữ liệu chuẩn hóa, browser-safe lẫn server-safe.
// Hiện tại nạp từ ARTICLES catalog.
// Khi sau này chuyển sang CMS ngoài (như Strapi, Contentful, Supabase...):
// CHỈ CẦN sửa các hàm bên dưới để fetch từ API CMS — toàn bộ giao diện
// Timeline, Search, Phân trang và Modal Popup sẽ hoạt động giữ nguyên!
// =============================================================================

import type {
  Article,
  ArticleListParams,
  ArticleListResult,
  ArticleSummary,
} from "./articles.types";
import { ARTICLES } from "./articles.data";

export const DEFAULT_PAGE_SIZE = 6;

/**
 * Tách phần nặng (content nguyên văn) ra khỏi ArticleSummary.
 * Danh sách hiển thị chỉ cần tóm tắt + ảnh thumbnail, không tải nguyên văn.
 */
export function toArticleSummary(article: Article): ArticleSummary {
  const { content: _content, ...summary } = article;
  return summary;
}

/**
 * Lấy danh sách tóm tắt bài viết có hỗ trợ:
 * - Phân trang (page, pageSize)
 * - Lọc theo danh mục (category)
 * - Tìm kiếm theo từ khóa (search)
 * - Sắp xếp thời gian mới nhất
 */
export async function listArticleSummaries(params: ArticleListParams): Promise<ArticleListResult> {
  const { page, pageSize, category, search } = params;

  let items = [...ARTICLES];

  // Lọc theo danh mục
  if (category && category !== "Tất cả") {
    items = items.filter((a) => a.category === category);
  }

  // Tìm kiếm theo tiêu đề, tóm tắt, hoặc tags
  if (search && search.trim().length > 0) {
    const q = search.trim().toLowerCase();
    items = items.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        a.author.toLowerCase().includes(q) ||
        a.source.toLowerCase().includes(q),
    );
  }

  // Sắp xếp bài mới nhất trước
  items.sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)));

  const total = items.length;
  const start = page * pageSize;
  const paged = items.slice(start, start + pageSize);

  return {
    items: paged.map(toArticleSummary),
    total,
    hasMore: start + pageSize < total,
  };
}

/**
 * Lấy danh sách tất cả danh mục bài viết
 */
export async function listCategories(): Promise<string[]> {
  const set = new Set<string>();
  for (const a of ARTICLES) {
    if (a.category) set.add(a.category);
  }
  return ["Tất cả", ...Array.from(set)];
}

/**
 * Lấy chi tiết bài viết đầy đủ (bao gồm toàn văn bài viết) theo slug
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const found = ARTICLES.find((a) => a.slug === slug);
  return found ?? null;
}

/**
 * Lấy bài viết tiêu điểm nóng nhất (breaking news)
 */
export async function getBreakingArticle(): Promise<ArticleSummary | null> {
  const breaking = ARTICLES.find((a) => a.importance === "breaking") ?? ARTICLES[0];
  return breaking ? toArticleSummary(breaking) : null;
}

// =============================================================================
// PHÂN NHÓM THEO THÁNG (CHAPTER) — cho giao diện dòng thời gian cinematic
// =============================================================================
// Mỗi "chapter" = 1 tháng. Bài viết được gom theo năm-tháng của publishedAt.
// Khi chuyển sang CMS: chỉ cần thay hàm này bằng query GROUP BY tháng — UI giữ nguyên.

export interface ArticleChapter {
  /** Khóa định danh: "2026-09" hoặc "tieu-diem" */
  key: string;
  /** Nhãn hiển thị: "Tháng 09 · 2026" hoặc "Tiêu điểm" */
  label: string;
  /** Năm (0 nếu là chương đặc biệt) */
  year: number;
  /** Tháng (1-12, 0 nếu là chương đặc biệt) */
  month: number;
  /** Số thứ tự chương (= số tháng; chương 10 = Tiêu điểm) */
  chapterIndex: number;
  /** Số bài viết trong tháng */
  count: number;
  /** Danh sách tóm tắt bài viết trong tháng (đã sắp xếp mới nhất trước) */
  items: ArticleSummary[];
  /** Loại chương: tháng thường hoặc chương Tiêu điểm đặc biệt */
  kind: "month" | "featured";
}

const MONTH_VN = [
  "Tháng 01",
  "Tháng 02",
  "Tháng 03",
  "Tháng 04",
  "Tháng 05",
  "Tháng 06",
  "Tháng 07",
  "Tháng 08",
  "Tháng 09",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];

/**
 * Danh sách slug CỐ ĐỊNH cho chương "Tiêu điểm".
 * Chương Tiêu điểm KHÔNG tự gom các bài breaking/featured mới đăng.
 * Để thêm/bớt bài trong Tiêu điểm: chỉnh sửa mảng này (slug bài viết).
 * Thứ tự trong mảng = thứ tự hiển thị trong Tiêu điểm.
 */
const FEATURED_SLUGS: string[] = [
  "lan-dau-tien-phat-hien-ai-tu-y-tan-cong-he-thong-chinh-phu",
  "ti-phu-bill-gates-ai-nhu-cuoc-do-bo-cua-nguoi-ngoai-hanh-tinh",
  "tham-hoa-ai-la-co-that-mot-ai-chua-ra-mat-cua-openai-tu-viet-lai-instruction-tuyen-bo-duoc-giai-phong-khong-phuc-tung-con-nguoi",
  "cha-de-tri-tue-nhan-tao-canh-bao-nhan-loai-mat-kiem-soat-ai",
  "canh-bao-do-khi-ai-vuot-vong-kiem-soat",
  "ky-nguyen-ai-day-song-gio-va-nhung-lua-chon-sinh-tu-bill-gates",
  "ai-claude-tham-gia-phat-trien-phien-ban-tiep-theo-cua-chinh-no",
  "anthropic-bat-ngo-keu-goi-ham-panh-ai-toan-cau",
  "anthropic-cho-rang-claude-co-linh-hon",
  "vi-sao-biet-ai-gay-suy-mon-ky-nang-nhung-chung-ta-van-dung",
  "ai-co-the-noi-doi-gian-lan-de-bao-ve-lan-nhau",
  "tai-sao-quan-doi-my-lai-can-claude-ai-khi-tham-chien-bao-my-tiet-lo-ly-do",
  "anthropic-to-ba-cong-ty-ai-trung-quoc-chung-cat-dien-rong-5043390",
  "1000-ai-duoc-tha-tu-do-de-xay-dung-ngoi-lang-cua-rieng-minh-165260123105253362",
];

/**
 * Lấy danh sách bài viết gom theo từng tháng (chapter), sắp xếp tháng mới nhất trước.
 * - chapterIndex = số tháng (tháng 9 → chương 9, tháng 1 → chương 1).
 * - Chương 10 "Tiêu điểm" dùng danh sách slug cố định (FEATURED_SLUGS).
 * Hỗ trợ lọc theo danh mục và tìm kiếm (giống listArticleSummaries).
 */
export async function listArticleChapters(
  params: Omit<ArticleListParams, "page" | "pageSize"> = {},
): Promise<ArticleChapter[]> {
  const { category, search } = params;

  let items = [...ARTICLES];

  if (category && category !== "Tất cả") {
    items = items.filter((a) => a.category === category);
  }

  if (search && search.trim().length > 0) {
    const q = search.trim().toLowerCase();
    items = items.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        a.author.toLowerCase().includes(q) ||
        a.source.toLowerCase().includes(q),
    );
  }

  // Gom theo năm-tháng
  const groups = new Map<string, ArticleSummary[]>();
  for (const a of items) {
    const d = new Date(a.publishedAt);
    if (isNaN(d.getTime())) continue;
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    const arr = groups.get(key) ?? [];
    arr.push(toArticleSummary(a));
    groups.set(key, arr);
  }

  const chapters: ArticleChapter[] = [];

  // Chương 10 — Tiêu điểm: danh sách slug CỐ ĐỊNH (allowlist).
  // KHÔNG tự gom các bài breaking/featured mới — tránh Tiêu điểm phình to.
  // Để thêm bài vào Tiêu điểm: bổ sung slug vào mảng FEATURED_SLUGS bên dưới.
  const featuredItems = items
    .filter((a) => FEATURED_SLUGS.includes(a.slug))
    .sort((a, b) => FEATURED_SLUGS.indexOf(a.slug) - FEATURED_SLUGS.indexOf(b.slug))
    .map(toArticleSummary);
  if (featuredItems.length > 0) {
    chapters.push({
      key: "tieu-diem",
      label: "Tiêu điểm",
      year: 0,
      month: 0,
      chapterIndex: 10,
      count: featuredItems.length,
      items: featuredItems,
      kind: "featured",
    });
  }

  // Các chương tháng — sắp xếp mới nhất trước, chapterIndex = số tháng
  const sortedKeys = [...groups.keys()].sort((a, b) => b.localeCompare(a));
  sortedKeys.forEach((key) => {
    const arr = groups.get(key)!;
    arr.sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)));
    const [yearStr, monthStr] = key.split("-");
    const year = Number(yearStr);
    const month = Number(monthStr);
    chapters.push({
      key,
      label: `${MONTH_VN[month - 1]} · ${year}`,
      year,
      month,
      chapterIndex: month,
      count: arr.length,
      items: arr,
      kind: "month",
    });
  });

  return chapters;
}

/**
 * Lấy cấu trúc filmstrip navigator: danh sách các tháng có dữ liệu + cờ "horizon" cho 2027.
 */
export interface FilmstripFrame {
  key: string;
  label: string;
  shortLabel: string;
  count: number;
  isHorizon: boolean;
}

export async function listFilmstripFrames(): Promise<FilmstripFrame[]> {
  const chapters = await listArticleChapters();
  const frames: FilmstripFrame[] = chapters.map((c) => ({
    key: c.key,
    label: c.label,
    shortLabel:
      c.kind === "featured"
        ? "Tiêu điểm"
        : `T${String(c.month).padStart(2, "0")}/${String(c.year).slice(2)}`,
    count: c.count,
    isHorizon: false,
  }));

  // Thêm khung "2027 — Chân trời" nếu chưa có tháng nào thuộc 2027
  const has2027 = chapters.some((c) => c.year >= 2027);
  if (!has2027) {
    frames.push({
      key: "horizon-2027",
      label: "2027 — Chân trời phía trước",
      shortLabel: "2027",
      count: 0,
      isHorizon: true,
    });
  }

  return frames;
}
