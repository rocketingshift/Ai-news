import { useMemo, useState, useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  Calendar,
  Flame,
  Maximize2,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  Filter,
  Sparkles,
  Moon,
  Sun,
  Pause,
  Play,
} from "lucide-react";
import { listArticleChapters, listCategories } from "@/lib/articles.service";
import { ArticleModal } from "@/components/ArticleModal";
import { ChronicleChapter } from "@/components/ChronicleChapter";
export const Route = createFileRoute("/luu-tru")({
  head: () => ({
    meta: [
      { title: "Dòng Chảy Thời Gian — Tàng Thư AI 2027 · Lưu trữ sự kiện" },
      {
        name: "description",
        content:
          "Dòng chảy thời gian lưu trữ tin tức AI thật theo từng tháng 2026–2027. Đối chiếu dự báo phim với sự kiện đã xảy ra.",
      },
      { property: "og:title", content: "Dòng Chảy Thời Gian — Tàng Thư AI 2027 · Lưu trữ sự kiện" },
      {
        property: "og:description",
        content:
          "Kho lưu trữ tin tức AI thật theo từng tháng. Mỗi bài mở ngay trong popup, không rời trang.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  loader: async () => {
    const [chapters, categories] = await Promise.all([listArticleChapters(), listCategories()]);
    return { chapters, categories };
  },
  component: ArchivePage,
});

// Danh sách các mốc tháng mẫu từ T1 -> T10/2026 kèm mục Tiêu điểm (chương 10)
// Số bài của Tiêu điểm và các tháng có dữ liệu được tính động từ chapters
interface MonthNavSlot {
  key: string;
  label: string;
  hasData: boolean;
}

function buildMonthNavSlots(chapters: ArticleChapter[]): MonthNavSlot[] {
  const countFor = (key: string) => chapters.find((c) => c.key === key)?.count ?? 0;
  const hasFor = (key: string) => countFor(key) > 0;

  return [
    { key: "2026-09", label: "Tháng 9/2026", hasData: hasFor("2026-09") },
    { key: "2026-08", label: "Tháng 8/2026", hasData: hasFor("2026-08") },
    { key: "2026-07", label: "Tháng 7/2026", hasData: false },
    { key: "2026-06", label: "Tháng 6/2026", hasData: false },
    { key: "2026-05", label: "Tháng 5/2026", hasData: false },
    { key: "2026-04", label: "Tháng 4/2026", hasData: false },
    { key: "2026-03", label: "Tháng 3/2026", hasData: false },
    { key: "2026-02", label: "Tháng 2/2026", hasData: false },
    { key: "2026-01", label: "Tháng 1/2026", hasData: false },
  ];
}

function ArchivePage() {
  const loaderData = Route.useLoaderData();
  const chapters: ArticleChapter[] = loaderData.chapters;
  const categories: string[] = loaderData.categories;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeChapterKey, setActiveChapterKey] = useState<string>(
    chapters.find((c) => c.kind === "featured")?.key ?? chapters[0]?.key ?? "tieu-diem",
  );
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Điều khiển chiều chạy / dừng của hàng tháng và hàng lọc chủ đề
  // direction: "reverse" (mặc định: phải sang trái) hoặc "forward" (trái sang phải)
  const [monthDir, setMonthDir] = useState<"reverse" | "forward">("reverse");
  const [monthPaused, setMonthPaused] = useState(false);
  const [catDir, setCatDir] = useState<"reverse" | "forward">("reverse");
  const [catPaused, setCatPaused] = useState(false);

  // Ref container cuộn thủ công khi người dùng bấm mũi tên
  const monthScrollRef = useRef<HTMLDivElement>(null);
  const catScrollRef = useRef<HTMLDivElement>(null);

  // Ref track nội bộ (phần animate-codex-marquee) để đo chiều rộng thực tế
  const monthTrackRef = useRef<HTMLDivElement>(null);
  const catTrackRef = useRef<HTMLDivElement>(null);

  const monthNavSlots = useMemo(() => buildMonthNavSlots(chapters), [chapters]);

  // Duration động tính theo chiều rộng thực để đồng bộ tốc độ px/giây giữa 2 dải
  const TARGET_PX_PER_SEC = 55; // tốc độ tuyến tính chung (px/giây)
  const [monthDuration, setMonthDuration] = useState<number | null>(null);
  const [catDuration, setCatDuration] = useState<number | null>(null);

  useEffect(() => {
    const measure = () => {
      // track chứa 2 bản nhân đôi -> một tập gốc = scrollWidth / 2
      if (monthTrackRef.current) {
        const w = monthTrackRef.current.scrollWidth;
        if (w > 0) setMonthDuration(w / 2 / TARGET_PX_PER_SEC);
      }
      if (catTrackRef.current) {
        const w = catTrackRef.current.scrollWidth;
        if (w > 0) setCatDuration(w / 2 / TARGET_PX_PER_SEC);
      }
    };
    measure();
    const t = setTimeout(measure, 300); // đo lại sau khi font/layout xong
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, [monthNavSlots, categories]);

  // Hàm điều hướng cuộn tay / đổi chiều tháng
  const handleMonthStep = (direction: "left" | "right") => {
    // Nếu bấm trái -> đảo chiều chạy sang forward (trái sang phải), nếu bấm phải -> reverse (phải sang trái)
    setMonthDir(direction === "left" ? "forward" : "reverse");
    if (monthScrollRef.current) {
      monthScrollRef.current.scrollBy({
        left: direction === "left" ? -220 : 220,
        behavior: "smooth",
      });
    }
  };

  // Hàm điều hướng cuộn tay / đổi chiều chủ đề
  const handleCatStep = (direction: "left" | "right") => {
    setCatDir(direction === "left" ? "forward" : "reverse");
    if (catScrollRef.current) {
      catScrollRef.current.scrollBy({
        left: direction === "left" ? -220 : 220,
        behavior: "smooth",
      });
    }
  };

  // Khôi phục theme đã chọn từ localStorage sau khi hydrate (tránh mismatch SSR)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("codex-theme");
    if (saved === "dark" || saved === "light") setTheme(saved);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        window.localStorage.setItem("codex-theme", next);
      }
      return next;
    });
  };

  // Khi vào trang kèm hash (#chapter-<key>), cuộn đến chương tương ứng
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    // Đợi một chút để DOM render xong danh sách chương
    const timer = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Lọc bài viết theo category và search
  const filteredChapters = useMemo(() => {
    return chapters
      .map((c) => {
        let items = c.items;
        if (selectedCategory !== "Tất cả") {
          items = items.filter((item) => item.category === selectedCategory);
        }
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          items = items.filter(
            (item) =>
              item.title.toLowerCase().includes(q) ||
              item.summary.toLowerCase().includes(q) ||
              item.tags.some((t) => t.toLowerCase().includes(q)) ||
              item.source.toLowerCase().includes(q),
          );
        }
        return {
          ...c,
          count: items.length,
          items,
        };
      })
      .filter((c) => c.items.length > 0);
  }, [chapters, selectedCategory, searchQuery]);

  const totalFilteredCount = useMemo(
    () => filteredChapters.reduce((sum, c) => sum + c.count, 0),
    [filteredChapters],
  );

  const handleOpenArticle = (slug: string) => {
    setSelectedSlug(slug);
    setIsModalOpen(true);
  };

  const scrollToChapter = (key: string) => {
    setActiveChapterKey(key);
    // Chương Tiêu điểm và các tháng cụ thể đều có id chapter-<key>
    const el = document.getElementById(`chapter-${key}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`${theme === "dark" ? "dark-codex" : "light-codex"} min-h-screen bg-background text-foreground font-sans selection:bg-jade/20 selection:text-midnight-deep`}
    >
      {/* === HEADER TÀNG THƯ GỌN GÀNG, SANG TRỌNG (ĐỤC HOÀN TOÀN) === */}
      <header className="sticky top-0 z-30 parchment-glass border-b border-border/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 space-y-3.5">
          {/* HÀNG 1: CHỮ "DÒNG CHẢY THỜI GIAN" ĐỨNG MỘT MÌNH 1 HÀNG TRÊN CÙNG
              Tối ưu typography: whitespace-nowrap trên desktop, tỷ lệ co giãn linh hoạt để luôn nằm trên 1 hàng */}
          <div className="text-center pt-1 pb-0.5 px-2">
            <h1
              className={`${theme === "dark" ? "perilous-eminence-title" : "perilous-light-title"} text-xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[0.08em] sm:tracking-[0.14em] leading-[1.2] whitespace-nowrap`}
            >
              DÒNG CHẢY THỜI GIAN
            </h1>
          </div>

          {/* HÀNG 2: TRANG CHÍNH · CHUYỂN THEME · TÌM KIẾM — cùng một hàng */}
          <div className="flex flex-row items-center justify-center gap-1.5 sm:gap-3 max-w-xl mx-auto w-full">
            {/* Nút về trang chính gọn nhẹ */}
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full border border-border bg-card/90 text-xs font-mono font-medium text-muted-foreground hover:text-gold-deep hover:border-gold/50 hover:bg-card transition-all shadow-2xs shrink-0"
              title="Về trang điện ảnh AI 2027"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-gold-deep" />
              <span className="hidden sm:inline">Trang chính</span>
            </Link>

            {/* Nút chuyển theme sáng/tối */}
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border bg-card/90 text-muted-foreground hover:text-gold-deep hover:border-gold/50 transition-all shadow-2xs shrink-0"
              title={theme === "dark" ? "Chuyển sang nền sáng" : "Chuyển sang nền tối"}
              aria-label="Chuyển theme sáng tối"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-gold" />
              ) : (
                <Moon className="w-4 h-4 text-gold-deep" />
              )}
            </button>

            {/* Ô tìm kiếm nhỏ gọn đặt ngay cạnh */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Tìm sự kiện, nhân vật, bài viết..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-12 py-1.5 text-xs text-neutral-900 dark:text-neutral-900 bg-secondary/80 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-jade/30 focus:border-jade/40 transition-all placeholder:text-neutral-500 shadow-2xs font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[11px] text-muted-foreground hover:text-foreground font-mono"
                >
                  Xóa
                </button>
              )}
            </div>
          </div>

          {/* HÀNG 3: MỤC CÁC THÁNG XẾP THÀNH 1 DÒNG RIÊNG — ĐỒNG BỘ TỐC ĐỘ, ĐIỀU KHIỂN CHẠY XUÔI / NGƯỢC */}
          <div className="pt-2 border-t border-border/40">
            <div className="relative flex items-center overflow-hidden py-1">
              {/* Nhãn cố định bên trái */}
              <div className="codex-fade-left relative z-10 shrink-0 pr-2 sm:pr-3 flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                <Calendar className="w-3.5 h-3.5 text-gold-deep" />
                <span className="hidden sm:inline">Các tháng:</span>
                <span className="sm:hidden">Tháng:</span>
              </div>

              {/* Nút lùi / chạy ngược sang phải */}
              <button
                type="button"
                onClick={() => handleMonthStep("left")}
                className="relative z-10 shrink-0 mr-1 p-1 rounded-full bg-secondary/80 hover:bg-secondary border border-border/60 text-muted-foreground hover:text-foreground transition-all cursor-pointer shadow-2xs"
                title="Chạy ngược / lùi danh sách tháng"
                aria-label="Cuộn tháng sang trái"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              {/* Dải tháng cuộn vô tận (nhân đôi mảng để animation marquee liền mạch không giật) */}
              <div ref={monthScrollRef} className="flex-1 overflow-x-auto no-scrollbar relative">
                <div
                  ref={monthTrackRef}
                  className={`flex items-center gap-2 w-max ${
                    monthDir === "reverse"
                      ? "animate-codex-marquee"
                      : "animate-codex-marquee-forward"
                  } ${monthPaused ? "marquee-paused" : ""}`}
                  style={monthDuration ? { animationDuration: `${monthDuration}s` } : undefined}
                >
                  {[...monthNavSlots, ...monthNavSlots].map((slot, idx) => {
                    const isActive = activeChapterKey === slot.key;
                    return (
                      <button
                        key={`${slot.key}-${idx}`}
                        onClick={() => scrollToChapter(slot.key)}
                        className={`month-tab shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs transition-all ${
                          isActive ? "active font-bold" : ""
                        }`}
                        title={slot.hasData ? `Xem ${slot.label}` : `${slot.label} (sắp cập nhật)`}
                      >
                        <span
                          className={`font-mono text-[11px] font-bold ${
                            slot.hasData ? "text-foreground" : "text-muted-foreground/80"
                          }`}
                        >
                          {slot.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Nút tạm dừng / tiếp tục chạy tháng */}
              <button
                type="button"
                onClick={() => setMonthPaused((p) => !p)}
                className="relative z-10 shrink-0 mx-1 p-1 rounded-full bg-secondary/80 hover:bg-secondary border border-border/60 text-muted-foreground hover:text-foreground transition-all cursor-pointer shadow-2xs"
                title={monthPaused ? "Tiếp tục chạy tháng" : "Tạm dừng chạy tháng"}
                aria-label="Tạm dừng hoặc tiếp tục chạy tháng"
              >
                {monthPaused ? (
                  <Play className="w-3 h-3 text-gold-deep" />
                ) : (
                  <Pause className="w-3 h-3" />
                )}
              </button>

              {/* Nút tiến / chạy xuôi sang trái */}
              <button
                type="button"
                onClick={() => handleMonthStep("right")}
                className="relative z-10 shrink-0 p-1 rounded-full bg-secondary/80 hover:bg-secondary border border-border/60 text-muted-foreground hover:text-foreground transition-all cursor-pointer shadow-2xs"
                title="Chạy xuôi / tiến danh sách tháng"
                aria-label="Cuộn tháng sang phải"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* HÀNG 4: MỤC ĐỂ LỌC THEO CÁC TAG LÀ MỘT DÒNG RIÊNG DƯỚI PHẦN CÁC THÁNG — ĐỒNG BỘ TỐC ĐỘ, ĐIỀU KHIỂN CHẠY XUÔI / NGƯỢC */}
          <div className="pt-1.5 border-t border-border/30">
            <div className="relative flex items-center overflow-hidden py-0.5">
              {/* Nhãn cố định bên trái */}
              <div className="codex-fade-left relative z-10 shrink-0 pr-2 sm:pr-3 flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                <Filter className="w-3.5 h-3.5 text-jade-deep" />
                <span className="hidden sm:inline">Chủ đề:</span>
                <span className="sm:hidden">Lọc:</span>
              </div>

              {/* Nút lùi / chạy ngược sang phải */}
              <button
                type="button"
                onClick={() => handleCatStep("left")}
                className="relative z-10 shrink-0 mr-1 p-1 rounded-full bg-secondary/80 hover:bg-secondary border border-border/60 text-muted-foreground hover:text-foreground transition-all cursor-pointer shadow-2xs"
                title="Chạy ngược / lùi danh sách chủ đề"
                aria-label="Cuộn chủ đề sang trái"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              {/* Dải tag lọc cuộn vô tận (tốc độ 60s như tháng, hỗ trợ đảo chiều / pause) */}
              <div ref={catScrollRef} className="flex-1 overflow-x-auto no-scrollbar relative">
                <div
                  ref={catTrackRef}
                  className={`flex items-center gap-1.5 w-max ${
                    catDir === "reverse" ? "animate-codex-marquee" : "animate-codex-marquee-forward"
                  } ${catPaused ? "marquee-paused" : ""}`}
                  style={catDuration ? { animationDuration: `${catDuration}s` } : undefined}
                >
                  {[...categories, ...categories].map((cat, idx) => {
                    const isSelected = selectedCategory === cat;
                    return (
                      <button
                        key={`${cat}-${idx}`}
                        onClick={() => setSelectedCategory(cat)}
                        className={`text-[11px] px-3 py-1 rounded-full whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                          isSelected
                            ? "bg-gold-deep text-white shadow-xs font-bold ring-1 ring-gold"
                            : "bg-secondary/70 text-muted-foreground hover:bg-secondary hover:text-foreground font-medium border border-border/50"
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Nút tạm dừng / tiếp tục chạy tag */}
              <button
                type="button"
                onClick={() => setCatPaused((p) => !p)}
                className="relative z-10 shrink-0 mx-1 p-1 rounded-full bg-secondary/80 hover:bg-secondary border border-border/60 text-muted-foreground hover:text-foreground transition-all cursor-pointer shadow-2xs"
                title={catPaused ? "Tiếp tục chạy chủ đề" : "Tạm dừng chạy chủ đề"}
                aria-label="Tạm dừng hoặc tiếp tục chạy chủ đề"
              >
                {catPaused ? (
                  <Play className="w-3 h-3 text-gold-deep" />
                ) : (
                  <Pause className="w-3 h-3" />
                )}
              </button>

              {/* Nút tiến / chạy xuôi sang trái */}
              <button
                type="button"
                onClick={() => handleCatStep("right")}
                className="relative z-10 shrink-0 p-1 rounded-full bg-secondary/80 hover:bg-secondary border border-border/60 text-muted-foreground hover:text-foreground transition-all cursor-pointer shadow-2xs"
                title="Chạy xuôi / tiến danh sách chủ đề"
                aria-label="Cuộn chủ đề sang phải"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* === MAIN: DANH SÁCH BÀI THEO CHƯƠNG THÁNG === */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-12 sm:space-y-16">
        {totalFilteredCount === 0 ? (
          <div className="text-center py-16 scroll-card rounded-2xl">
            <Search className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-40" />
            <h3 className="text-base font-bold text-foreground">Không tìm thấy bài viết phù hợp</h3>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Tất cả");
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-gold-deep text-white hover:bg-gold transition-colors"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        ) : (
          filteredChapters.map((chapter) => (
            <ChronicleChapter
              key={chapter.key}
              chapter={chapter}
              theme={theme}
              onOpenArticle={handleOpenArticle}
            />
          ))
        )}

        {/* Hint chuyển về trang chính */}
        <div className="text-center pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-gold-deep transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Xem phim dự báo & dòng thời gian điện ảnh
            <ChevronRight className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </main>

      {/* === FOOTER === */}
      <footer className="mt-10 sm:mt-16 border-t border-border bg-secondary/30 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="font-display font-black text-lg tracking-[0.15em] text-gold-gradient">
              AI 2027 — DÒNG CHẢY THỜI GIAN
            </span>
          </div>
          <p className="text-xs text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Kho lưu trữ tin tức trí tuệ nhân tạo theo dòng thời gian. Mọi nội dung được trích dẫn
            chính xác từ các cơ quan báo chí uy tín.
          </p>
          <div className="text-[11px] text-muted-foreground/60 font-mono">
            &copy; 2026–2027 AI Chronicle · Dòng thời gian sự kiện AI toàn cầu
          </div>
        </div>
      </footer>

      <ArticleModal
        slug={selectedSlug}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedSlug(null);
        }}
      />
    </div>
  );
}
