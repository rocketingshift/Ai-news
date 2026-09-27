import { motion, useReducedMotion } from "framer-motion";

/**
 * "CELESTIAL ORRERY" — Thiên Cầu Nghi 3D xoay đa trục.
 *
 * Quả cầu cơ học cổ bao bọc các quỹ đạo đồng tâm mang "hành tinh sự kiện"
 * phát quang nhỏ (đại diện cho 13 cột mốc). Một "sao chổi" vàng rẽ qua
 * quỹ đạo tạo vệt sáng. Tâm là tinh thể pha lê phát quang xanh nhạt —
 * "nguồn dự báo".
 *
 * - Quả cầu ngoài (trục Y): viền vàng đồng, chốt rune 8 hướng.
 * - Quỹ đạo giữa (trục X): vành ngọc jade nghiêng, mang các hành tinh sự kiện.
 * - Quỹ đạo trong (trục Z): mảnh nhất, xoay nhanh, mang sao chổi vàng.
 * - Tâm: tinh thể pha lê đa diện phát quang jade.
 *
 * Thuộc phong cách Where Winds Meet — Obsidian + Jade Cyan + Antique Gold.
 * Không chứa ký tự tiếng Trung.
 */
export function CelestialOrrery({ prefersReduced }: { prefersReduced?: boolean | null }) {
  const reduced = useReducedMotion() ?? prefersReduced ?? false;

  // 8 "hành tinh sự kiện" phân bố trên quỹ đạo giữa
  const planets = [
    { angle: 0, color: "#aef4ff", size: 3.2 },
    { angle: 45, color: "#f3e5ab", size: 2.6 },
    { angle: 90, color: "#82e3f5", size: 3.6 },
    { angle: 135, color: "#d4af37", size: 2.4 },
    { angle: 180, color: "#aef4ff", size: 3 },
    { angle: 225, color: "#f3e5ab", size: 2.8 },
    { angle: 270, color: "#38b4d8", size: 3.4 },
    { angle: 315, color: "#e6c766", size: 2.2 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mb-14 sm:mb-20 w-72 sm:w-80 h-72 sm:h-80 [perspective:1100px]"
      aria-hidden
    >
      {/* Bồng bềnh không trọng lực */}
      <motion.div
        animate={reduced ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        {/* Vầng quang phát quang nền */}
        <div className="absolute inset-0 rounded-full bg-[#38b4d8]/12 blur-[80px]" />
        <div className="absolute inset-6 rounded-full bg-[#d4af37]/10 blur-[60px]" />

        {/* === Khối 3D đa trục === */}
        <div className="absolute inset-0 [transform-style:preserve-3d]">
          {/* Quả cầu ngoài cùng — xoay quanh trục Y (equatorial), khắc rune cổ */}
          <motion.div
            animate={reduced ? {} : { rotateY: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-[#c59b27]/45 [transform-style:preserve-3d]"
          >
            {/* Mặt phẳng ngang của quả cầu ngoài */}
            <div
              className="absolute inset-0 rounded-full border border-[#d4af37]/30"
              style={{ transform: "rotateX(72deg)" }}
            />
            {/* Chốt vàng ở 8 hướng */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <span
                key={deg}
                className="absolute left-1/2 top-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full bg-gradient-to-br from-[#f3e5ab] to-[#9a7519] shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                style={{ transform: `rotateY(${deg}deg) translateZ(140px)` }}
              />
            ))}
          </motion.div>

          {/* Quỹ đạo giữa — xoay quanh trục X (đứng, nghiêng), mang các hành tinh sự kiện */}
          <motion.div
            animate={reduced ? {} : { rotateX: -360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute inset-5 rounded-full border border-[#82e3f5]/40 [transform-style:preserve-3d]"
          >
            {/* Vành ngọc jade nghiêng */}
            <div
              className="absolute inset-0 rounded-full border-t border-[#aef4ff]/60 border-transparent"
              style={{ transform: "rotateY(78deg)" }}
            />
            {/* Các "hành tinh sự kiện" phát quang phân bố trên quỹ đạo */}
            {planets.map((p, i) => (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  marginLeft: -p.size / 2,
                  marginTop: -p.size / 2,
                  backgroundColor: p.color,
                  boxShadow: `0 0 8px ${p.color}, 0 0 14px ${p.color}80`,
                  transform: `rotateX(0deg) rotateY(${p.angle}deg) translateZ(128px)`,
                }}
              />
            ))}
          </motion.div>

          {/* Quỹ đạo trong — xoay quanh trục Z (đứng thẳng), nhanh nhất, mang sao chổi */}
          <motion.div
            animate={reduced ? {} : { rotateZ: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute inset-12 rounded-full border border-dashed border-[#d4af37]/35"
          >
            {/* Sao chổi vàng — đuôi sáng kéo theo */}
            <span className="absolute -top-1 left-1/2 -ml-2 flex items-center gap-0.5">
              <span className="w-1 h-1 rounded-full bg-[#f3e5ab] shadow-[0_0_10px_rgba(243,229,171,0.95)]" />
              <span className="w-3 h-[1.5px] bg-gradient-to-r from-[#f3e5ab] to-transparent rounded-full" />
            </span>
          </motion.div>

          {/* === TINH THỂ PHA LÊ TÂM — NGUỒN DỰ BÁO === */}
          <div
            className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]"
            style={{ transform: "rotateX(8deg)" }}
          >
            <div className="relative w-28 h-28">
              <svg
                viewBox="0 0 160 160"
                className="absolute inset-0 w-full h-full drop-shadow-[0_0_18px_rgba(130,227,245,0.45)]"
              >
                <defs>
                  <linearGradient id="orreryGold" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f3e5ab" />
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#9a7519" />
                  </linearGradient>
                  <radialGradient id="orreryCrystal" cx="0.4" cy="0.35" r="0.7">
                    <stop offset="0%" stopColor="#e8fdff" stopOpacity="0.95" />
                    <stop offset="45%" stopColor="#82e3f5" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#127096" stopOpacity="0.75" />
                  </radialGradient>
                  <radialGradient id="orreryGlow" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#aef4ff" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#38b4d8" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Vầng quang tâm */}
                <ellipse cx="80" cy="80" rx="46" ry="46" fill="url(#orreryGlow)" />

                {/* Khung vàng 6 cạnh (lục giác) quanh tinh thể */}
                <polygon
                  points="80,20 132,52 132,108 80,140 28,108 28,52"
                  fill="none"
                  stroke="url(#orreryGold)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />

                {/* Tinh thể pha lê đa diện — thoi lục giác */}
                <polygon
                  points="80,34 118,58 118,102 80,126 42,102 42,58"
                  fill="url(#orreryCrystal)"
                  stroke="#aef4ff"
                  strokeWidth="0.8"
                  strokeOpacity="0.6"
                />

                {/* Nét phản chiếu nội — chia mặt tinh thể */}
                <line
                  x1="80"
                  y1="34"
                  x2="80"
                  y2="126"
                  stroke="#e8fdff"
                  strokeWidth="0.6"
                  strokeOpacity="0.5"
                />
                <line
                  x1="42"
                  y1="58"
                  x2="118"
                  y2="102"
                  stroke="#e8fdff"
                  strokeWidth="0.4"
                  strokeOpacity="0.35"
                />
                <line
                  x1="118"
                  y1="58"
                  x2="42"
                  y2="102"
                  stroke="#e8fdff"
                  strokeWidth="0.4"
                  strokeOpacity="0.35"
                />

                {/* Sáng điểm nhấn */}
                <circle cx="64" cy="58" r="4" fill="#ffffff" opacity="0.55" />
                <circle cx="64" cy="58" r="2" fill="#ffffff" opacity="0.9" />
              </svg>

              {/* Xung lực nhịp thở ở tâm */}
              {!reduced && (
                <motion.div
                  className="absolute inset-6 rounded-full bg-[#aef4ff]/0"
                  animate={{ opacity: [0, 0.25, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ boxShadow: "0 0 24px 6px rgba(130,227,245,0.4)" }}
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Chữ quanh thiên cầu */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#c59b27]">
          Thiên cầu dự báo
        </span>
      </div>
    </motion.div>
  );
}
