// src/pages/ProductDetail.jsx
import React, { useMemo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cars as baseCars } from "../data/cars.js";
import { carDetailsMap } from "../data/index.js";
import ContentBlocks from "../components/ContentBlocks";
import Form from "../components/Form";
import { Gift, CheckCircle, Phone } from "lucide-react";
import NotFound from "../pages/NotFound.jsx";

function PromotionBox({ modelName = "VinFast" }) {
  const items = [
    "Giảm trực tiếp 4% vào giá bán xe",
    "Miễn 100% lệ phí trước bạ",
    "Giảm 15.000.000 khi có xe xăng đổi xe điện",
    "Tặng 15.000.000 VNĐ vào tài khoản Vinclub",
    "Gói phụ kiện chính hãng cao cấp: Film cách nhiệt, Lót sàn, Camera hành trình,...",
    "Hỗ trợ đăng kí HTX, Xanh SM, Grab, Be,...",
    "Gói phụ kiện chính hãng cao cấp: Film cách nhiệt, Lót sàn, Camera hành trình,...",
    "Xe có sẵn, đủ màu, giao ngay cho quý khách hàng",
    "Miễn phí sạc đến ngày 31/06/2027", // *Lưu ý: tháng 6 thường 30 ngày
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 md:p-8 shadow-sm">
      <div className="flex items-start gap-4 mb-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          <Gift size={26} />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-emerald-800">
            Khuyến mãi {modelName.toUpperCase()} cực hấp dẫn
          </h3>
          <p className="text-slate-600 mt-1">
            Áp dụng riêng cho tháng 11/2025 — số lượng có hạn.
          </p>
        </div>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-4">
        {items.map((t, i) => (
          <li
            key={i}
            className="flex items-start gap-3 rounded-2xl bg-white/70 border border-emerald-100 p-3"
          >
            <CheckCircle className="mt-0.5 text-emerald-600" size={18} />
            <span className="text-[15px] text-slate-800">{t}</span>
          </li>
        ))}
      </ul>

      {/* Hotline + CTA */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          href="tel:0703711726"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 hover:bg-slate-50 transition"
        >
          <Phone size={18} /> Gọi hotline 0967 034 207
        </a>
        <a
          href="#form"
          className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-500 transition"
        >
          Nhận ưu đãi ngay
        </a>
      </div>

      {/* Viền nhấn đẹp */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-emerald-600/10" />
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();

  const car = useMemo(() => {
    const base = baseCars.find((c) => c.id === id);
    const detail = carDetailsMap[id];

    if (!base && !detail) return null;

    return {
      ...(base || {}),
      ...(detail || {}),
      specs: {
        ...(base?.specs || {}),
        ...(detail?.specs || {}),
      },
      // 🔥 merge thêm specsByTrim (nếu có)
      specsByTrim: {
        ...(base?.specsByTrim || {}),
        ...(detail?.specsByTrim || {}),
      },
    };
  }, [id]);

  const [activePriceTab, setActivePriceTab] = useState(null);

  useEffect(() => {
    if (car?.priceTabs?.length) {
      setActivePriceTab(car.priceTabs[0].id); // mặc định chọn Eco
    } else {
      setActivePriceTab(null);
    }
  }, [car]);

  const displayPrice =
    car?.priceTabs && activePriceTab
      ? car.priceTabs.find((tab) => tab.id === activePriceTab)?.price
      : car?.price;

  // State chọn màu
  const [colorIndex, setColorIndex] = useState(0);
  useEffect(() => {
    setColorIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!car) {
    return <NotFound />;
  }

  const hasColors = Array.isArray(car.colors) && car.colors.length > 0;
  const selectedColor = hasColors
    ? car.colors[Math.min(colorIndex, car.colors.length - 1)]
    : null;

  // HERO: luôn dùng ảnh gốc (không thay theo màu)
  const heroImg = car.product_img || car.img;

  return (
    <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* ===== HERO cố định ảnh gốc ===== */}
      <div className="rounded-3xl overflow-hidden shadow ring-1 ring-black/5 mb-6">
        <div className="w-full aspect-[16/9] md:aspect-[16/9] bg-slate-100">
          <img
            src={heroImg}
            alt={car.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ===== GRID 2 CỘT ===== */}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_500px]">
        {/* Cột trái */}
        <main className="space-y-8 min-w-0">
          {/* Tiêu đề + giá */}
          <div className="space-y-3">
            <h1 className="text-2xl md:text-3xl font-semibold">
              {car.name || car.title}
            </h1>

            {/* Nếu có 2 giá Eco / Plus thì hiện nút chuyển */}
            {car.priceTabs?.length ? (
              <div className="space-y-2">
                <div className="inline-flex rounded-full bg-slate-100 p-1">
                  {car.priceTabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActivePriceTab(tab.id)}
                      className={`px-3 py-1 text-sm rounded-full transition
              ${
                tab.id === activePriceTab
                  ? "bg-slate-900 text-white"
                  : "text-slate-600"
              }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <p className="text-2xl font-semibold text-sky-700">
                  {displayPrice}
                </p>
              </div>
            ) : (
              // Các xe 1 giá (như VF3) vẫn dùng như cũ
              <p className="text-2xl font-semibold text-sky-700">{car.price}</p>
            )}
          </div>
          {hasColors && (
            <section className="space-y-4">
              {/* Preview nhỏ (ảnh theo màu) */}
              {selectedColor?.img && (
                <div className="mx-auto w-full max-w-[500px]">
                  <div className="rounded-2xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-sm">
                    <div className="w-full aspect-[16/9] bg-slate-50">
                      <img
                        src={selectedColor.img}
                        alt={`${car.name} - ${selectedColor.name}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Swatches đặt dưới ảnh */}
              <div className="mx-auto w-full max-w-[680px]">
                <p className="text-sm font-semibold text-slate-700 mb-2 text-center">
                  Màu sắc
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  {car.colors.map((c, idx) => {
                    const active = idx === colorIndex;
                    return (
                      <button
                        key={c.id || idx}
                        type="button"
                        onClick={() => setColorIndex(idx)}
                        title={c.name}
                        aria-label={c.name}
                        className={[
                          "relative h-7 w-7 rounded-full ring-1 ring-slate-300 transition",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
                          active
                            ? "ring-2 ring-sky-700"
                            : "hover:ring-slate-400",
                        ].join(" ")}
                        style={{ backgroundColor: c.hex }}
                      >
                        <span className="absolute inset-0 rounded-full ring-1 ring-black/10 pointer-events-none" />
                      </button>
                    );
                  })}
                </div>

                <div className="text-sm text-slate-600 mt-2 text-center">
                  {selectedColor?.name || ""}
                </div>
              </div>
            </section>
          )}
          <PromotionBox modelName={car.name} />
          {/* Bảng thông số */}
          {(car.specs || car.specsByTrim) && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Thông số kỹ thuật</h2>

              {car.priceTabs?.length > 1 && car.specsByTrim ? (
                // 🔥 BẢNG SO SÁNH NHIỀU PHIÊN BẢN (Eco / Plus)
                <div className="overflow-x-auto rounded-2xl shadow-sm ring-1 ring-slate-200">
                  <table className="min-w-full border-collapse bg-slate-50">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="py-3 px-4 text-left text-slate-700 font-semibold w-[30%]">
                          Thông số
                        </th>
                        {car.priceTabs.map((tab) => (
                          <th
                            key={tab.id}
                            className="py-3 px-4 text-left text-slate-700 font-semibold"
                          >
                            {tab.label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {(() => {
                        // gom tất cả keys từ các bản
                        const allKeys = new Set();

                        car.priceTabs.forEach((tab) => {
                          const specsForTrim = car.specsByTrim?.[tab.id] || {};
                          Object.keys(specsForTrim).forEach((k) =>
                            allKeys.add(k)
                          );
                        });

                        return Array.from(allKeys).map((key) => (
                          <tr
                            key={key}
                            className="border-t border-slate-200 hover:bg-white transition"
                          >
                            <td className="py-3 px-4 font-medium text-slate-700 align-top">
                              {key}
                            </td>
                            {car.priceTabs.map((tab) => {
                              const value =
                                car.specsByTrim?.[tab.id]?.[key] || "—";
                              return (
                                <td
                                  key={tab.id}
                                  className="py-3 px-4 text-slate-600 align-top"
                                >
                                  {value}
                                </td>
                              );
                            })}
                          </tr>
                        ));
                      })()}
                    </tbody>
                  </table>
                </div>
              ) : (
                // 🔹 Xe chỉ có 1 phiên bản: bảng 1 cột như cũ
                <table className="w-full border-collapse bg-slate-50 rounded-2xl overflow-hidden shadow-sm">
                  <tbody>
                    {Object.entries(car.specs || {}).map(([k, v]) => (
                      <tr
                        key={k}
                        className="border-b border-slate-200 hover:bg-white transition"
                      >
                        <td className="py-3 px-4 font-medium text-slate-700">
                          {k}
                        </td>
                        <td className="py-3 px-4 text-slate-600">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </section>
          )}

          {/* Ảnh ngay sau bảng thông số (nếu có) */}
          {car.afterSpecsImage && (
            <div className="rounded-2xl overflow-hidden shadow ring-1 ring-black/5">
              <img
                src={car.afterSpecsImage}
                alt={`${car.name} - hình ảnh sau thông số`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          )}
          {/* Bài viết theo blocks */}
          {car.sections?.length ? (
            <ContentBlocks sections={car.sections} />
          ) : null}
        </main>

        {/* Cột phải: Form sticky */}
        <aside
          className="lg:block sticky self-start top-[84px]"
          aria-label="Yêu cầu báo giá"
        >
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4 md:p-5">
            <Form />
          </div>
        </aside>
      </div>
    </div>
  );
}
