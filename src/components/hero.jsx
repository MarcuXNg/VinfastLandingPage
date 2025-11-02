import React from "react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cars } from "../data/cars";

// Ảnh hero từ assets (được bundler hash/tối ưu)
import vf3 from "../assets/vf3/vf3_1.jpg";
import vf5 from "../assets/vf5/vf5_1.jpg";
import vf6 from "../assets/vf6/vf6_1.jpg";
import vf7 from "../assets/vf7/vf7_1.jpg";
import vf8 from "../assets/vf8/vf8_1.jpg";
import vf9 from "../assets/vf9/vf9_1.jpg";
import ecvan from "../assets/ecvan/ecvan_1.jpg";
import limogreen from "../assets/limogreen/limogreen_1.jpg";

// Map id -> ảnh hero trong assets
const heroImgById = {
  vf3,
  vf5,
  vf6,
  vf7,
  vf8,
  vf9,
  ecvan,
  limogreen,
};

// Nếu thiếu ảnh hero cho một id nào đó
const FALLBACK_HERO =
  "data:image/svg+xml;charset=utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='600'>
      <rect width='100%' height='100%' fill='#0f172a'/>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
        fill='white' font-size='28' font-family='sans-serif'>No hero image</text>
    </svg>`
  );

// Build slides trực tiếp từ data
const slidesFromData = cars.map((c, i) => ({
  id: i + 1,
  title: c.title || c.name,
  desc: c.desc || c.blurb,
  // ảnh hero lấy từ assets (ưu tiên đúng id). Nếu không có -> fallback
  img: heroImgById[c.id] || FALLBACK_HERO,
}));

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slidesFromData.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slidesFromData.length - 1 : prev - 1));

  // Auto slide mỗi 6 giây
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const slides = slidesFromData; // alias cho dễ đọc

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Các slide */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s) => (
          <div
            key={s.id}
            className="min-w-full h-full flex items-center justify-start relative"
          >
            <img
              src={s.img}
              alt={s.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Text content */}
            <div className="relative z-10 max-w-3xl px-8 md:px-16 text-white space-y-5">
              <h1 className="text-4xl md:text-6xl font-black leading-tight drop-shadow-lg">
                {s.title}
              </h1>
              <p className="text-lg md:text-2xl text-slate-100">{s.desc}</p>
              <div className="flex gap-4 mt-6">
                <a
                  href="#form"
                  className="px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-slate-800 transition"
                >
                  Đăng ký lái thử
                </a>
                <a
                  href="#form"
                  className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition"
                >
                  Nhận báo giá
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nút chuyển slide */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white text-slate-800 p-2 rounded-full shadow hover:bg-slate-100 transition"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white text-slate-800 p-2 rounded-full shadow hover:bg-slate-100 transition"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-white/50"
            } transition`}
          />
        ))}
      </div>
    </section>
  );
}
