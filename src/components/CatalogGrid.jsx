import React from "react";
import { Link } from "react-router-dom";
import { cars } from "../data/cars";

export default function CatalogGrid() {
  // nếu muốn ẩn vài model, filter ở đây
  // const show = cars.filter(c => !["ecvan"].includes(c.id));
  const show = cars;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading giống hình */}
      <div className="text-center mb-8">
        <p className="uppercase tracking-widest text-slate-500 text-sm">
          DÒNG XE TIÊU BIỂU TẠI
        </p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-red-600">
          VINFAST TÂN UYÊN – KIM NHẬT PHÁT
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
        {show.map((car) => (
          <Link
            key={car.id}
            to={`/product/${car.id}`}
            className="group flex flex-col items-center text-center"
          >
            <div className="w-full aspect-[4/3] flex items-center justify-center rounded-xl bg-white ring-1 ring-slate-200/60 shadow-sm hover:shadow-md transition">
              <img
                src={car.product_img || car.img}
                alt={car.name}
                className="max-h-36 md:max-h-40 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="mt-3 text-sm md:text-base font-bold tracking-wide">
              {car.name.toUpperCase()}
            </h3>
            <p className="text-red-600 text-xs md:text-sm font-semibold">
              Từ {car.price}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
