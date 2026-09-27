import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { Play, Pause, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { AI_2027_FORECAST_PERIODS, type ForecastPeriod } from "@/lib/forecast-2027.data";
import { CelestialOrrery } from "./CelestialOrrery";

interface ForecastChronicleProps {
  onWatchMovie?: () => void;
  onScrollToTimeline?: () => void;
}

const AUTO_ROTATE_INTERVAL = 7000; // 7 giây mỗi mốc

export function ForecastChronicle({ onWatchMovie, onScrollToTimeline }: ForecastChronicleProps) {
  const [selectedYear, setSelectedYear] = useState<number | "ALL">("ALL");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // isAutoPlaying = ý ĐỊNH của người dùng (có muốn auto hay không)
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  // Trạng thái môi trường: section có đang trong viewport không, user có đang hover không
  const [isInView, setIsInView] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const timelineBarRef = useRef<HTMLDivElement | null>(null);

  // Danh sách các mốc theo bộ lọc năm
  const filteredPeriods = useMemo(() => {
    if (selectedYear === "ALL") return AI_2027_FORECAST_PERIODS;
    return AI_2027_FORECAST_PERIODS.filter((p) => p.year === selectedYear);
  }, [selectedYear]);

  // Đảm bảo currentIndex luôn hợp lệ khi đổi bộ lọc
  useEffect(() => {
    setCurrentIndex(0);
    setProgress(0);
  }, [selectedYear]);

  const activePeriod: ForecastPeriod = filteredPeriods[currentIndex] || filteredPeriods[0];

  // Xen kẽ vị trí: mốc chẵn thì ART bên TRÁI, TEXT bên PHẢI (như Ảnh 1).
  // Mốc lẻ thì TEXT bên TRÁI, ART bên PHẢI (như Ảnh 2).
  const isArtOnLeft = currentIndex % 2 === 0;

  // IntersectionObserver: pause khi section ra khỏi viewport → khắc phục giật cục
  useEffect(() => {
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsInView(entry.isIntersecting));
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate CHỈ chạy khi: user muốn auto VÀ section đang trong viewport VÀ user không hover
  const shouldAutoRotate = isAutoPlaying && isInView && !isHovering;

  // Logic tự động chạy qua các mốc + thanh progress
  useEffect(() => {
    if (!shouldAutoRotate || filteredPeriods.length <= 1) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();
    const interval = 50;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / AUTO_ROTATE_INTERVAL) * 100, 100);
      setProgress(pct);

      if (elapsed >= AUTO_ROTATE_INTERVAL) {
        setCurrentIndex((prev) => (prev + 1) % filteredPeriods.length);
        setProgress(0);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [shouldAutoRotate, currentIndex, filteredPeriods.length]);

  // Cuộn thanh timeline NGANG khi mốc thay đổi — chỉ set scrollLeft, KHÔNG động đến cuộn dọc trang
  useEffect(() => {
    const bar = timelineBarRef.current;
    if (!bar) return;
    const activeBtn = bar.querySelector(
      `[data-timeline-idx="${currentIndex}"]`,
    ) as HTMLElement | null;
    if (!activeBtn) return;
    // Đưa nút active về giữa thanh cuộn ngang mà không cuộn trang dọc
    const targetLeft = activeBtn.offsetLeft - bar.clientWidth / 2 + activeBtn.clientWidth / 2;
    bar.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, [currentIndex]);

  // Click chọn mốc → tôn trọng người dùng: pause auto, KHÔNG tự resume
  const handleSelectIndex = (idx: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(idx);
    setProgress(0);
  };

  const handlePrev = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + filteredPeriods.length) % filteredPeriods.length);
    setProgress(0);
  }, [filteredPeriods.length]);

  const handleNext = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % filteredPeriods.length);
    setProgress(0);
  }, [filteredPeriods.length]);

  const getIndexLabel = (idx: number) => {
    return String(idx + 1).padStart(2, "0");
  };

  return (
    <section
      id="forecast-chronicle-section"
      ref={containerRef}
      className="relative w-full min-h-[680px] sm:min-h-[760px] lg:min-h-[820px] bg-black text-[#ede4ce] overflow-hidden select-none"
    >
      {/* ========================================================================= */}
      {/* 1. KHU VỰC TIÊU ĐỀ TRANG 13 CỘT MỐC: "DỰ BÁO TƯƠNG LAI" THEO ĐÚNG MẪU     */}
      {/* ========================================================================= */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 pt-8 sm:pt-12 text-center">
        {/* TIÊU ĐỀ CHÍNH THEO ĐÚNG PHONG CÁCH "PERILOUS EMINENCE" */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl perilous-eminence-title leading-[1.15] py-2 mx-auto">
          DỰ BÁO TƯƠNG LAI
        </h1>

        {/* Đồ họa 3D khoảng thở — Thiên Cầu Nghi dự báo */}
        <CelestialOrrery />

        {/* Lời dẫn tóm tắt ngay dưới thiên cầu dự báo */}
        <p className="text-xs sm:text-sm text-[#bcae8e] max-w-2xl mx-auto font-sans leading-relaxed mt-2">
          Tóm tắt các cột mốc trong báo cáo AI 2027 (AI-2027.com). Bạn có thể xem toàn bộ nội dung
          của báo cáo này bằng tiếng Anh tại{" "}
          <a
            href="https://ai-2027.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f3e5ab] underline hover:text-white transition-colors font-medium"
          >
            AI-2027.com
          </a>
          . Hãy so sánh các dự báo này với những gì đang xảy ra realtime để có kết luận cho riêng
          mình.
        </p>

        {/* Dải chỉ vàng thanh mảnh kèm kim cương trang trí chính giữa */}
        <div className="mt-3 mb-6 flex items-center justify-center gap-3">
          <span className="h-[1px] w-20 sm:w-32 bg-gradient-to-r from-transparent via-[#38b4d8]/60 to-[#d4af37]" />
          <span className="w-1.5 h-1.5 rotate-45 border border-[#82e3f5] bg-[#12110d] shadow-[0_0_8px_rgba(130,227,245,0.8)]" />
          <span className="h-[1px] w-20 sm:w-32 bg-gradient-to-l from-transparent via-[#38b4d8]/60 to-[#d4af37]" />
        </div>

        {/* Thanh điều khiển: Bộ lọc năm & Tự động chạy */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <div className="flex items-center bg-black/80 backdrop-blur-md p-1 rounded-full border border-[#524429] text-[10px] sm:text-xs font-serif shadow-lg">
            <button
              onClick={() => setSelectedYear("ALL")}
              className={`px-2.5 sm:px-3.5 py-1 rounded-full transition-all duration-300 whitespace-nowrap ${
                selectedYear === "ALL"
                  ? "bg-gradient-to-r from-[#d4af37] to-[#aa8016] text-[#12110d] font-bold shadow-xs"
                  : "text-[#c4b693] hover:text-white"
              }`}
            >
              Tất cả (13 Mốc)
            </button>
            <button
              onClick={() => setSelectedYear(2026)}
              className={`px-2.5 sm:px-3.5 py-1 rounded-full transition-all duration-300 whitespace-nowrap ${
                selectedYear === 2026
                  ? "bg-gradient-to-r from-[#d4af37] to-[#aa8016] text-[#12110d] font-bold shadow-xs"
                  : "text-[#c4b693] hover:text-white"
              }`}
            >
              2026 (3 Giai đoạn)
            </button>
            <button
              onClick={() => setSelectedYear(2027)}
              className={`px-2.5 sm:px-3.5 py-1 rounded-full transition-all duration-300 whitespace-nowrap ${
                selectedYear === 2027
                  ? "bg-gradient-to-r from-[#d4af37] to-[#aa8016] text-[#12110d] font-bold shadow-xs"
                  : "text-[#c4b693] hover:text-white"
              }`}
            >
              2027 (Từng tháng)
            </button>
          </div>

          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#524429] text-[#d4af37] hover:border-[#d4af37] hover:scale-105 transition-all text-xs font-mono shadow-lg"
            title={isAutoPlaying ? "Tạm dừng tự động chuyển mốc" : "Bật tự động chuyển mốc"}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">
                  {isHovering ? "Tạm dừng (đang đọc)" : "Tự động (7s)"}
                </span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span className="hidden sm:inline">Đã dừng — Bấm để chạy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. KHU VỰC NỘI DUNG CHÍNH (ĐÚNG THEO MẪU WHERE WINDS MEET):              */}
      {/*    - ẢNH HIỂN THỊ FULL TRÊN MỘT NỬA MÀN HÌNH (TRÁI HOẶC PHẢI), KHÔNG BỊ     */}
      {/*      PHÓNG TO CẮT XÉN, TAN MỜ NHƯ MỰC THỦY MẶC VÀO NỀN ĐEN.                 */}
      {/*    - CHỮ NẰM HOÀN TOÀN TRÊN PHẦN NỀN ĐEN CÒN LẠI, KHÔNG ĐÈ BỊ RỐI VÀO HÌNH. */}
      {/* ========================================================================= */}
      <div
        className="relative z-10 w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex items-center py-6 sm:py-10"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* LỚP HÌNH ẢNH FULL CHIỀU NGANG — trải toàn màn hình như một bức tranh liền khối.
            Phía tụ cảnh (nơi không có chữ) để ảnh rõ; phía chữ chỉ phủ lớp sương tối mỏng
            (mist) để tranh vẫn "thở" xuyên qua, không phải đen đặc. */}
        {filteredPeriods.map((period, idx) => {
          const isActive = idx === currentIndex;
          const isLeft = idx % 2 === 0;

          return (
            <div
              key={period.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* ẢNH FULL WIDTH — một chỉnh thể liền khối. Giữ độ sáng cao để tranh "thở". */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={period.image}
                  alt={period.titleEn}
                  className={`w-full h-full object-cover brightness-[0.95] contrast-[1.04] saturate-[1.05] transition-transform duration-[8000ms] ease-out ${
                    isActive ? "scale-105" : "scale-100"
                  } ${isLeft ? "object-center lg:object-left-center" : "object-center lg:object-right-center"}`}
                />
              </div>

              {/* LỚP SƯƠNG TỐI MỎNG (MIST) — chỉ tối vùng chữ để đọc rõ, phía ảnh gần như trong suốt.
                  to-black/85 đảm bảo chữ vẫn đọc được, via chỉ ~25% để tranh xuyên qua rõ. */}
              <div
                className={`absolute inset-0 pointer-events-none ${
                  isLeft
                    ? "bg-gradient-to-l from-black/85 via-black/30 to-transparent"
                    : "bg-gradient-to-r from-black/85 via-black/30 to-transparent"
                }`}
              />

              {/* Lớp sương mỏng ở mép trên/dưới để hòa với header & timeline, không tối toàn cảnh */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/55 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/65 to-transparent pointer-events-none" />

              {/* Mobile: phủ nhẹ vừa đủ đọc chữ, vẫn thấy ảnh */}
              <div className="lg:hidden absolute inset-0 bg-black/40 pointer-events-none" />
            </div>
          );
        })}

        {/* LỚP TEXT NỘI DUNG (NẰM Ở NỬA CÒN LẠI TRÊN NỀN ĐEN SẠCH SẼ) */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 w-full">
          <div
            className={`w-full lg:w-[48%] xl:w-[45%] transition-all duration-700 ease-out ${
              isArtOnLeft ? "lg:ml-auto text-left" : "lg:mr-auto text-left"
            }`}
          >
            {/* Mốc thời gian & nhãn nhỏ */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono tracking-[0.25em] text-[#d4af37] uppercase font-bold">
                {activePeriod.periodLabel}
              </span>
              <span className="h-px w-6 bg-[#8a7238]" />
              <span className="text-[11px] font-mono text-[#998763] uppercase tracking-wider">
                {activePeriod.badge}
              </span>
            </div>

            {/* TIÊU ĐỀ CHÍNH: TÁI HIỆN CHÍNH XÁC KIỂU CHỮ & CHẤT LIỆU VÀNG DÁT BẢN GỐC WHERE WINDS MEET */}
            {/* Font thanh thoát mảnh mai (weight 500), tracking rộng 0.16em, vân vàng lá chìm, viền chạm khắc */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] gold-foil-title leading-[1.28]">
              {activePeriod.titleEn}
            </h2>

            {/* DÒNG TIÊU ĐỀ TIẾNG VIỆT DỊCH NHỎ HƠN TRONG NGOẶC HOẶC DƯỚI (NHƯ MẪU) */}
            <div className="mt-2 text-xs sm:text-[13px] font-serif tracking-[0.08em] text-[#bda069] italic">
              ({activePeriod.titleVi})
            </div>

            {/* ĐƯỜNG KẺ CHỈ VÀNG MẢNH KÈM HỌA TIẾT KIM CƯƠNG CHÍNH GIỮA (NHƯ MẪU GỐC) */}
            <div className="my-5 flex items-center gap-3">
              <span className="h-[1px] w-28 bg-gradient-to-r from-transparent via-[#c59b27] to-[#d4af37]" />
              <span className="w-1.5 h-1.5 rotate-45 border border-[#d4af37] bg-[#12110d]" />
              <span className="h-[1px] w-12 bg-gradient-to-r from-[#d4af37] to-transparent" />
            </div>

            {/* NỘI DUNG TÓM TẮT: 2 ĐOẠN VĂN GỌN GÀNG, SẮC SẢO, DỄ ĐỌC TRÊN NỀN ĐEN */}
            <div className="space-y-3.5 text-xs sm:text-[13.5px] lg:text-[14px] text-[#e0d6be] font-sans leading-[1.8] font-light max-w-xl">
              <p className="border-l-2 border-[#d4af37]/60 pl-3.5 italic text-[#edd9a3]">
                &ldquo;{activePeriod.tagline}&rdquo;
              </p>
              <p className="text-[#d5caba]">{activePeriod.hookSummary}</p>
            </div>

            {/* CÁC ĐIỂM CHÍNH & CÁC NÚT HÀNH ĐỘNG */}
            <div className="mt-6 flex flex-wrap items-center gap-3.5 pt-1">
              {onWatchMovie && (
                <button
                  onClick={onWatchMovie}
                  className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] text-[#12110d] font-display font-black text-xs tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <Play className="w-3 h-3 fill-[#12110d]" />
                  <span>XEM PHIM</span>
                </button>
              )}

              {onScrollToTimeline && (
                <button
                  onClick={onScrollToTimeline}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-black/60 border border-[#524429] text-[#d4af37] hover:text-white hover:border-[#d4af37] hover:bg-black/90 transition-all text-xs font-mono tracking-wider backdrop-blur-md"
                >
                  <span>Xem sự kiện thật bên dưới</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* MŨI TÊN ĐIỀU HƯỚNG 2 BÊN (TRÁI & PHẢI) */}
        <button
          onClick={handlePrev}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-black/60 border border-[#524429] text-[#d4af37] hover:bg-black hover:border-[#d4af37] hover:scale-110 transition-all backdrop-blur-sm"
          aria-label="Mốc trước"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-black/60 border border-[#524429] text-[#d4af37] hover:bg-black hover:border-[#d4af37] hover:scale-110 transition-all backdrop-blur-sm"
          aria-label="Mốc kế tiếp"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 3. THANH TIMELINE DƯỚI CÙNG (ĐÚNG THEO MẪU WHERE WINDS MEET):              */}
      {/*    ĐƯỜNG KẺ NGANG ĐI QUA TỪNG MỐC: BIỂU TƯỢNG VĂN HOA + SỐ 01, 02, 03...   */}
      {/*    MỐC ĐANG CHỌN SÁNG RỰC VÀNG KIM, CÓ VÒNG TRÒN NỐI TRÊN ĐƯỜNG KẺ          */}
      {/* ========================================================================= */}
      <div className="relative z-30 pb-10 sm:pb-14 pt-2 bg-gradient-to-b from-transparent via-black/80 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* VÙNG CUỘN CÁC MỐC TIMELINE */}
          <div
            ref={timelineBarRef}
            className="relative flex items-center justify-between sm:justify-center gap-6 sm:gap-9 md:gap-11 overflow-x-auto no-scrollbar py-3"
          >
            {/* ĐƯỜNG KẺ KIM LOẠI NGANG NẰM CHÌM PHÍA SAU CÁC MỐC */}
            <div className="absolute left-6 right-6 top-[32px] h-[1px] bg-[#332b1e] pointer-events-none" />

            {/* ĐƯỜNG SỢI CHỈ VÀNG TIẾN TRÌNH THEO THỜI GIAN THẬT */}
            <div
              className="absolute left-6 top-[32px] h-[1px] bg-gradient-to-r from-[#d4af37] via-[#ffe082] to-[#d4af37] pointer-events-none transition-all duration-75"
              style={{
                width: `calc(${((currentIndex + progress / 100) / filteredPeriods.length) * 100}% - 48px)`,
              }}
            />

            {filteredPeriods.map((period, idx) => {
              const isActive = idx === currentIndex;

              return (
                <button
                  key={period.id}
                  data-timeline-idx={idx}
                  onClick={() => handleSelectIndex(idx)}
                  className="group relative flex flex-col items-center gap-1 focus:outline-none shrink-0"
                >
                  {/* BIỂU TƯỢNG VĂN HOA TRÊN SỐ (NHƯ MẪU: BÌNH NGỌC, CHIẾN MÃ, ẤN TÍN...) */}
                  <div
                    className={`transition-all duration-300 ${
                      isActive
                        ? "text-[#d4af37] scale-110 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                        : "text-[#544833] group-hover:text-[#8f7e5b]"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 sm:w-5 sm:h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    >
                      <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
                      <circle cx="12" cy="12" r="3.5" fill={isActive ? "currentColor" : "none"} />
                    </svg>
                  </div>

                  {/* SỐ MỐC: 01, 02, 03... THEO FONT CINZEL ĐÚNG MẪU GỐC */}
                  <span
                    className={`font-display text-sm sm:text-base tracking-[0.12em] transition-all duration-300 ${
                      isActive
                        ? "text-[#f3e5ab] font-black scale-110 drop-shadow-[0_0_10px_rgba(212,175,55,0.9)]"
                        : "text-[#695a40] group-hover:text-[#b8a679]"
                    }`}
                  >
                    {getIndexLabel(idx)}
                  </span>

                  {/* VÒNG TRÒN TIẾP ĐIỂM TRÊN ĐƯỜNG KẺ NGANG */}
                  <div className="relative mt-0.5 flex items-center justify-center">
                    <span
                      className={`w-2 h-2 rounded-full border transition-all duration-300 ${
                        isActive
                          ? "bg-[#d4af37] border-[#ffe082] shadow-[0_0_10px_rgba(212,175,55,1)] scale-125"
                          : "bg-black border-[#423724] group-hover:border-[#8f7d58]"
                      }`}
                    />
                    {isActive && (
                      <span className="absolute -inset-1 rounded-full border border-[#d4af37]/60 animate-ping" />
                    )}
                  </div>

                  {/* TÊN NGẮN GIAI ĐOẠN / THÁNG PHÍA DƯỚI */}
                  <span
                    className={`text-[9.5px] font-mono whitespace-nowrap tracking-wider transition-colors max-w-[80px] truncate text-center ${
                      isActive
                        ? "text-[#d4af37] font-semibold"
                        : "text-[#4d422f] group-hover:text-[#7d6c4c]"
                    }`}
                  >
                    {period.periodLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
