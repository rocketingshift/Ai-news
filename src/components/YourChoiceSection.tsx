import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Check } from "lucide-react";
import { ChronoAstrolabe } from "./ChronoAstrolabe";

/**
 * "LỰA CHỌN CỦA BẠN" — phiên bản điện ảnh (cinematic).
 *
 * A. Đồng hồ cát vàng đếm ngược (signature moment)
 * B. Nền tranh thủy mặc parallax theo scroll
 * C. Scroll-reveal manifesto — lời kêu gọi hiện từng dòng, câu cuối phóng to
 * D. 3 trụ cột thành phiến đá khắc rune — hover phát quang ngọc jade
 */

const INK_WASH_BG =
  "https://vibe.filesafe.space/1790240714414154753/assets/b1784bd3-c486-4925-88ad-6d543018a878.png";

// 3 icon 3D (CSS) — mỗi trụ cột một biểu tượng riêng:
//   - Mắt mở tỉnh thức (Tỉnh Thức): mắt mở, đồng tử phát quang ngọc
//   - Khiên责 nhiệm (Trách Nhiệm): khiên kim loại với chốt trung tâm
//   - Đài sen thấu cảm (Thấu Cảm): đài sen nở rải radiance vàng
const ICONS = {
  eye: (
    <svg viewBox="0 0 96 80" className="w-full h-full" fill="none">
      {/* Hình dáng mắt */}
      <path
        d="M4 40 Q48 4 92 40 Q48 76 4 40 Z"
        fill="url(#eyeLidG)"
        stroke="url(#gold3dg)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <ellipse
        cx="48"
        cy="40"
        rx="22"
        ry="18"
        fill="url(#iris3dg)"
        stroke="url(#gold3dg)"
        strokeWidth="1.5"
      />
      <circle cx="48" cy="40" r="9" fill="#07070b" />
      <circle cx="48" cy="40" r="9" fill="url(#pupilGlow)" />
      <circle cx="45" cy="36" r="2.5" fill="#f3e5ab" opacity="0.9" />
      <defs>
        <linearGradient id="eyeLidG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#12110d" />
          <stop offset="100%" stopColor="#07070b" />
        </linearGradient>
        <radialGradient id="iris3dg" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="#82e3f5" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#38b4d8" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0a1418" stopOpacity="0.6" />
        </radialGradient>
        <radialGradient id="pupilGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#aef4ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#38b4d8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="gold3dg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3e5ab" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#9a7519" />
        </linearGradient>
      </defs>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 80 96" className="w-full h-full" fill="none">
      <path
        d="M40 4 L74 16 V46 Q74 72 40 90 Q6 72 6 46 V16 Z"
        fill="url(#shieldFace)"
        stroke="url(#shieldGold3dg)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Chốt trung tâm */}
      <path
        d="M40 24 L56 32 V46 Q56 62 40 72 Q24 62 24 46 V32 Z"
        fill="url(#shieldInset)"
        stroke="url(#shieldGold3dg)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="40" cy="48" r="6" fill="url(#shieldCore3dg)" />
      <circle cx="40" cy="48" r="2" fill="#f3e5ab" opacity="0.9" />
      <defs>
        <linearGradient id="shieldFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1610" />
          <stop offset="100%" stopColor="#080705" />
        </linearGradient>
        <linearGradient id="shieldInset" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#12100a" />
          <stop offset="100%" stopColor="#070705" />
        </linearGradient>
        <radialGradient id="shieldCore3dg" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#aef4ff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#38b4d8" stopOpacity="0.1" />
        </radialGradient>
        <linearGradient id="shieldGold3dg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3e5ab" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#9a7519" />
        </linearGradient>
      </defs>
    </svg>
  ),
  lotus: (
    <svg viewBox="0 0 96 80" className="w-full h-full" fill="none">
      {/* Cánh sen ngoài */}
      <path
        d="M48 60 Q20 44 18 22 Q38 32 48 60 Z"
        fill="url(#petal3dg)"
        stroke="url(#lotusGold3dg)"
        strokeWidth="1.2"
      />
      <path
        d="M48 60 Q76 44 78 22 Q58 32 48 60 Z"
        fill="url(#petal3dg2)"
        stroke="url(#lotusGold3dg)"
        strokeWidth="1.2"
      />
      {/* Cánh sen giữa */}
      <path
        d="M48 64 Q28 52 30 30 Q40 40 48 64 Z"
        fill="url(#petal3dg)"
        stroke="url(#lotusGold3dg)"
        strokeWidth="1.2"
      />
      <path
        d="M48 64 Q68 52 66 30 Q56 40 48 64 Z"
        fill="url(#petal3dg2)"
        stroke="url(#lotusGold3dg)"
        strokeWidth="1.2"
      />
      {/* Cánh sen giữa đỉnh */}
      <path
        d="M48 70 Q38 56 40 36 Q48 46 48 70 Z"
        fill="url(#petalMid3dg)"
        stroke="url(#lotusGold3dg)"
        strokeWidth="1.2"
      />
      <path
        d="M48 70 Q58 56 56 36 Q48 46 48 70 Z"
        fill="url(#petalMid3dg)"
        stroke="url(#lotusGold3dg)"
        strokeWidth="1.2"
      />
      {/* Cánh giữa tâm */}
      <path
        d="M48 72 Q42 60 44 42 Q48 50 48 72 Z"
        fill="url(#petalCore3dg)"
        stroke="url(#lotusGold3dg)"
        strokeWidth="1.2"
      />
      <path
        d="M48 72 Q54 60 52 42 Q48 50 48 72 Z"
        fill="url(#petalCore3dg)"
        stroke="url(#lotusGold3dg)"
        strokeWidth="1.2"
      />
      {/* Lõi phát quang */}
      <ellipse cx="48" cy="48" rx="6" ry="10" fill="url(#lotusCoreG3dg)" />
      <circle cx="48" cy="48" r="2.5" fill="#f3e5ab" opacity="0.9" />
      <defs>
        <linearGradient id="petal3dg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0e2018" />
          <stop offset="100%" stopColor="#07070b" />
        </linearGradient>
        <linearGradient id="petal3dg2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0e2018" />
          <stop offset="100%" stopColor="#07070b" />
        </linearGradient>
        <linearGradient id="petalMid3dg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#123026" />
          <stop offset="100%" stopColor="#07070b" />
        </linearGradient>
        <linearGradient id="petalCore3dg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a4036" />
          <stop offset="100%" stopColor="#07070b" />
        </linearGradient>
        <radialGradient id="lotusCoreG3dg" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#aef4ff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#38b4d8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lotusGold3dg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3e5ab" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#9a7519" />
        </linearGradient>
      </defs>
    </svg>
  ),
};

const PILLARS = [
  {
    icon3d: ICONS.eye,
    title: "Tỉnh Thức",
    desc: "Nhìn thẳng vào sự thật — không trốn tránh, không tự lừa dối. Hiểu rõ AI đang thay đổi cuộc sống mình từng ngày.",
  },
  {
    icon3d: ICONS.shield,
    title: "Trách Nhiệm",
    desc: "Mỗi lựa chọn hôm nay là một viên gạch xây tương lai. Dùng AI có ý thức, có giới hạn, có mục đích tốt đẹp.",
  },
  {
    icon3d: ICONS.lotus,
    title: "Thấu Cảm",
    desc: "Giữ gìn những gì làm nên con người: chân thành, kiên nhẫn, lòng trắc ẩn. Để AI phục vụ người, không thay thế người.",
  },
];

const MANIFESTO = [
  { text: "Những gì từng chỉ tồn tại trong phim viễn tưởng", em: false },
  { text: "đang lần lượt bước ra đời thực —", em: false },
  { text: "từng tháng, từng sự kiện, ngay trước mắt bạn.", em: false },
  {
    text: "AI có thể sớm vượt xa mọi giới_limit mà chúng ta tưởng mình biết.",
    em: false,
    bold: true,
  },
  { text: "Những gì đã diễn ra không thể đảo ngược.", em: true },
  {
    text: "Cách bạn nhận thức và sử dụng AI hôm nay sẽ quyết định tương lai — của chính mình, và của những người bạn yêu thương.",
    em: false,
  },
  { text: "Không ai có thể đứng ngoài dòng chảy này.", em: false },
];

export function YourChoiceSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();

  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax nền thủy mặc
  const bgY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.0, 1.05]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 0.5, 0.5, 0]);

  // Đồng hồ cát — hạt cát rơi liên tục
  const [sandCount, setSandCount] = useState(0);
  useEffect(() => {
    if (prefersReduced) return;
    const id = setInterval(() => setSandCount((c) => (c + 1) % 60), 90);
    return () => clearInterval(id);
  }, [prefersReduced]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim()) {
      setError("Vui lòng nhập tên của bạn.");
      return;
    }
    if (!email.trim()) {
      setError("Vui lòng nhập email của bạn.");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailOk) {
      setError("Email không hợp lệ — hãy kiểm tra lại.");
      return;
    }
    if (!phone.trim()) {
      setError("Vui lòng nhập số điện thoại của bạn.");
      return;
    }
    const phoneOk = /^[0-9+\s\-()]{7,15}$/.test(phone.trim());
    if (!phoneOk) {
      setError("Số điện thoại không hợp lệ — hãy kiểm tra lại.");
      return;
    }
    // TODO: wire form_tracking integration khi có ID.
    setSubmitted(true);
  };

  const reveal = {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  return (
    <section
      id="your-choice-section"
      ref={sectionRef}
      className="relative w-full bg-[#07070b] text-[#ede4ce] pt-6 sm:pt-12 pb-20 sm:pb-28 overflow-hidden select-none -mt-px"
    >
      {/* Sương mây hòa trộn từ phần Truy Vết Sự Thật phía trên sang liền mạch */}
      <div className="absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-[#07070b] via-[#07070b]/90 to-transparent pointer-events-none z-10" />

      {/* === B. NỀN TRANH THỦY MẶC PARALLAX === */}
      <motion.div
        aria-hidden
        style={{
          y: prefersReduced ? 0 : bgY,
          scale: prefersReduced ? 1 : bgScale,
          opacity: bgOpacity,
        }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <img src={INK_WASH_BG} alt="" className="w-full h-full object-cover" loading="lazy" />
      </motion.div>
      {/* Vầng sáng ngọc + vàng lơ lửng */}
      <div className="absolute inset-0 pointer-events-none opacity-25 z-[1]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[640px] h-[640px] bg-[#38b4d8]/12 rounded-full blur-[170px]" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#d4af37]/12 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#82e3f5]/8 rounded-full blur-[120px]" />
      </div>
      {/* Sương mù mực loang chuyển tiếp từ phần trên */}
      <div className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-black via-black/85 to-transparent pointer-events-none z-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === TIÊU ĐỀ: "LỰA CHỌN CỦA BẠN" === */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.96, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl perilous-eminence-title leading-[1.15] py-2 mx-auto"
          >
            LỰA CHỌN CỦA BẠN
          </motion.h2>

          <div className="mt-3 mb-6 flex items-center justify-center gap-3">
            <span className="h-[1px] w-20 sm:w-32 bg-gradient-to-r from-transparent via-[#38b4d8]/60 to-[#d4af37]" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#82e3f5] bg-[#12110d] shadow-[0_0_8px_rgba(130,227,245,0.8)]" />
            <span className="h-[1px] w-20 sm:w-32 bg-gradient-to-l from-transparent via-[#38b4d8]/60 to-[#d4af37]" />
          </div>
        </div>

        {/* === A. CỖ MÁY THIÊN VĂN 3D — "CHRONO ASTROLABE" (SIGNATURE MOMENT) === */}
        <ChronoAstrolabe prefersReduced={prefersReduced} />

        {/* === C. SCROLL-REVEAL MANIFESTO === */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-18">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg sm:text-xl font-serif italic text-[#e6d9b0] leading-relaxed"
          >
            &ldquo;Cỗ máy thời gian đã được kích hoạt.&rdquo;
          </motion.p>

          {MANIFESTO.map((line, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className={`font-sans font-light leading-[1.9] ${
                line.em
                  ? "text-sm sm:text-base text-[#f3e5ab] font-medium"
                  : line.bold
                    ? "text-sm sm:text-base text-[#d8ccb0]"
                    : "text-sm sm:text-base text-[#c8bca0]"
              }`}
            >
              {line.text.split("giới_limit")[0]}
              {line.bold && <span className="text-[#f3e5ab] font-medium">giới hạn</span>}
            </motion.p>
          ))}

          {/* Câu cao trào — tăng khoảng cách trên dưới + đổi font hiển thị tiếng Việt hoàn hảo */}
          <div className="py-6 sm:py-8 my-4 space-y-4 sm:space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
              className="text-base sm:text-xl md:text-2xl font-serif text-[#e6d9b0] font-normal leading-relaxed"
            >
              Bạn không thể trốn tránh sự thật.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="py-3 sm:py-4 px-2"
            >
              <h3 className="gold-foil-title text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.4] sm:leading-[1.45] tracking-[0.1em] sm:tracking-[0.14em]">
                <span className="block pt-[0.15em] pb-[0.2em]">NHƯNG BẠN CÓ THỂ</span>
                <span className="block pt-[0.15em] pb-[0.25em] mt-1 sm:mt-2">
                  DŨNG CẢM ĐỐI DIỆN.
                </span>
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs sm:text-sm md:text-base text-[#bcae8e] font-sans font-light leading-relaxed max-w-xl mx-auto pt-1"
            >
              Sống tỉnh thức. Sống có trách nhiệm. Lan tỏa những giá trị tốt đẹp nhất của con người.
            </motion.p>
          </div>
        </div>

        {/* === D. 3 TRỤ CỘT — ICON 3D PHÁT QUANG NGỌC === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mb-12 sm:mb-20">
          {PILLARS.map((p, idx) => {
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative [perspective:1000px]"
              >
                <div className="relative rounded-2xl border border-[#3a3022] bg-gradient-to-b from-[#161310]/90 via-[#100d09]/90 to-[#080705]/90 p-5 sm:p-7 text-center transition-all duration-500 group-hover:border-[#82e3f5]/40 group-hover:shadow-[0_0_40px_rgba(130,227,245,0.18)] group-hover:[transform:rotateY(6deg)_translateZ(20px)]">
                  {/* Chốt góc filigree */}
                  <span className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-[#6b5835] group-hover:border-[#82e3f5] transition-colors" />
                  <span className="absolute top-2.5 right-2.5 w-2 h-2 border-t border-r border-[#6b5835] group-hover:border-[#82e3f5] transition-colors" />
                  <span className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b border-l border-[#6b5835] group-hover:border-[#82e3f5] transition-colors" />
                  <span className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-[#6b5835] group-hover:border-[#82e3f5] transition-colors" />

                  {/* Icon 3D — phát quang ngọc khi hover */}
                  <div className="relative mx-auto mb-5 w-20 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-full bg-[#38b4d8]/10 blur-xl group-hover:bg-[#38b4d8]/30 transition-all duration-500" />
                    <div className="relative w-full h-full group-hover:drop-shadow-[0_0_14px_rgba(130,227,245,0.7)] transition-all duration-500">
                      {p.icon3d}
                    </div>
                  </div>

                  <h3 className="font-display font-bold tracking-[0.16em] uppercase text-sm sm:text-base text-[#f3e5ab] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#bcae8e] font-sans leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* === KHỐI CTA: FORM GIA NHẬP CỘNG ĐỒNG (THIẾT KẾ ĐIỆN ẢNH VÀNG KIM SINH ĐỘNG) === */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-2xl mx-auto px-1 sm:px-0"
        >
          {/* Vầng hào quang đa tầng: Ngọc Jade + Vàng Kim chuyển động */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#38b4d8]/25 via-[#d4af37]/35 to-[#82e3f5]/25 blur-2xl opacity-70 animate-pulse pointer-events-none" />
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-[#d4af37]/30 via-transparent to-[#38b4d8]/20 blur-lg pointer-events-none" />

          {/* Hộp thẻ cổ điển với hoa văn góc và viền dát kim loại */}
          <div className="relative rounded-3xl border border-[#c59b27]/60 bg-gradient-to-b from-[#1c1710] via-[#120f0a] to-[#080705] p-5 sm:p-11 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,235,170,0.15)] overflow-hidden">
            {/* Họa tiết tia sáng quét tinh tế góc trên */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-b from-[#f3e5ab]/15 via-[#d4af37]/5 to-transparent blur-2xl pointer-events-none" />

            {/* 4 Chốt góc Filigree dập nổi */}
            <span className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-[#f3e5ab] shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
            <span className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-[#f3e5ab] shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
            <span className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-[#f3e5ab] shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
            <span className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-[#f3e5ab] shadow-[0_0_8px_rgba(212,175,55,0.8)]" />

            {!submitted ? (
              <div className="text-center space-y-6 relative z-10">
                {/* Badge huy hiệu */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#d4af37]/15 via-[#f3e5ab]/20 to-[#d4af37]/15 border border-[#d4af37]/50 shadow-[0_0_15px_rgba(212,175,55,0.25)]">
                  <Users className="w-3.5 h-3.5 text-[#f3e5ab]" />
                  <span className="text-[11px] font-sans font-bold tracking-[0.22em] uppercase text-[#f3e5ab]">
                    GIA NHẬP CỘNG ĐỒNG
                  </span>
                </div>

                {/* Tiêu đề chính dùng font Playfair Display / Be Vietnam Pro chuẩn tiếng Việt 100% */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-3xl md:text-[34px] font-serif font-bold tracking-[0.03em] leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#f7e7b4] to-[#d4af37] drop-shadow-[0_2px_12px_rgba(212,175,55,0.35)]">
                    LÀM CHỦ TƯƠNG LAI CỦA BẠN
                  </h3>
                  <div className="flex items-center justify-center gap-2 pt-1">
                    <span className="h-px w-6 sm:w-10 bg-gradient-to-r from-transparent to-[#d4af37]" />
                    <span className="text-sm sm:text-base font-serif font-semibold tracking-[0.16em] uppercase text-[#e8d59c]">
                      NGAY TỪ HÔM NAY
                    </span>
                    <span className="h-px w-6 sm:w-10 bg-gradient-to-l from-transparent to-[#d4af37]" />
                  </div>
                </div>

                {/* Mô tả súc tích, dễ đọc */}
                <p className="text-xs sm:text-sm text-[#c8bca0] font-sans font-normal leading-relaxed max-w-lg mx-auto">
                  Tham gia cộng đồng những người sử dụng AI một cách tỉnh thức. Nhận các ghi chép sự
                  kiện mới nhất, phân tích sâu và cùng nhau giữ gìn những giá trị tốt đẹp của con
                  người trong kỷ nguyên AI.
                </p>

                {/* Form nhập thông tin và CTA phát quang */}
                <form onSubmit={handleSubmit} className="space-y-3.5 max-w-md mx-auto pt-2">
                  <div className="relative group">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Họ và tên của bạn..."
                      className="w-full px-5 py-3.5 text-sm font-sans bg-black/75 border border-[#6b5835] group-hover:border-[#d4af37]/70 rounded-full text-[#ede4ce] placeholder:text-[#7d6f52] focus:outline-none focus:border-[#f3e5ab] focus:ring-2 focus:ring-[#d4af37]/40 shadow-inner transition-all"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email của bạn..."
                      className="w-full px-5 py-3.5 text-sm font-sans bg-black/75 border border-[#6b5835] group-hover:border-[#d4af37]/70 rounded-full text-[#ede4ce] placeholder:text-[#7d6f52] focus:outline-none focus:border-[#f3e5ab] focus:ring-2 focus:ring-[#d4af37]/40 shadow-inner transition-all"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Số điện thoại của bạn..."
                      className="w-full px-5 py-3.5 text-sm font-sans bg-black/75 border border-[#6b5835] group-hover:border-[#d4af37]/70 rounded-full text-[#ede4ce] placeholder:text-[#7d6f52] focus:outline-none focus:border-[#f3e5ab] focus:ring-2 focus:ring-[#d4af37]/40 shadow-inner transition-all"
                    />
                  </div>

                  {error && <p className="text-xs text-rose-300 font-sans">{error}</p>}

                  {/* Nút bấm vàng kim phát quang rực rỡ với hiệu ứng tia sáng */}
                  <button
                    type="submit"
                    className="group relative w-full inline-flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#e5b83b] via-[#faebae] to-[#c59b27] text-[#12110d] font-sans font-extrabold text-[11px] sm:text-sm tracking-[0.14em] sm:tracking-[0.18em] uppercase shadow-[0_0_30px_rgba(212,175,55,0.65),inset_0_1px_2px_rgba(255,255,255,0.8)] hover:shadow-[0_0_45px_rgba(212,175,55,0.95)] hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 fill-[#12110d] animate-pulse" />
                    <span>THAM GIA CỘNG ĐỒNG NGAY</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>

                  <p className="text-[11px] text-[#7d6f52] font-sans pt-1">
                    Cam kết bảo mật • Không spam • Hủy bất cứ lúc nào
                  </p>
                </form>
              </div>
            ) : (
              <div className="text-center space-y-4 py-6 relative z-10">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-[#38b4d8]/15 border border-[#82e3f5]/50 shadow-[0_0_20px_rgba(130,227,245,0.4)]">
                  <Check className="w-8 h-8 text-[#82e3f5]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#f3e5ab]">
                  Chào Mừng Bạn Gia Nhập Cộng Đồng
                </h3>
                <p className="text-sm text-[#bcae8e] font-sans leading-relaxed max-w-md mx-auto">
                  Cảm ơn bạn đã chọn sống tỉnh thức. Chúng tôi sẽ gửi cho bạn những ghi chép mới
                  nhất về hành trình AI 2026–2027. Hãy cùng lan tỏa sự chân thành, kiên nhẫn và thấu
                  cảm.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setPhone("");
                  }}
                  className="text-xs font-sans text-[#d4af37] hover:text-[#f3e5ab] transition-colors underline underline-offset-4 cursor-pointer"
                >
                  Đăng ký thêm một người khác
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Chân section */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4af37]/50" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#8a7a58]">
              Tỉnh thức · Trách nhiệm · Thấu cảm
            </span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4af37]/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
