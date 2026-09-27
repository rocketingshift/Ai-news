import { useState, useEffect, useRef } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  X,
  Calendar,
  Tag,
  Building2,
  Video,
  Volume2,
  VolumeX,
  Loader2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import type { Article } from "@/lib/articles.types";
import { getArticleBySlug } from "@/lib/articles.service";

interface ArticleModalProps {
  slug: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ArticleModal({ slug, isOpen, onClose }: ArticleModalProps) {
  const queryClient = useQueryClient();

  const articleQuery = useQuery({
    queryKey: ["article", slug],
    queryFn: () => (slug ? getArticleBySlug(slug) : null),
    enabled: !!slug && isOpen,
    staleTime: 5 * 60 * 1000,
  });

  const article: Article | null = articleQuery.data ?? null;

  // Khóa cuộn body khi mở modal + Esc đóng.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-midnight-deep/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 flex flex-col w-full bg-card border border-gold/25 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden transition-all duration-300 max-w-4xl max-h-[94vh] h-[92vh] sm:h-[90vh]">
        {/* Nút đóng góc trên cố định tinh tế (giúp người đọc luôn có thể đóng ngay hoặc dùng nút đóng lớn dưới chân trang) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-secondary/80 hover:bg-destructive hover:text-white text-muted-foreground transition-all shadow-md cursor-pointer border border-border/60 hover:scale-105"
          title="Đóng cửa sổ (Esc)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 md:px-12 space-y-6">
          {articleQuery.isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
              <Loader2 className="w-8 h-8 animate-spin mb-3 text-gold" />
              <p className="text-sm font-mono">Đang tải nội dung bài viết...</p>
            </div>
          ) : articleQuery.isError ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <AlertCircle className="w-10 h-10 text-destructive mb-3" />
              <h3 className="text-base font-bold text-foreground">Không tải được bài viết</h3>
              <button
                onClick={() =>
                  slug && queryClient.invalidateQueries({ queryKey: ["article", slug] })
                }
                className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-gold to-gold-deep text-midnight-deep hover:shadow-md hover:shadow-gold/20 transition-all"
              >
                Thử lại
              </button>
            </div>
          ) : !article ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-sm text-muted-foreground">Không tìm thấy bài viết này.</p>
            </div>
          ) : (
            <ArticleReader article={article} onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// ArticleReader — hiển thị nguyên văn nội dung (chỉ nặng khi mở popup).
// ----------------------------------------------------------------------------
// Helper trích xuất chỉ ngày tháng (bỏ giờ, AM/PM, GMT...)
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

function ArticleReader({ article, onClose }: { article: Article; onClose: () => void }) {
  return (
    <>
      {/* Article Header */}
      <div className="space-y-4 max-w-3xl mx-auto pt-2">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground font-mono">
          <span className="flex items-center gap-1.5 text-foreground/80 font-medium">
            <Calendar className="w-3.5 h-3.5 text-gold-deep" />
            {formatDateOnly(article.timestampLabel, article.publishedAt)}
          </span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>

        <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground font-serif leading-tight">
          {article.title}
        </h1>

        <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed font-medium border-l-4 border-gold/50 pl-4 py-1 italic bg-gold/5 rounded-r-lg">
          {article.summary}
        </p>
      </div>

      {/* Article Main Body Content (Exact Full Text) */}
      <article className="max-w-3xl mx-auto space-y-6 text-foreground text-sm sm:text-lg leading-relaxed font-sans">
        {article.content.map((block, idx) => {
          if (block.type === "paragraph") {
            return (
              <p key={idx} className="text-foreground/90 leading-8">
                {block.text}
              </p>
            );
          }
          if (block.type === "heading") {
            return (
              <h2
                key={idx}
                className="text-xl sm:text-2xl font-bold font-serif text-foreground pt-4 pb-2 border-b border-border/60"
              >
                {block.text}
              </h2>
            );
          }
          if (block.type === "quote") {
            return (
              <blockquote
                key={idx}
                className="my-6 p-4 sm:p-6 bg-gold/5 border-l-4 border-gold/50 rounded-r-xl italic text-foreground font-sans font-medium text-base sm:text-lg leading-relaxed"
              >
                {block.text}
              </blockquote>
            );
          }
          if (block.type === "image") {
            return (
              <figure key={idx} className="my-6 space-y-2">
                <div className="relative overflow-hidden rounded-xl border border-border shadow-md bg-muted/60 flex items-center justify-center">
                  <img
                    src={block.src}
                    alt={block.caption || article.title}
                    className="w-full h-auto max-h-[580px] object-contain mx-auto"
                    loading="lazy"
                  />
                </div>
                {block.caption && (
                  <figcaption className="text-xs sm:text-sm text-center text-muted-foreground italic font-mono px-2">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          }
          if (block.type === "video") {
            return (
              <VideoBlock
                key={idx}
                src={block.src}
                poster={block.poster || block.src}
                caption={block.caption}
                sourceUrl={article.sourceUrl}
              />
            );
          }
          if (block.type === "list" && block.items) {
            return (
              <ul key={idx} className="my-4 space-y-2.5 pl-2">
                {block.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-gold mt-2.5 shrink-0" />
                    <span className="text-foreground/90 leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </article>

      {/* Nguồn gốc — Đặt ngay sau khi kết thúc nội dung bài viết */}
      <div className="max-w-3xl mx-auto pt-6 pb-2 border-t border-border/60 flex flex-wrap items-center justify-end gap-3 text-sm">
        {/* Link dẫn về bản gốc — minh bạch nguồn, mở tab mới */}
        <a
          href={article.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-gold-deep transition-colors group"
          title={`Xem bài gốc trên ${article.source}`}
        >
          <Building2 className="w-3.5 h-3.5 text-gold-deep" />
          <span>
            Nguồn:{" "}
            <strong className="text-foreground group-hover:text-gold-deep transition-colors">
              {article.source}
            </strong>
          </span>
          <ExternalLink className="w-3.5 h-3.5 text-gold-deep opacity-70 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>

      {/* Tags & Footer Section + Nút Đóng Popup dưới chân trang */}
      <div className="max-w-3xl mx-auto pt-4 border-t border-border space-y-5 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-muted-foreground flex items-center gap-1 font-mono">
            <Tag className="w-3.5 h-3.5" /> Thẻ chủ đề:
          </span>
          {article.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-2.5 py-1 bg-muted text-muted-foreground rounded-md font-mono hover:text-foreground transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Nút đóng popup nổi bật đặt ở cuối trang */}
        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold rounded-xl bg-secondary/90 hover:bg-gold/20 text-foreground border border-gold/40 hover:border-gold hover:text-gold-deep transition-all shadow-md cursor-pointer hover:scale-105"
          >
            <X className="w-4 h-4 text-gold" />
            <span>Đóng bài viết</span>
          </button>
        </div>
      </div>
    </>
  );
}

// ----------------------------------------------------------------------------
// VideoBlock — tự động phát không tiếng, có nút bật/tắt tiếng.
// ----------------------------------------------------------------------------
function VideoBlock({
  src,
  poster,
  caption,
  sourceUrl,
}: {
  src: string;
  poster: string;
  caption?: string;
  sourceUrl: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    setIsMuted(next);
    if (!next && v.paused) {
      v.play().catch(() => {});
    }
  };

  if (hasError) {
    return (
      <figure className="my-6 space-y-2">
        <div className="p-6 text-center space-y-3 bg-secondary/90 rounded-2xl border border-border">
          <p className="text-sm font-semibold text-foreground">
            Video được phát trực tiếp trên trang báo VnExpress
          </p>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-gold to-gold-deep text-midnight-deep hover:shadow-md hover:shadow-gold/20 transition-all"
          >
            Xem Video trực tiếp trên VnExpress &rarr;
          </a>
        </div>
        {caption && (
          <figcaption className="text-xs sm:text-sm text-center text-muted-foreground italic font-mono px-2 flex items-center justify-center gap-1.5 mt-2">
            <Video className="w-3.5 h-3.5 text-gold shrink-0" />
            <span>{caption}</span>
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="my-6 space-y-2">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-black shadow-xl group/video">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controlsList="nodownload"
          poster={poster}
          src={src}
          className="w-full h-auto max-h-[520px] rounded-2xl cursor-pointer"
          preload="metadata"
          onError={() => setHasError(true)}
        >
          Trình duyệt của bạn không hỗ trợ video HTML5.
        </video>

        {/* Nút bật/tắt tiếng — nổi lên trên video */}
        <button
          onClick={toggleMute}
          title={isMuted ? "Bật tiếng" : "Tắt tiếng"}
          className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-lg bg-background/85 backdrop-blur-md text-foreground border border-gold/30 shadow-lg hover:bg-background transition-colors"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-gold" />
              <span>Bật tiếng</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-gold" />
              <span>Tắt tiếng</span>
            </>
          )}
        </button>
      </div>
      {caption && (
        <figcaption className="text-xs sm:text-sm text-center text-muted-foreground italic font-mono px-2 flex items-center justify-center gap-1.5 mt-2">
          <Video className="w-3.5 h-3.5 text-primary shrink-0" />
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
