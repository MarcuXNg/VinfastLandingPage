// src/components/CatalogGrid.jsx
import React from "react";
import { Link } from "react-router-dom";
import { cars } from "../data/cars";

/* ---- Auto load ảnh trong src/assets/<id>/<id>.(webp|png|jpg|jpeg) ---- */
const importedImages = import.meta.glob(
  "../assets/*/*.{webp,png,jpg,jpeg,svg}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const imagesMap = Object.fromEntries(
  Object.entries(importedImages).map(([path, url]) => {
    const m = path.match(/\/assets\/([^/]+)\/\1\.(webp|png|jpe?g)$/i);
    const id = m ? m[1].toLowerCase() : null;
    return id
      ? [id, /** @type {string} */ (url)]
      : [path, /** @type {string} */ (url)];
  })
);

/* ---- Nhóm xe: VF & Green ---- */
const VF_IDS = new Set(["vf3", "vf5", "vf5plus", "vf6", "vf7", "vf8", "vf9"]);
const GREEN_IDS = new Set(["ecvan", "limogreen", "neriogreen"]);

function getId(car) {
  return (car.id || car.name).toLowerCase().replace(/\s+/g, "");
}

const vfCars = cars.filter((c) => c.segment === "vf" || VF_IDS.has(getId(c)));
const greenCars = cars.filter(
  (c) => c.segment === "green" || GREEN_IDS.has(getId(c))
);

function CarCard({ car }) {
  const id = getId(car);
  const src = imagesMap[id] || car.product_img || car.img || "/fallback.png";

  const seats = car.specs?.["Số chỗ ngồi"];
  const rangeKm = car.specs?.["Quãng đường chạy một lần sạc đầy (km)"];
  const cycle = car.specs?.["Chu trình"] || car.specs?.["Chu trình thử nghiệm"];

  const lineLeftTop =
    car.category ||
    car.type ||
    car.segment_label ||
    car.segment ||
    `Dòng xe ${car.name}`;

  return (
    <Link
      key={id}
      to={`/product/${id}`}
      className="group flex flex-col items-center text-center focus-visible:outline-none"
    >
      {/* Khung ảnh to hơn */}
      <div
        className="
          w-full aspect-[16/9]
          flex items-center justify-center rounded-xl bg-white
          ring-1 ring-slate-200/60 shadow-sm transition
          overflow-hidden relative
          group-hover:shadow-md group-hover:ring-slate-300
          focus-visible:ring-2 focus-visible:ring-sky-500
        "
      >
        <img
          src={src}
          alt={car.name}
          className="
            max-h-52 sm:max-h-60 md:max-h-72 lg:max-h-80
            w-auto object-contain
            transition-transform duration-300 ease-out motion-safe:transform
            group-hover:scale-105 transform-gpu will-change-transform
          "
          loading="lazy"
        />
      </div>

      {/* Info dưới ảnh: quấn dòng gọn, cột phải cố định */}
      <div className="mt-3 w-full text-left">
        {/* Hàng 1 */}
        <div className="flex items-start justify-between gap-3">
          <span
            className="text-sky-700 text-sm md:text-[15px] font-semibold hover:underline
                       whitespace-normal break-words max-w-[75%]"
            title={lineLeftTop}
          >
            {lineLeftTop}
          </span>
          {seats && (
            <span className="text-slate-600 text-xs md:text-sm shrink-0">
              {seats} chỗ ngồi
            </span>
          )}
        </div>

        {/* Hàng 2 */}
        <div className="mt-1 flex items-start justify-between gap-3 text-xs md:text-sm">
          <span
            className="text-slate-500 whitespace-normal break-words max-w-[75%]"
            title={rangeKm ? `${rangeKm} km${cycle ? ` (${cycle})` : ""}` : ""}
          >
            {rangeKm ? `${rangeKm} km` : "—"}
            {cycle ? ` (${cycle})` : ""}
          </span>
          {car.price && (
            <span className="text-slate-900 font-semibold shrink-0">
              {car.price}
            </span>
          )}
        </div>

        <div className="mt-3 h-px bg-slate-200" />
      </div>
    </Link>
  );
}

function Section({ title, items }) {
  if (!items?.length) return null;
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
      <h2 className="text-xl md:text-2xl font-extrabold mb-6">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-10">
        {items.map((car) => (
          <CarCard key={getId(car)} car={car} />
        ))}
      </div>
    </section>
  );
}

export default function CatalogGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
      <div className="text-center mb-8">
        <p className="uppercase tracking-widest text-slate-500 text-sm">
          DÒNG XE TIÊU BIỂU TẠI
        </p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-red-600">
          VINFAST TÂN UYÊN – KIM NHẬT PHÁT
        </h2>
      </div>

      <div className="w-full">
        <Section title="Dòng xe điện VinFast" items={vfCars} />
        <Section title="Dòng xe điện kinh doanh VinFast" items={greenCars} />
      </div>
    </section>
  );
}
