// src/components/TrustSection.jsx
import { useMemo } from "react";

/** Import ảnh trong /public/BanGiao (png/jpg/jpeg/webp/gif) */
function importAll(r) {
  return r.keys().map((k) => r(k));
}
const images = importAll(
  require.context("/public/BanGiao", false, /\.(png|jpe?g|webp|gif)$/i)
);

export default function BanGiaoXe() {
  const photos = useMemo(() => images, []);

  // Lặp ảnh 2 lần để tạo đường băng liền mạch (200% chiều rộng)
  const track = photos.length ? [...photos, ...photos] : [];

  return (
    <section className="relative bg-white py-10 overflow-hidden" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {photos.length ? (
          <div className="space-y-6">
            {/* Track 1: chạy trái -> phải (thực tế là translateX(-50%)) */}
            <div className="relative">
              <div
                className="
                  flex gap-4 w-[200%]
                  animate-[scrollx_28s_linear_infinite]
                  hover:[animation-play-state:paused]
                "
              >
                {track.map((src, i) => (
                  <Card key={`t1-${i}`} src={src} />
                ))}
              </div>
            </div>

            {/* Track 2: chạy ngược lại, tốc độ khác cho sinh động */}
            <div className="relative">
              <div
                className="
                  flex gap-4 w-[200%]
                  animate-[scrollxReverse_34s_linear_infinite]
                  hover:[animation-play-state:paused]
                "
              >
                {track.map((src, i) => (
                  <Card key={`t2-${i}`} src={src} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 text-center text-slate-600">
            Thêm ảnh vào <code className="font-mono">/public/BanGiao</code> để
            hiển thị.
          </div>
        )}
      </div>

      {/* Fade cạnh trái/phải cho đẹp */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />

      {/* Keyframes */}
      <style>{`
        @keyframes scrollx { 
          from { transform: translateX(0); } 
          to   { transform: translateX(-50%); } 
        }
        @keyframes scrollxReverse { 
          from { transform: translateX(-50%); } 
          to   { transform: translateX(0); } 
        }
        /* Tôn trọng người dùng giảm chuyển động */
        @media (prefers-reduced-motion: reduce) {
          .animate-[scrollx_28s_linear_infinite],
          .animate-[scrollxReverse_34s_linear_infinite] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

/** Thẻ ảnh */
function Card({ src }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shrink-0"
      style={{ width: "min(420px, 46vw)", aspectRatio: "4/3" }}
    >
      <img
        src={src}
        alt="Bàn giao xe"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
