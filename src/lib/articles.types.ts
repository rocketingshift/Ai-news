// Lớp kiểu dữ liệu (browser-safe, chỉ chứa type — không có dữ liệu runtime).
// Dùng chung cho cả client và server. Không import module nặng ở đây.

export interface ArticleParagraph {
  type: "paragraph" | "heading" | "quote" | "image" | "list" | "video";
  text?: string;
  src?: string;
  poster?: string;
  caption?: string;
  items?: string[];
}

export interface ArticleSummary {
  id: string;
  slug: string;
  title: string;
  summary: string;
  source: string;
  sourceLogoText: string;
  sourceUrl: string;
  publishedAt: string;
  timestampLabel: string;
  category: string;
  categoryColor: string;
  readTime: string;
  thumbnail: string;
  author: string;
  tags: string[];
  importance: "breaking" | "featured" | "standard";
  screenshotUrl: string;
}

// Bài viết đầy đủ = tóm tắt + nội dung nguyên văn (phần nặng).
export interface Article extends ArticleSummary {
  content: ArticleParagraph[];
}

// Tham số truy vấn danh sách bài viết (phân trang + lọc + tìm kiếm).
export interface ArticleListParams {
  page: number; // 0-indexed
  pageSize: number;
  category?: string; // "Tất cả" hoặc undefined = không lọc
  search?: string;
}

export interface ArticleListResult {
  items: ArticleSummary[];
  total: number;
  hasMore: boolean;
}
