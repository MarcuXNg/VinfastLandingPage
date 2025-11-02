import React from "react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cars } from "../data/cars";

export default function ModelsGrid() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === cars.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? cars.length - 1 : prev - 1));

  useEffect(() => {
    const auto = setInterval(nextSlide, 7000);
    return () => clearInterval(auto);
  }, []);

  const c = cars[current];
  const isSVG = /\.svg$/i.test(c?.img || "");

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Ảnh xe */}
      <div className="relative h-[70vh] md:h-[60vh] flex items-center justify-center">
        <img
          src={c.img}
          alt={c.name}
          className={[
            // PNG giữ như cũ
            !isSVG
              ? "max-h-full w-auto object-contain"
              : // SVG: phóng to hơn + cao hơn một chút để tương đương PNG
                "h-[40vh] max-h-full w-auto object-contain scale-[1.12] md:scale-[1.18]",
            "transition-all duration-700",
          ].join(" ")}
        />
        {/* Tiêu đề xe */}
        <h1 className="absolute top-8 w-full text-center text-[64px] md:text-[96px] font-extrabold text-black">
          {c.name}
        </h1>

        {/* Mũi tên điều hướng */}
        <button
          onClick={prevSlide}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-2 md:p-3 rounded-full shadow-md transition"
          aria-label="Xe trước"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-2 md:p-3 rounded-full shadow-md transition"
          aria-label="Xe sau"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Bảng thông tin xe */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-8 border-t border-slate-200">
        {/* thêm “Số chỗ” => tăng lên 5 cột ở desktop */}
        <div className="grid grid-cols-2 md:grid-cols-5 text-center gap-6 md:gap-10 mb-6">
          <div>
            <p className="text-slate-500 text-sm">Số chỗ</p>
            <p className="font-semibold text-lg">
              {c.specs?.["Số chỗ ngồi"] || "—"}
            </p>
          </div>
          <div>
            <p className="text-slate-500 text-sm">Động cơ</p>
            <p className="font-semibold text-lg">
              {c.specs?.["Động cơ"] || "—"}
            </p>
          </div>
          <div>
            <p className="text-slate-500 text-sm">Công suất (kW)</p>
            <p className="font-semibold text-lg">
              {c.specs?.["Công suất tối đa (kW)"] || "—"}
            </p>
          </div>
          <div>
            <p className="text-slate-500 text-sm">Quãng đường (km)</p>
            <p className="font-semibold text-lg">
              {c.specs?.["Quãng đường chạy một lần sạc đầy (km)"] || "—"}
            </p>
          </div>
          <div>
            <p className="text-slate-500 text-sm">Giá chỉ từ</p>
            <p className="font-semibold text-lg text-sky-700">
              {c.price || "—"}
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 mb-10">
          <a
            href="#form"
            className="px-6 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-500 transition"
          >
            NHẬN NGAY ƯU ĐÃI
          </a>
          <Link
            to={`/product/${(c.id || c.name)
              .toLowerCase()
              .replace(/\s+/g, "")}`}
            className="px-6 py-3 rounded-full bg-white text-black border border-slate-300 font-semibold hover:bg-slate-100 transition"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
        {cars.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-sky-600" : "bg-slate-300"
            } transition`}
            aria-label={`Chuyển đến ${cars[i].name}`}
          />
        ))}
      </div>
    </section>
  );
}
