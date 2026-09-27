import { useEffect, useRef, useState, useCallback } from "react";
import Player from "@vimeo/player";
import {
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  ChevronDown,
  Sparkles,
  Globe,
  Music2,
  Share2,
  Check,
} from "lucide-react";

interface CinemaHeroProps {
  onScrollToTimeline: () => void;
}

export function CinemaHero({ onScrollToTimeline }: CinemaHeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<Player | null>(null);

  // States
  const [isPlayingFull, setIsPlayingFull] = useState(false);
  const [showYouTube, setShowYouTube] = useState(false); // Khi true -> render YouTube có tiếng đè lên Vimeo nền
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(371);
  const [isReady, setIsReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ID video YouTube dùng cho chế độ xem đầy đủ (mute=0, có tiếng)
  const YOUTUBE_VIDEO_ID = "ukA74x0vmKY";

  // Khởi tạo Vimeo Player
  useEffect(() => {
    if (!containerRef.current) return;

    // Tạo iframe vimeo nhúng tùy biến không chrome
    const iframe = document.createElement("iframe");
    // d70986c3f7 là hash unlisted của video
    iframe.src =
      "https://player.vimeo.com/video/1230176042?h=d70986c3f7&autoplay=1&muted=1&loop=0&controls=0&title=0&byline=0&portrait=0&playsinline=1&dnt=1&background=1";
    iframe.allow = "autoplay; fullscreen; picture-in-picture; encrypted-media";
    iframe.className =
      "w-full h-full pointer-events-none scale-[1.35] sm:scale-[1.2] md:scale-[1.12] origin-center object-cover border-0 transition-opacity duration-700";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";

    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(iframe);

    const player = new Player(iframe);
    playerRef.current = player;

    player.ready().then(() => {
      setIsReady(true);
      player
        .getDuration()
        .then((d) => setDuration(d))
        .catch(() => {});
      player.setVolume(0).catch(() => {});
      player.play().catch(() => {});
    });

    // Lắng nghe cập nhật thời gian
    const handleTimeUpdate = (data: { seconds: number; percent: number; duration: number }) => {
      setCurrentTime(data.seconds);

      // Nếu đang ở chế độ loop 30 giây đầu (chưa bấm xem phim đầy đủ)
      // Khi vượt quá 30 giây -> quay lại giây 0
      if (!isPlayingFull) {
        if (data.seconds >= 30) {
          player.setCurrentTime(0).catch(() => {});
        }
      }
    };

    const handleEnded = () => {
      if (isPlayingFull) {
        // Hết phim thì dừng hoặc tua lại
        player.setCurrentTime(0).catch(() => {});
        player.pause().catch(() => {});
        setIsPlayingFull(false);
        player.setVolume(0).catch(() => {});
        setIsMuted(true);
      } else {
        player.setCurrentTime(0).catch(() => {});
        player.play().catch(() => {});
      }
    };

    player.on("timeupdate", handleTimeUpdate);
    player.on("ended", handleEnded);

    return () => {
      player.off("timeupdate", handleTimeUpdate);
      player.off("ended", handleEnded);
      try {
        player.destroy();
      } catch {
        // ignore
      }
    };
  }, []);

  // Khi isPlayingFull bật -> dừng Vimeo nền, hiện YouTube có tiếng
  useEffect(() => {
    const player = playerRef.current;
    if (isPlayingFull) {
      // Tạm dừng Vimeo nền để không tiêu tốn tài nguyên + tránh chồng tiếng
      player?.pause?.().catch(() => {});
      setShowYouTube(true);
    } else {
      setShowYouTube(false);
      // Khôi phục Vimeo nền phát lại mute
      const player2 = playerRef.current;
      if (player2) {
        player2.setCurrentTime(0).catch(() => {});
        player2.setVolume(0).catch(() => {});
        player2.play().catch(() => {});
      }
      setIsMuted(true);
    }
  }, [isPlayingFull]);

  // Bật / tắt tiếng thủ công
  const toggleMute = () => {
    const player = playerRef.current;
    if (!player) return;

    if (isMuted) {
      player
        .setVolume(1)
        .then(() => setIsMuted(false))
        .catch(() => {});
    } else {
      player
        .setVolume(0)
        .then(() => setIsMuted(true))
        .catch(() => {});
    }
  };

  // Nút Play to chính giữa: Chuyển sang chế độ xem phim đầy đủ từ đầu
  const handlePlayFullMovie = () => {
    setIsPlayingFull(true);
  };

  // Quay lại chế độ preview lặp 30s
  const handleBackToPreview = () => {
    const player = playerRef.current;
    if (player) {
      player.setVolume(0).catch(() => {});
      player.setCurrentTime(0).catch(() => {});
      player.play().catch(() => {});
    }
    setIsMuted(true);
    setIsPlayingFull(false);
  };

  // Tua lại từ đầu (chỉ áp dụng khi xem YouTube - tải lại iframe)
  const handleRestart = () => {
    setShowYouTube(false);
    setTimeout(() => setShowYouTube(true), 50);
  };

  // Phóng to toàn màn hình
  const handleFullScreen = () => {
    const heroEl = document.getElementById("cinema-hero-root");
    if (!heroEl) return;
    if (!document.fullscreenElement) {
      heroEl.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  // Chia sẻ
  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Tự động ẩn controls khi đang xem phim và không di chuyển chuột
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlayingFull) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3500);
    }
  };

  // Format giây thành mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <section
      id="cinema-hero-root"
      onMouseMove={handleMouseMove}
      className="relative w-full h-[100svh] min-h-[600px] max-h-[1080px] bg-black overflow-hidden flex flex-col justify-between select-none"
    >
      {/* 1. LỚP VIDEO NỀN (Chiếm 100% màn hình) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {/* Vimeo nền: mute, autoplay, KHÔNG thanh điều khiển.
            Khi YouTube đang mở -> ẩn hẳn (opacity-0 + pointer-events-none) để chấm dứt xung đột touch/gesture trên mobile,
            giúp thanh điều khiển YouTube (fullscreen, xoay ngang) nhận trọn vẹn mọi thao tác. */}
        <div
          ref={containerRef}
          className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 ${
            showYouTube ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* LỚP YOUTUBE XEM ĐẦY ĐỦ (đè lên Vimeo nền, có tiếng thật, autoplay unmute sau user click) */}
        {showYouTube && (
          <iframe
            key="yt-fullmovie"
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
            title="AI 2027 - Toàn bộ phim"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope"
            className="absolute inset-0 w-full h-full border-0"
            style={{ pointerEvents: "auto" }}
          />
        )}

        {/* Lớp overlay vignette điện ảnh phương Đông & làm mờ viền - ẩn khi xem YouTube để khỏi che */}
        {!showYouTube && (
          <>
            <div className="pointer-events-none absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-black/20 to-black/80" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/85 via-black/40 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </>
        )}
      </div>

      {/* 2. THANH TIÊU ĐỀ TRÊN CÙNG */}
      {/* Khi đang xem YouTube: chỉ hiện 1 nút "Đóng / Quay lại" nhỏ gọn ở góc, KHÔNG hiện các nút điều khiển âm thanh giả lập đè lên YouTube */}
      <header
        className={`relative z-20 flex items-center justify-between gap-2 px-4 sm:px-10 lg:px-14 pt-4 sm:pt-6 transition-opacity duration-500 ${
          showControls ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Góc trái: Logo / Biểu tượng tinh tế */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-gold/30 shrink-0">
            <span className="w-2 h-2 rounded-full bg-jade animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-gold uppercase">
              AI 2027
            </span>
          </div>
          {isPlayingFull && (
            <button
              onClick={handleBackToPreview}
              className="px-3 py-1.5 rounded-full bg-black/70 hover:bg-gold/20 backdrop-blur-md border border-white/20 hover:border-gold text-[11px] font-mono text-gold transition-colors flex items-center gap-1.5 cursor-pointer shadow-lg"
              title="Quay lại giao diện chính"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Thu nhỏ / Quay lại</span>
            </button>
          )}
        </div>

        {/* Góc phải: Chỉ hiện khi ở chế độ video nền preview (chưa mở YouTube) để không xung đột với thanh điều khiển của YouTube */}
        {!isPlayingFull && (
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Nút bật/tắt tiếng Vimeo nền */}
            <button
              onClick={toggleMute}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-medium border transition-all cursor-pointer ${
                !isMuted
                  ? "bg-gold/20 border-gold text-gold shadow-[0_0_15px_rgba(234,179,8,0.3)]"
                  : "bg-black/50 border-white/20 text-white/80 hover:text-white hover:border-gold/50"
              }`}
              title={isMuted ? "Bật âm thanh nền" : "Tắt âm thanh"}
            >
              {!isMuted ? (
                <Volume2 className="w-4 h-4 text-gold" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
              <span className="hidden sm:inline font-mono text-[11px]">
                {!isMuted ? "Âm thanh: BẬT" : "Bật tiếng"}
              </span>
            </button>

            {/* Nút chia sẻ */}
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white/80 hover:text-gold hover:border-gold/50 transition-colors cursor-pointer"
              title="Chia sẻ liên kết"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>

            {/* Nút phóng to toàn màn hình */}
            <button
              onClick={handleFullScreen}
              className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white/80 hover:text-gold hover:border-gold/50 transition-colors cursor-pointer"
              title="Toàn màn hình"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>

      {/* 3. KHU VỰC TRUNG TÂM — NÚT PLAY SỬ THI PHONG CÁCH "WHERE WINDS MEET" */}
      {/* Khi xem YouTube: KHÔNG render overlay ở đây để không che thanh điều khiển gốc của YouTube (nút fullscreen / xoay ngang mobile) */}
      {!isPlayingFull && (
        <div className="relative z-20 flex-1 flex flex-col items-center justify-center pointer-events-none px-4">
          <div className="flex flex-col items-center gap-6 pointer-events-auto animate-in fade-in zoom-in-95 duration-500">
            {/* Nút Play trung tâm — Thiết kế "Vàng ròng cổ bản" giống nút Play for Free của Where Winds Meet */}
            <button
              onClick={handlePlayFullMovie}
              className="group relative flex items-center justify-center focus:outline-none cursor-pointer"
              aria-label="Xem toàn bộ phim từ đầu"
            >
              {/* Vòng hào quang phát sáng xoay tròn phía sau */}
              <div className="absolute -inset-6 rounded-full bg-radial-[circle] from-gold/30 via-jade/20 to-transparent blur-xl group-hover:scale-125 transition-transform duration-700 opacity-75" />

              {/* Vòng chỉ vàng kép cổ điển */}
              <div className="absolute -inset-3 rounded-full border border-gold/40 scale-95 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute -inset-1.5 rounded-full border border-dashed border-gold/60 animate-[spin_30s_linear_infinite]" />

              {/* Nút phong ấn dạng thỏi vàng sa thạch Where Winds Meet */}
              <div className="relative flex items-center gap-2.5 sm:gap-3.5 px-6 sm:px-11 py-3 sm:py-4.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] text-[#12110d] font-display font-black text-xs sm:text-base tracking-[0.18em] sm:tracking-[0.22em] uppercase shadow-[0_0_35px_rgba(212,175,55,0.65),inset_0_1px_2px_rgba(255,255,255,0.8)] border border-[#ffe082] group-hover:shadow-[0_0_55px_rgba(212,175,55,0.95)] group-hover:scale-105 active:scale-95 transition-all duration-300">
                <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#1c1917] text-gold border border-gold/60 shadow-inner">
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 fill-gold ml-0.5" />
                </span>
                <span className="drop-shadow-xs">XEM PHIM</span>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* 4. PHẦN ĐIỀU HƯỚNG DƯỚI CÙNG — Chỉ hiện khi đang ở chế độ xem trước (Vimeo nền) */}
      {/* Khi mở YouTube: ẩn toàn bộ footer để YouTube nhận trọn vẹn 100% không gian và thanh điều khiển của nó */}
      {!isPlayingFull && (
        <footer
          className={`relative z-20 flex flex-col items-center justify-center pb-5 sm:pb-8 px-4 transition-opacity duration-500 ${
            showControls ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Nút cuộn xuống dòng thời gian tin tức thật */}
          <button
            onClick={onScrollToTimeline}
            className="group flex flex-col items-center gap-1.5 text-white/75 hover:text-gold transition-colors duration-300 focus:outline-none cursor-pointer"
          >
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-gold/90 group-hover:text-gold transition-colors">
              Khám phá sự kiện thật
            </span>
            <div className="flex items-center justify-center w-7 h-7 rounded-full border border-gold/30 bg-black/40 backdrop-blur-sm group-hover:border-gold group-hover:scale-110 group-hover:bg-gold/10 transition-all">
              <ChevronDown className="w-4 h-4 text-gold animate-bounce" />
            </div>
          </button>
        </footer>
      )}
    </section>
  );
}
