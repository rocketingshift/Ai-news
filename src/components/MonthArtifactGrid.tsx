import { useState, useMemo } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Lock, Star } from "lucide-react";
import { TruthCompass } from "./TruthCompass";

export interface MonthArtifactItem {
  id: string;
  monthNumber: number; // 1 to 12
  year: number; // 2026
  title: string; // e.g. "Tháng 9 năm 2026"
  shortBadge?: string;
  isComingSoon?: boolean;
  isSpotlight?: boolean; // ô "Tiêu điểm" nổi bật
  artifactImage: string;
  status: "active" | "coming_soon" | "upcoming" | "spotlight";
  articleCount?: number;
}

// 12 ô: Coming soon → Tiêu điểm → Tháng 10 → ... → Tháng 1 năm 2026
// Sắp xếp từ MỚI NHẤT -> CŨ NHẤT.
export const MONTH_ARTIFACTS_DATA: MonthArtifactItem[] = [
  {
    id: "coming-soon",
    monthNumber: 11,
    year: 2026,
    title: "Coming Soon",
    shortBadge: "SẮP DIỄN RA",
    isComingSoon: true,
    artifactImage:
      "https://vibe.filesafe.space/1790240714414154753/assets/86014dd2-e709-4ba6-802c-b15fcc10d2ca.png",
    status: "coming_soon",
  },
  {
    id: "spotlight",
    monthNumber: 0,
    year: 2026,
    title: "Tiêu điểm",
    shortBadge: "NỔI BẬT",
    isSpotlight: true,
    artifactImage:
      "https://vibe.filesafe.space/1790240714414154753/assets/b6066b7b-f91e-439f-bb7c-3c6f32e4b9cc.png",
    status: "spotlight",
    articleCount: 5,
  },
  {
    id: "m-10-2026",
    monthNumber: 10,
    year: 2026,
    title: "Tháng 10 năm 2026",
    shortBadge: "TIẾP THEO",
    artifactImage:
      "https://vibe.filesafe.space/1790240714414154753/assets/e7b62a94-1717-4656-bbd1-f2cc50400509.png",
    status: "upcoming",
  },
  {
    id: "m-09-2026",
    monthNumber: 9,
    year: 2026,
    title: "Tháng 9 năm 2026",
    shortBadge: "MỚI NHẤT",
    artifactImage:
      "https://vibe.filesafe.space/1790240714414154753/assets/48879e7c-a5c0-4ea0-9ab5-ceb7f5a4f381.png",
    status: "active",
    articleCount: 5,
  },
  {
    id: "m-08-2026",
    monthNumber: 8,
    year: 2026,
    title: "Tháng 8 năm 2026",
    shortBadge: "ĐÃ GHI NHẬN",
    artifactImage:
      "https://vibe.filesafe.space/1790240714414154753/assets/44659a3b-dec2-4dd0-a7de-833a5d46825a.png",
    status: "active",
    articleCount: 1,
  },
  {
    id: "m-07-2026",
    monthNumber: 7,
    year: 2026,
    title: "Tháng 7 năm 2026",
    shortBadge: "LƯU TRỮ",
    artifactImage:
      "https://vibe.filesafe.space/1790240714414154753/assets/b1d6d903-b7e1-4161-b636-72e8ba4d335d.png",
    status: "active",
  },
  {
    id: "m-06-2026",
    monthNumber: 6,
    year: 2026,
    title: "Tháng 6 năm 2026",
    shortBadge: "LƯU TRỮ",
    artifactImage:
      "https://vibe.filesafe.space/1790240714414154753/assets/73ec04f4-8108-48c4-b4ac-60beb56a23aa.png",
    status: "active",
  },
  {
    id: "m-05-2026",
    monthNumber: 5,
    year: 2026,
    title: "Tháng 5 năm 2026",
    shortBadge: "LƯU TRỮ",
    artifactImage:
      "https://vibe.filesafe.space/1790240714414154753/assets/8071f2dd-a006-4868-9a0d-511e5d107507.png",
    status: "active",
  },
  {
    id: "m-04-2026",
    monthNumber: 4,
    year: 2026,
    title: "Tháng 4 năm 2026",
    shortBadge: "LƯU TRỮ",
    artifactImage:
      "https://vibe.filesafe.space/1790240714414154753/assets/0c27dd79-0fd8-439d-a52e-dc9c3df8f19e.png",
    status: "active",
  },
  {
    id: "m-03-2026",
    monthNumber: 3,
    year: 2026,
    title: "Tháng 3 năm 2026",
    shortBadge: "LƯU TRỮ",
    artifactImage:
      "https://vibe.filesafe.space/1790240714414154753/assets/ff510470-d9c5-4fb2-b29b-9179916695a9.png",
    status: "active",
  },
  {
    id: "m-02-2026",
    monthNumber: 2,
    year: 2026,
    title: "Tháng 2 năm 2026",
    shortBadge: "LƯU TRỮ",
    artifactImage:
      "https://vibe.filesafe.space/1790240714414154753/assets/239567f0-0702-4138-b440-1adc708fb034.png",
    status: "active",
  },
  {
    id: "m-01-2026",
    monthNumber: 1,
    year: 2026,
    title: "Tháng 1 năm 2026",
    shortBadge: "KHỞI NGUYÊN",
    artifactImage:
      "https://vibe.filesafe.space/1790240714414154753/assets/b64e7811-02bd-4201-a59b-7a314c63b009.png",
    status: "active",
  },
];

const VISIBLE_COUNT = 9; // Chỉ hiển thị đồng thời 9 ô

interface MonthArtifactGridProps {
  onSelectMonth?: (item: MonthArtifactItem) => void;
}

export function MonthArtifactGrid({ onSelectMonth }: MonthArtifactGridProps) {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState<number>(0);
  const [selectedId, setSelectedId] = useState<string>("m-09-2026");

  const maxStartIndex = Math.max(0, MONTH_ARTIFACTS_DATA.length - VISIBLE_COUNT);

  const visibleItems = useMemo(() => {
    return MONTH_ARTIFACTS_DATA.slice(startIndex, startIndex + VISIBLE_COUNT);
  }, [startIndex]);

  const canGoNewer = startIndex > 0;
  const canGoOlder = startIndex < maxStartIndex;

  const handleGoNewer = () => setStartIndex((prev) => Math.max(0, prev - 1));
  const handleGoOlder = () => setStartIndex((prev) => Math.min(maxStartIndex, prev + 1));

  // Ánh xạ ô artifact → chapter key trong trang lưu trữ
  // spotlight → "tieu-diem", m-MM-YYYY → "YYYY-MM"
  const itemToChapterKey = (item: MonthArtifactItem): string | null => {
    if (item.isSpotlight) return "tieu-diem";
    if (item.status === "active") {
      const match = item.id.match(/^m-(\d{2})-(\d{4})$/);
      if (match) return `${match[2]}-${match[1]}`;
    }
    return null;
  };

  const handleCardClick = (item: MonthArtifactItem) => {
    setSelectedId(item.id);
    if (onSelectMonth) onSelectMonth(item);
    // Chỉ điều hướng sang trang lưu trữ với các ô CÓ dữ liệu (active / spotlight).
    // Coming soon & upcoming (chưa có bài) giữ nguyên trạng thái khóa.
    if (item.status === "active" || item.status === "spotlight") {
      const chapterKey = itemToChapterKey(item);
      navigate({
        to: "/luu-tru",
        hash: chapterKey ? `chapter-${chapterKey}` : undefined,
      });
    }
  };

  return (
    <section
      id="truth-tracking-section"
      className="relative w-full bg-[#07070b] text-[#ede4ce] pt-4 sm:pt-10 pb-10 sm:pb-16 overflow-hidden select-none -mt-4"
    >
      {/* Dải chuyển tiếp quang học sương mây & sương mù mực loang từ trang ForecastChronicle sang TruthTracking */}
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-black via-black/95 to-transparent pointer-events-none z-20" />

      {/* Background tranh thủy mặc phong cách Where Winds Meet: nhẹ, thanh thoát, núi mờ trong sương khói và vệt mực */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"
        style={{
          backgroundImage:
            "url('https://vibe.filesafe.space/1790240714414154753/assets/3924253e-2584-4fd9-958f-95ba7cca02c8.png')",
        }}
      />

      {/* Lớp phủ chuyển sắc sương khói mượt mà, loại bỏ hoàn toàn đứt gãy */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-[#07070b] opacity-90" />

      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#82e3f5]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TIÊU ĐỀ: Đã bỏ badge chữ "TIMELINE CODEX • 2026 ARCHIVES" theo yêu cầu */}
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl perilous-eminence-title leading-[1.15] py-2 mx-auto">
            TRUY VẾT SỰ THẬT
          </h2>

          {/* Đồ họa 3D khoảng thở — La Bàn Chân Lý */}
          <TruthCompass />

          <div className="mt-4 mb-4 flex items-center justify-center gap-3">
            <span className="h-[1px] w-20 sm:w-32 bg-gradient-to-r from-transparent via-[#38b4d8]/60 to-[#d4af37]" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#82e3f5] bg-[#12110d] shadow-[0_0_8px_rgba(130,227,245,0.8)]" />
            <span className="h-[1px] w-20 sm:w-32 bg-gradient-to-l from-transparent via-[#38b4d8]/60 to-[#d4af37]" />
          </div>

          <p className="text-xs sm:text-sm text-[#bcae8e] max-w-2xl mx-auto font-sans leading-relaxed">
            Kho lưu trữ dữ liệu sự kiện AI thật theo từng tháng. Chọn một mốc để theo dõi các sự
            kiện chính xác đã được xác thực.
          </p>

          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={handleGoNewer}
                disabled={!canGoNewer}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-mono transition-all ${
                  canGoNewer
                    ? "bg-black/80 border-[#d4af37] text-[#f3e5ab] hover:scale-105 hover:bg-[#d4af37]/10 cursor-pointer shadow-sm"
                    : "bg-black/30 border-[#2d2518] text-[#554a35] cursor-not-allowed opacity-40"
                }`}
                title="Xem các tháng mới hơn"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Mới hơn</span>
              </button>

              <button
                onClick={handleGoOlder}
                disabled={!canGoOlder}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-mono transition-all ${
                  canGoOlder
                    ? "bg-black/80 border-[#d4af37] text-[#f3e5ab] hover:scale-105 hover:bg-[#d4af37]/10 cursor-pointer shadow-sm"
                    : "bg-black/30 border-[#2d2518] text-[#554a35] cursor-not-allowed opacity-40"
                }`}
                title="Xem các tháng cũ hơn"
              >
                <span>Cũ hơn</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <span className="text-[11px] sm:text-xs font-mono text-[#8f7e5b] text-center">
              Hiển thị <span className="text-[#f3e5ab] font-bold">9</span> /{" "}
              {MONTH_ARTIFACTS_DATA.length} mốc
            </span>
          </div>
        </div>

        {/* GRID 9 Ô */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-7">
          {visibleItems.map((item) => {
            const isSelected = selectedId === item.id;
            const isComing = item.isComingSoon;
            const isSpotlight = item.isSpotlight;

            // Ô Tiêu điểm: styling nổi bật riêng
            const cardBase = isSpotlight
              ? "bg-gradient-to-b from-[#2a2110] via-[#1a1408] to-[#0c0a06] border-[#e6c766] shadow-[0_0_40px_rgba(212,175,55,0.35)]"
              : isSelected
                ? "bg-gradient-to-b from-[#1c1810] via-[#12100a] to-[#0c0a06] shadow-[0_0_30px_rgba(212,175,55,0.25)] border-[#e6c766]"
                : "bg-gradient-to-b from-[#14120e]/90 via-[#0e0c08]/90 to-[#070604]/90 hover:from-[#1b1710] hover:to-[#0f0d09] border-[#443722] hover:border-[#967d48]";

            const cornerColor = isSpotlight
              ? "border-[#f3e5ab]"
              : isSelected
                ? "border-[#f3e5ab]"
                : "border-[#6b5835] group-hover:border-[#c59b27]";

            return (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className={`group relative rounded-2xl transition-all duration-300 p-3 sm:p-5 flex flex-col items-center justify-between min-h-[180px] sm:min-h-[240px] border ${
                  item.status === "active" || item.status === "spotlight"
                    ? "cursor-pointer"
                    : "cursor-default"
                } ${cardBase}`}
                style={{
                  boxShadow: isSpotlight
                    ? "inset 0 0 0 1px rgba(230,199,102,0.6), 0 12px 30px -5px rgba(0,0,0,0.85)"
                    : isSelected
                      ? "inset 0 0 0 1px rgba(230,199,102,0.4), 0 10px 25px -5px rgba(0,0,0,0.8)"
                      : "inset 0 0 0 1px rgba(180,140,50,0.12), 0 10px 25px -5px rgba(0,0,0,0.8)",
                }}
              >
                {/* 4 Chốt góc */}
                <span
                  className={`absolute top-2 left-2 w-2 h-2 border-t border-l transition-colors ${cornerColor}`}
                />
                <span
                  className={`absolute top-2 right-2 w-2 h-2 border-t border-r transition-colors ${cornerColor}`}
                />
                <span
                  className={`absolute bottom-2 left-2 w-2 h-2 border-b border-l transition-colors ${cornerColor}`}
                />
                <span
                  className={`absolute bottom-2 right-2 w-2 h-2 border-b border-r transition-colors ${cornerColor}`}
                />

                {/* Badge trạng thái */}
                <div className="w-full flex items-center justify-between text-[10px] font-mono">
                  {item.shortBadge && (
                    <span
                      className={`px-2 py-0.5 rounded-full border tracking-widest uppercase font-semibold ${
                        isComing
                          ? "bg-[#38b4d8]/10 text-[#82e3f5] border-[#38b4d8]/40"
                          : isSpotlight
                            ? "bg-[#d4af37]/25 text-[#ffe082] border-[#d4af37]/70 shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                            : isSelected
                              ? "bg-[#d4af37]/20 text-[#f3e5ab] border-[#d4af37]/60"
                              : "bg-black/50 text-[#8a7852] border-[#3a2f1b]"
                      }`}
                    >
                      {item.shortBadge}
                    </span>
                  )}

                  {isSpotlight ? (
                    <span className="text-[#ffe082] flex items-center gap-1 font-bold">
                      <Star className="w-3 h-3 fill-[#ffe082]" />
                      {item.articleCount} bài
                    </span>
                  ) : item.articleCount ? (
                    <span className="text-[#d4af37] flex items-center gap-1 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
                      {item.articleCount} bài
                    </span>
                  ) : isComing ? (
                    <span className="text-[#82e3f5] flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      Đang đợi
                    </span>
                  ) : (
                    <span className="text-[#6d5f42]">Sắp kết nối</span>
                  )}
                </div>

                {/* KHU VỰC ICON 3D ARTIFACT LƠ LỬNG */}
                <div className="relative my-2 w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
                  <div
                    className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 ${
                      isSpotlight
                        ? "bg-[#d4af37]/30 scale-125"
                        : isSelected
                          ? "bg-[#d4af37]/20 scale-110"
                          : "bg-transparent group-hover:bg-[#d4af37]/10"
                    }`}
                  />
                  <img
                    src={item.artifactImage}
                    alt={item.title}
                    className={`w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] transition-all duration-500 ease-out group-hover:scale-110 ${
                      isSpotlight ? "scale-110" : isSelected ? "scale-105" : ""
                    }`}
                  />
                </div>

                {/* PHẦN TEXT TIÊU ĐỀ: chỉ tên tháng/năm hoặc "Tiêu điểm" / "Coming Soon" */}
                <div className="w-full text-center mt-1 px-1">
                  <div className="inline-flex items-center justify-center gap-1 sm:gap-1.5 text-[11px] sm:text-[13.5px] font-display font-bold tracking-[0.12em] uppercase transition-colors leading-tight">
                    <span
                      className={`text-[9px] transition-colors ${
                        isSpotlight || isSelected
                          ? "text-[#f3e5ab]"
                          : "text-[#c59b27] group-hover:text-[#ffe082]"
                      }`}
                    >
                      ❖
                    </span>

                    <span
                      className={`transition-colors ${
                        isSpotlight
                          ? "text-white drop-shadow-[0_0_12px_rgba(255,224,130,0.9)] font-black text-sm sm:text-base"
                          : isSelected
                            ? "text-[#ffffff] drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] font-black"
                            : "text-[#ecd9ad] group-hover:text-white"
                      }`}
                    >
                      {item.title}
                    </span>

                    <span
                      className={`text-[9px] transition-colors ${
                        isSpotlight || isSelected
                          ? "text-[#f3e5ab]"
                          : "text-[#c59b27] group-hover:text-[#ffe082]"
                      }`}
                    >
                      ❖
                    </span>
                  </div>
                </div>

                {/* Viền đáy sáng */}
                <div
                  className={`absolute inset-x-8 bottom-0 h-[2px] transition-all duration-300 ${
                    isSpotlight
                      ? "bg-gradient-to-r from-transparent via-[#ffe082] to-transparent opacity-100"
                      : isSelected
                        ? "bg-gradient-to-r from-transparent via-[#f3e5ab] to-transparent opacity-100"
                        : "bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-70"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Lớp sương mù chuyển tiếp liền mạch mượt mà sang phân đoạn LỰA CHỌN CỦA BẠN */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-[#050508]/80 to-[#07070b] pointer-events-none z-20" />
    </section>
  );
}
