import type { ArticleChapter, ArticleSummary } from "@/lib/articles.service";
import { Sparkles, Flame, Calendar, BookOpen, Maximize2 } from "lucide-react";

// Helper trích xuất ngày tháng
function formatDateOnly(timestampLabel: string, publishedAt?: string): string {
  if (publishedAt) {
    const d = new Date(publishedAt);
    if (!isNaN(d.getTime())) {
      const day = String(d.getDate()).padStart(2, "0");
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    }
  }
  const dateMatch = timestampLabel.match(/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{4}/);
  if (dateMatch) {
    return dateMatch[0].replace(/-/g, "/");
  }
  return timestampLabel.split("-")[0].split("GMT")[0].trim();
}

export function ChronicleChapter({
  chapter,
  theme,
  onOpenArticle,
}: {
  chapter: ArticleChapter;
  theme: "light" | "dark";
  onOpenArticle: (slug: string) => void;
}) {
  return (
    <section id={`chapter-${chapter.key}`} className="scroll-mt-[300px] sm:scroll-mt-[280px]">
      {/* Tiêu đề chương — Khắc kim đồng cổ & Ngọc Jade với dải chỉ vàng sang ngang */}
      <div className="pb-6 border-b border-border/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Dấu Triện: Light mode = Ngọc Bích viền vàng / Dark mode = Đồng Cổ Hoàng Gia */}
            <div className="imperial-jade-seal-frame bronze-seal-frame shrink-0">
              <div className="relative w-14 h-14 sm:w-[76px] sm:h-[76px] p-[2px] bg-gradient-to-br from-[#d4af37] via-[#92400e] to-[#78350f] rounded-none [clip-path:polygon(14px_0%,calc(100%-14px)_0%,100%_14px,100%_calc(100%-14px),calc(100%-14px)_100%,14px_100%,0%_calc(100%-14px),0%_14px)]">
                <div className="w-full h-full imperial-jade-seal bronze-seal flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-[3px] border border-gold/45 pointer-events-none [clip-path:polygon(10px_0%,calc(100%-10px)_0%,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0%_calc(100%-10px),0%_10px)]" />
                  <span className="absolute top-1 left-3 w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-2xs opacity-90" />
                  <span className="absolute top-1 right-3 w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-2xs opacity-90" />
                  <span className="absolute bottom-1 left-3 w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-2xs opacity-90" />
                  <span className="absolute bottom-1 right-3 w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-2xs opacity-90" />
                  <span className="relative z-10 text-[9px] uppercase tracking-[0.24em] font-sans font-extrabold text-[#134e4a] dark:text-[#0f766e] pl-[0.24em] drop-shadow-2xs">
                    CHƯƠNG
                  </span>
                  <span className="relative z-10 text-2xl sm:text-3xl font-viet-display font-black tracking-tight leading-none text-gold-gradient drop-shadow-xs">
                    {String(chapter.chapterIndex).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>

            {/* Chữ mốc tháng */}
            <div className="space-y-1">
              {chapter.kind === "featured" ? (
                <>
                  <h2 className="text-xl sm:text-3xl lg:text-4xl flex items-baseline">
                    <span
                      className={`${theme === "dark" ? "chapter-dark-title" : "chapter-bronze-gold-title"} font-black uppercase tracking-[0.04em] inline-block font-viet-display`}
                      style={{
                        paddingTop: "0.15em",
                        paddingBottom: "0.25em",
                        lineHeight: 1.2,
                      }}
                    >
                      TIÊU ĐIỂM
                    </span>
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground font-mono flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-gold-deep font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-gold-deep" />
                      <span className="font-viet-display font-bold">{chapter.count}</span> bài nổi
                      bật nhất
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-xl sm:text-3xl lg:text-4xl flex items-baseline flex-wrap gap-x-2">
                    <span
                      className={`${theme === "dark" ? "chapter-dark-title" : "chapter-bronze-gold-title"} font-black uppercase tracking-[0.04em] inline-block font-viet-display`}
                      style={{
                        paddingTop: "0.15em",
                        paddingBottom: "0.25em",
                        lineHeight: 1.2,
                      }}
                    >
                      THÁNG
                    </span>
                    <span
                      className={`${theme === "dark" ? "chapter-dark-title" : "chapter-bronze-gold-title"} font-black tracking-normal inline-block font-viet-display`}
                      style={{
                        paddingTop: "0.15em",
                        paddingBottom: "0.25em",
                        lineHeight: 1.2,
                      }}
                    >
                      {String(chapter.month).padStart(2, "0")}
                    </span>
                    <span className="opacity-40 text-xl sm:text-2xl font-light inline-block text-foreground">
                      ·
                    </span>
                    <span
                      className={`${theme === "dark" ? "chapter-dark-title" : "chapter-bronze-gold-title"} font-black tracking-normal inline-block font-viet-display`}
                      style={{
                        paddingTop: "0.15em",
                        paddingBottom: "0.25em",
                        lineHeight: 1.2,
                      }}
                    >
                      {chapter.year}
                    </span>
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground font-mono flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-gold-deep font-bold">
                      <Flame className="w-3.5 h-3.5 text-gold-deep" />
                      <span className="font-viet-display font-bold">{chapter.count}</span> sự kiện
                      xác thực
                    </span>
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-muted-foreground/70">
            <span className="h-px w-16 bg-gradient-to-r from-border to-gold/40" />
            <span className="text-[11px] uppercase tracking-widest text-gold-deep font-semibold">
              Mốc thời gian
            </span>
          </div>
        </div>
      </div>

      {/* Danh sách bài */}
      <div className="relative pl-5 sm:pl-10 pt-6 sm:pt-8 space-y-6 sm:space-y-8 before:absolute before:left-[8px] sm:before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-gold/60 before:via-gold/30 before:to-transparent before:opacity-70">
        {chapter.items.map((article) => (
          <ChronicleArticleCard key={article.id} article={article} onOpen={onOpenArticle} />
        ))}
      </div>
    </section>
  );
}

export function ChronicleArticleCard({
  article,
  onOpen,
}: {
  article: ArticleSummary;
  onOpen: (slug: string) => void;
}) {
  return (
    <div className="relative group">
      {/* Dot timeline */}
      <div className="absolute -left-[19px] sm:-left-[33px] top-2 flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-card border-2 border-gold/70 group-hover:border-gold group-hover:scale-110 transition-all shadow-xs z-10">
        <div className="w-1.5 h-1.5 rounded-full bg-gold-deep group-hover:bg-gold transition-colors" />
      </div>

      {/* Article card */}
      <div className="scroll-card rounded-2xl p-3.5 sm:p-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          <div className="md:col-span-4 relative group/thumb overflow-hidden rounded-xl bg-muted aspect-video cursor-pointer border border-gold/20">
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div
              onClick={() => onOpen(article.slug)}
              className="absolute inset-0 bg-midnight-deep/70 backdrop-blur-xs opacity-0 group-hover/thumb:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 text-center"
            >
              <Maximize2 className="w-6 h-6 text-gold animate-bounce" />
              <span className="text-xs font-bold text-white bg-white/10 px-3 py-1.5 rounded-lg border border-gold/30">
                Click xem nội dung
              </span>
            </div>
            <span
              className={`absolute bottom-2 left-2 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border backdrop-blur-md shadow-xs z-10 ${article.categoryColor}`}
            >
              {article.category}
            </span>
          </div>

          <div className="md:col-span-8 space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5 text-foreground/80 font-medium">
                <Calendar className="w-3.5 h-3.5 text-gold-deep" />
                {formatDateOnly(article.timestampLabel, article.publishedAt)}
              </span>
              <span className="text-[11px]">{article.readTime}</span>
            </div>

            <h3
              onClick={() => onOpen(article.slug)}
              className="text-base sm:text-xl font-bold font-serif text-foreground hover:text-jade transition-colors cursor-pointer leading-snug"
            >
              {article.title}
            </h3>

            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
              {article.summary}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-border/60">
              <div className="flex items-center gap-1.5">
                {article.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 bg-secondary text-muted-foreground rounded font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => onOpen(article.slug)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-gold to-gold-deep text-white hover:shadow-md hover:shadow-gold/20 transition-all shadow-xs cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Xem nội dung</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
