// src/components/ModelsGrid.jsx
import React, { useState, useEffect } from "react";
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
      <div className="max-w-5xl mx-auto px-6 md:px-12 pt-8 text-center md:text-center">
        <h1
          className="
            w-full
            text-[40px] sm:text-[52px] md:text-[72px] lg:text-[88px]
            font-extrabold tracking-tight text-slate-900 text-center
          "
        >
          {c.name}
        </h1>
      </div>

      {/* 2) ẢNH + điều hướng + dots */}
      <div className="relative h-[56vh] md:h-[60vh] flex items-center justify-center">
        <Link
          to={`/product/${c.id}`}
          aria-label={`Xem chi tiết ${c.name}`}
          className="block"
        >
          <img
            src={c.img}
            alt={c.name}
            className={[
              !isSVG
                ? "max-h-[48vh] md:max-h-[52vh] w-auto object-contain"
                : "h-[38vh] md:h-[44vh] w-auto object-contain scale-[1.06] md:scale-[1.1]",
            ].join(" ")}
          />
        </Link>

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

        {/* Dots Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
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
      </div>

      {/* 3) BẢNG THÔNG TIN + CTA */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-8 border-t border-slate-200">
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
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 mb-6">
          <a
            href="#form"
            className="px-6 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-500 transition"
          >
            NHẬN NGAY ƯU ĐÃI
          </a>
          <Link
            to={`/product/${c.id}`}
            className="px-6 py-3 rounded-full bg-white text-black border border-slate-300 font-semibold hover:bg-slate-100 transition"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </section>
  );
}
