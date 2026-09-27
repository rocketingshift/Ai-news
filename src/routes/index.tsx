import { createFileRoute } from "@tanstack/react-router";
import { CinemaHero } from "@/components/CinemaHero";
import { ForecastChronicle } from "@/components/ForecastChronicle";
import { MonthArtifactGrid } from "@/components/MonthArtifactGrid";
import { YourChoiceSection } from "@/components/YourChoiceSection";

const HERO_POSTER =
  "https://vibe.filesafe.space/1790240714414154753/assets/143e590c-b0f6-403f-96f0-a6feb24699b2.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI 2027 — Biên Niên Sự Kiện Trí Tuệ Nhân Tạo" },
      {
        name: "description",
        content:
          "Phim dự báo AI 2027 và dòng thời gian sự kiện AI thật 2026–2027: AI tự ý tấn công chính phủ, Bill Gates cảnh báo, tranh luận giảm tốc phát triển giữa các ông trùm công nghệ.",
      },
      { property: "og:title", content: "AI 2027 — Biên Niên Sự Kiện Trí Tuệ Nhân Tạo" },
      {
        property: "og:description",
        content:
          "Xem phim dự báo AI 2027, sau đó tự đối chiếu với dòng tin tức thật theo từng tháng. Không bình luận, không so sánh — chỉ sự thật.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO_POSTER },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO_POSTER },
    ],
  }),
  component: CinemaLanding,
});

function CinemaLanding() {
  const scrollToHeroMovie = () => {
    const el = document.getElementById("cinema-hero-root");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTruthTracking = () => {
    const el = document.getElementById("truth-tracking-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToForecast = () => {
    const el = document.getElementById("forecast-chronicle-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-jade/30 selection:text-white">
      {/* === HERO FULLSCREEN — Video Vimeo lặp 30s đầu, nút Play phát toàn bộ phim === */}
      <CinemaHero onScrollToTimeline={scrollToForecast} />

      {/* === BIÊN NIÊN DỰ BÁO AI 2026–2027 (13 cột mốc từ AI-2027.com) === */}
      <ForecastChronicle
        onWatchMovie={scrollToHeroMovie}
        onScrollToTimeline={scrollToTruthTracking}
      />

      {/* === TRUY VẾT SỰ THẬT — GRID 9 Ô THÁNG RELIC, link sang trang Lưu trữ === */}
      <MonthArtifactGrid />

      {/* === LỰA CHỌN CỦA BẠN — CTA gia nhập cộng đồng AI tỉnh thức === */}
      <YourChoiceSection />
    </div>
  );
}
