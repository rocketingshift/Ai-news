import { motion, useReducedMotion } from "framer-motion";

/**
 * "CHRONO ASTROLABE" — Cỗ máy thiên văn 3D xoay đa trục cổ điển.
 *
 * Ba vòng quỹ đạo kim loại (vàng đồng + ngọc jade) xoay độc lập quanh các trục
 * X / Y / Z theo tốc độ khác nhau, bao bọc lấy một chiếc đồng hồ cát pha lê
 * lượng tử ở tâm. Khối bồng bềnh không trọng lực; hạt cát sao rơi xoáy.
 *
 * - Vòng ngoài (trục Y): cổ tự Bát Quái khắc chìm trên viền, chốt vàng 4 hướng.
 * - Vòng giữa (trục X): vành ngọc jade nghiêng, tốc độ trung bình.
 * - Vòng trong (trục Z): chấm sáng nhanh nhất.
 * - Tâm: đồng hồ cát pha lê đa diện, dòng cát sao phát quang.
 *
 * Thuộc phong cách Where Winds Meet — Obsidian + Jade Cyan + Antique Gold.
 */
export function ChronoAstrolabe({ prefersReduced }: { prefersReduced?: boolean | null }) {
  const reduced = useReducedMotion() ?? prefersReduced ?? false;

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
          {/* Vòng ngoài cùng — xoay quanh trục Y (equatorial) */}
          <motion.div
            animate={reduced ? {} : { rotateY: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-[#c59b27]/45 [transform-style:preserve-3d]"
          >
            {/* Mặt phẳng ngang của vòng ngoài */}
            <div
              className="absolute inset-0 rounded-full border border-[#d4af37]/30"
              style={{ transform: "rotateX(72deg)" }}
            />
            {/* Chốt vàng ở 4 hướng */}
            {[0, 90, 180, 270].map((deg) => (
              <span
                key={deg}
                className="absolute left-1/2 top-1/2 w-2.5 h-2.5 -ml-1.5 -mt-1.5 rounded-full bg-gradient-to-br from-[#f3e5ab] to-[#9a7519] shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                style={{ transform: `rotateY(${deg}deg) translateZ(140px)` }}
              />
            ))}
            {/* Ký hiệu khắc chìm trên viền — chấm sáng rune cổ */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-[#d4af37]/70 shadow-[0_0_6px_rgba(212,175,55,0.6)]"
                style={{
                  transform: `rotateY(${i * 45}deg) translateZ(146px) translateY(-7px)`,
                }}
              />
            ))}
          </motion.div>

          {/* Vòng giữa — xoay quanh trục X (đứng, nghiêng), tốc độ khác */}
          <motion.div
            animate={reduced ? {} : { rotateX: -360 }}
            transition={{ duration: 19, repeat: Infinity, ease: "linear" }}
            className="absolute inset-5 rounded-full border border-[#82e3f5]/40 [transform-style:preserve-3d]"
          >
            <div
              className="absolute inset-0 rounded-full border-t border-[#aef4ff]/60 border-transparent"
              style={{ transform: "rotateY(78deg)" }}
            />
            <div
              className="absolute inset-0 rounded-full border-l border-r border-[#38b4d8]/40 border-transparent"
              style={{ transform: "rotateZ(35deg)" }}
            />
          </motion.div>

          {/* Vòng trong — xoay quanh trục Z (đứng thẳng), nhanh nhất */}
          <motion.div
            animate={reduced ? {} : { rotateZ: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute inset-12 rounded-full border border-dashed border-[#d4af37]/35"
          >
            <span className="absolute -top-1 left-1/2 -ml-1 w-2 h-2 rounded-full bg-[#aef4ff] shadow-[0_0_10px_rgba(130,227,245,0.9)]" />
            <span className="absolute -bottom-1 left-1/2 -ml-1 w-2 h-2 rounded-full bg-[#f3e5ab] shadow-[0_0_10px_rgba(212,175,55,0.9)]" />
          </motion.div>

          {/* === ĐỒNG HỒ CÁT PHA LÊ LƯỢNG TỬ — TÂM CỖ MÁY === */}
          <div
            className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]"
            style={{ transform: "rotateX(8deg)" }}
          >
            <div className="relative w-28 h-28">
              {/* Thân kính pha lê đa diện */}
              <svg
                viewBox="0 0 160 160"
                className="absolute inset-0 w-full h-full drop-shadow-[0_0_18px_rgba(130,227,245,0.4)]"
              >
                <defs>
                  <linearGradient id="chronoGold" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f3e5ab" />
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#9a7519" />
                  </linearGradient>
                  <linearGradient id="chronoGlass" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(130,227,245,0.18)" />
                    <stop offset="100%" stopColor="rgba(10,8,6,0.35)" />
                  </linearGradient>
                  <linearGradient id="chronoSand" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f3e5ab" />
                    <stop offset="100%" stopColor="#d4af37" />
                  </linearGradient>
                  <radialGradient id="chronoGlow" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#aef4ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#38b4d8" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {/* Khung trên dưới */}
                <rect x="34" y="20" width="92" height="6" rx="3" fill="url(#chronoGold)" />
                <rect x="34" y="134" width="92" height="6" rx="3" fill="url(#chronoGold)" />
                {/* Thân kính đa diện */}
                <path
                  d="M46 26 L114 26 L86 80 L114 134 L46 134 L74 80 Z"
                  fill="url(#chronoGlass)"
                  stroke="url(#chronoGold)"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                {/* Cát phía trên (giảm dần) */}
                <motion.path
                  animate={
                    reduced
                      ? {}
                      : {
                          d: [
                            "M54 30 L106 30 L80 78 Z",
                            "M62 30 L98 30 L80 78 Z",
                            "M72 30 L88 30 L80 78 Z",
                            "M77 30 L83 30 L80 78 Z",
                            "M54 30 L106 30 L80 78 Z",
                          ],
                        }
                  }
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  fill="url(#chronoSand)"
                  opacity="0.92"
                />
                {/* Cát phía dưới (tăng dần) */}
                <motion.path
                  animate={
                    reduced
                      ? {}
                      : {
                          d: [
                            "M77 82 L83 82 L46 132 Z",
                            "M72 82 L88 82 L46 132 Z",
                            "M62 82 L98 82 L46 132 Z",
                            "M54 82 L106 82 L46 132 Z",
                            "M77 82 L83 82 L46 132 Z",
                          ],
                        }
                  }
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  fill="url(#chronoSand)"
                  opacity="0.65"
                />
                {/* Dòng cát sao xoáy rơi */}
                {!reduced && (
                  <motion.line
                    x1="80"
                    y1="80"
                    x2="80"
                    y2="132"
                    stroke="#f3e5ab"
                    strokeWidth="1.4"
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 0.45, repeat: Infinity, ease: "easeIn" }}
                  />
                )}
                {/* Hạt sao lấp lánh rơi */}
                {!reduced &&
                  [0, 0.15, 0.3, 0.45].map((delay, i) => (
                    <motion.circle
                      key={i}
                      cx={78 + i * 1.5}
                      cy="100"
                      r="1.1"
                      fill="#aef4ff"
                      animate={{ cy: [100, 130], opacity: [0, 1, 0] }}
                      transition={{ duration: 0.9, repeat: Infinity, delay, ease: "easeIn" }}
                    />
                  ))}
                {/* Vầng quang đáy cát */}
                <ellipse cx="60" cy="120" rx="14" ry="5" fill="url(#chronoGlow)" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Chữ quanh cỗ máy */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#c59b27]">
          Cỗ máy thời gian
        </span>
      </div>
    </motion.div>
  );
}
