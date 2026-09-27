import { motion, useReducedMotion } from "framer-motion";

/**
 * "TRUTH COMPASS" — La Bàn Chân Lý 3D xoay đa trục.
 *
 * Một chiếc la bàn cổ, kim chỉ nam là mũi tên pha lê jade phát quang
 * dao động tìm hướng rồi "khóa" lại (lặp lại) — như đang định vị sự kiện
 * thật giữa nhiều. Xung quanh là các vòng xoay khắc vân rune. Vệt sáng
 * ngọc quét qua mặt số như đang rà soát chứng cứ.
 *
 * - Vòng ngoài (trục Y): vàng đồng, chốt 4 hướng rune cổ.
 * - Vòng giữa (trục X): vành jade nghiêng, xoay ngược chiều.
 * - Kim pha lê jade: dao động qua lại rồi khóa vào một hướng.
 * - Mặt số: đá obsidian pha vân mực, khắc vân thủy mặc.
 *
 * Thuộc phong cách Where Winds Meet — Obsidian + Jade Cyan + Antique Gold.
 * Không chứa ký tự tiếng Trung.
 */
export function TruthCompass({ prefersReduced }: { prefersReduced?: boolean | null }) {
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
          {/* Vòng ngoài cùng — xoay quanh trục Y, chốt rune 4 hướng */}
          <motion.div
            animate={reduced ? {} : { rotateY: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-[#c59b27]/45 [transform-style:preserve-3d]"
          >
            {/* Mặt phẳng ngang của vòng ngoài */}
            <div
              className="absolute inset-0 rounded-full border border-[#d4af37]/30"
              style={{ transform: "rotateX(72deg)" }}
            />
            {/* Chốt vàng ở 4 hướng chính */}
            {[0, 90, 180, 270].map((deg) => (
              <span
                key={deg}
                className="absolute left-1/2 top-1/2 w-2.5 h-2.5 -ml-1.5 -mt-1.5 rounded-full bg-gradient-to-br from-[#f3e5ab] to-[#9a7519] shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                style={{ transform: `rotateY(${deg}deg) translateZ(140px)` }}
              />
            ))}
            {/* Rune khắc chìm — chấm sáng 8 vị trí */}
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

          {/* Vòng giữa — xoay quanh trục X, ngược chiều, vành jade nghiêng */}
          <motion.div
            animate={reduced ? {} : { rotateX: -360 }}
            transition={{ duration: 21, repeat: Infinity, ease: "linear" }}
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

          {/* Vòng trong — xoay quanh trục Z, mang vệt sáng quét rà soát */}
          <motion.div
            animate={reduced ? {} : { rotateZ: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-12 rounded-full border border-dashed border-[#d4af37]/35"
          >
            <span className="absolute -top-1 left-1/2 -ml-1 w-2 h-2 rounded-full bg-[#aef4ff] shadow-[0_0_10px_rgba(130,227,245,0.9)]" />
            <span className="absolute -bottom-1 left-1/2 -ml-1 w-2 h-2 rounded-full bg-[#f3e5ab] shadow-[0_0_10px_rgba(212,175,55,0.9)]" />
          </motion.div>

          {/* === MẶT SỐ LA BÀN VÀ KIM CHỈ NAM TÂM === */}
          <div
            className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]"
            style={{ transform: "rotateX(8deg)" }}
          >
            <div className="relative w-28 h-28">
              <svg
                viewBox="0 0 160 160"
                className="absolute inset-0 w-full h-full drop-shadow-[0_0_18px_rgba(130,227,245,0.4)]"
              >
                <defs>
                  <linearGradient id="compassGold" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f3e5ab" />
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#9a7519" />
                  </linearGradient>
                  <radialGradient id="compassFace" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#10131c" />
                    <stop offset="70%" stopColor="#080a10" />
                    <stop offset="100%" stopColor="#05060a" />
                  </radialGradient>
                  <linearGradient id="compassNeedle" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e8fdff" />
                    <stop offset="40%" stopColor="#82e3f5" />
                    <stop offset="100%" stopColor="#127096" />
                  </linearGradient>
                  <radialGradient id="compassGlow" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#aef4ff" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#38b4d8" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Vầng quang đáy */}
                <ellipse cx="80" cy="80" rx="48" ry="48" fill="url(#compassGlow)" />

                {/* Khung vàng ngoài — viền la bàn */}
                <circle
                  cx="80"
                  cy="80"
                  r="56"
                  fill="url(#compassFace)"
                  stroke="url(#compassGold)"
                  strokeWidth="2.5"
                />

                {/* Vân khắc rune trên mặt số — 12 vạch tick */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const a = (i * 30 * Math.PI) / 180;
                  const x1 = 80 + Math.cos(a) * 48;
                  const y1 = 80 + Math.sin(a) * 48;
                  const x2 = 80 + Math.cos(a) * (i % 3 === 0 ? 40 : 44);
                  const y2 = 80 + Math.sin(a) * (i % 3 === 0 ? 40 : 44);
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={i % 3 === 0 ? "#d4af37" : "#8a7238"}
                      strokeWidth={i % 3 === 0 ? 1.4 : 0.7}
                      strokeOpacity={i % 3 === 0 ? 0.85 : 0.55}
                    />
                  );
                })}

                {/* Vân thủy mặc loang nhẹ trên mặt số */}
                <path
                  d="M40 90 Q60 78 80 88 T120 84"
                  fill="none"
                  stroke="#82e3f5"
                  strokeWidth="0.5"
                  strokeOpacity="0.18"
                />
                <path
                  d="M44 70 Q70 86 96 72 T116 78"
                  fill="none"
                  stroke="#aef4ff"
                  strokeWidth="0.5"
                  strokeOpacity="0.14"
                />

                {/* Chốt tâm vàng */}
                <circle cx="80" cy="80" r="4" fill="url(#compassGold)" />
                <circle cx="80" cy="80" r="1.6" fill="#080a10" />

                {/* KIM CHỈ NAM — dao động tìm hướng rồi khóa */}
                <motion.g
                  animate={reduced ? {} : { rotate: [-38, -38, 22, 22, -8, -8, 6, 6, 0, 0, 0, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: "80px 80px" }}
                >
                  {/* Mũi trên — jade phát quang (chỉ phía sự thật) */}
                  <polygon
                    points="80,28 86,80 74,80"
                    fill="url(#compassNeedle)"
                    stroke="#e8fdff"
                    strokeWidth="0.5"
                    strokeOpacity="0.7"
                  />
                  {/* Mũi dưới — vàng đồng */}
                  <polygon
                    points="80,132 86,80 74,80"
                    fill="#d4af37"
                    stroke="#9a7519"
                    strokeWidth="0.4"
                    strokeOpacity="0.6"
                  />
                </motion.g>

                {/* Vệt sáng quét rà soát — vòng cung mờ xoay nhẹ */}
                {!reduced && (
                  <motion.circle
                    cx="80"
                    cy="80"
                    r="50"
                    fill="none"
                    stroke="#aef4ff"
                    strokeWidth="1.2"
                    strokeOpacity="0.5"
                    strokeDasharray="40 220"
                    strokeLinecap="round"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "80px 80px" }}
                  />
                )}
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Chữ quanh la bàn */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#c59b27]">
          La bàn chân lý
        </span>
      </div>
    </motion.div>
  );
}
