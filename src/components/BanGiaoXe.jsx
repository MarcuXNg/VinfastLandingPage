// src/components/BanGiaoXe.jsx
import { useMemo } from "react";

// ✅ Đúng cú pháp mới của Vite (thay as:'url')
const modules = import.meta.glob(
  "/src/assets/BanGiao/*.{png,jpg,jpeg,webp,gif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

// modules: Record<string, string> (URL)
const images = Object.values(modules);

export default function BanGiaoXe() {
  const photos = useMemo(() => images, []);
  const track = photos.length ? [...photos, ...photos] : [];

  return (
    <section className="relative bg-white py-10 overflow-hidden" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {photos.length ? (
          <div className="space-y-6">
            <div className="relative">
              <div className="flex gap-4 w-[200%] animate-[scrollx_28s_linear_infinite] hover:[animation-play-state:paused]">
                {track.map((src, i) => (
                  <Card key={`t1-${i}`} src={src} />
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="flex gap-4 w-[200%] animate-[scrollxReverse_34s_linear_infinite] hover:[animation-play-state:paused]">
                {track.map((src, i) => (
                  <Card key={`t2-${i}`} src={src} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 text-center text-slate-600">
            Thêm ảnh vào <code className="font-mono">src/assets/BanGiao</code>{" "}
            để hiển thị.
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />

      <style>{`
        @keyframes scrollx { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes scrollxReverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        @media (prefers-reduced-motion: reduce) {
          .animate-[scrollx_28s_linear_infinite],
          .animate-[scrollxReverse_34s_linear_infinite] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

function Card({ src }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shrink-0"
      style={{ width: "min(420px, 46vw)", aspectRatio: "4 / 3" }}
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
