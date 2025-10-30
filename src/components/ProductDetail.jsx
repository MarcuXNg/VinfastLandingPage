import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { cars } from "../data/cars";

const reviews = [
  {
    name: "Minh Trí",
    comment: "Xe chạy êm, tiết kiệm, nội thất đẹp.",
    rating: 5,
  },
  {
    name: "Ngọc Anh",
    comment: "Dịch vụ bảo hành tốt, tư vấn nhiệt tình.",
    rating: 4,
  },
  {
    name: "Hoàng Phúc",
    comment: "Thiết kế hiện đại, công nghệ thông minh.",
    rating: 5,
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!car)
    return <p className="text-center mt-10">Không tìm thấy sản phẩm.</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Hình ảnh sản phẩm */}
      <div className="animate-fadeIn">
        <img
          src={car.img}
          alt={car.name}
          className="w-full rounded-3xl shadow-lg object-cover"
        />
      </div>

      {/* Thông tin chính */}
      <div className="space-y-3 animate-scrollFade">
        <h1 className="text-4xl font-extrabold">{car.name}</h1>
        <p className="text-lg text-slate-700">{car.blurb}</p>
        <p className="text-2xl font-semibold text-sky-700">{car.price}</p>
        <p className="text-sm text-slate-500">⭐ 4.8/5 từ khách hàng</p>
      </div>

      {/* 📊 Thông số kỹ thuật */}
      {car.specs && (
        <div className="animate-scrollFade">
          <h2 className="text-2xl font-bold mb-4">Thông số kỹ thuật</h2>
          <table className="w-full border-collapse bg-slate-50 rounded-2xl overflow-hidden shadow-sm">
            <tbody>
              {Object.entries(car.specs).map(([label, value]) => (
                <tr
                  key={label}
                  className="border-b border-slate-200 hover:bg-white transition"
                >
                  <td className="py-3 px-4 font-medium text-slate-700">
                    {label}
                  </td>
                  <td className="py-3 px-4 text-slate-600">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Reviews */}
      <div className="space-y-4 animate-scrollFade">
        <h2 className="text-2xl font-bold">Đánh giá từ khách hàng</h2>
        {reviews.map((r, i) => (
          <div
            key={i}
            className="p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
          >
            <p className="font-semibold text-sky-700">{r.name}</p>
            <p className="text-sm text-slate-600 italic">
              {r.rating}⭐ – {r.comment}
            </p>
          </div>
        ))}
      </div>

      {/* Nút quay lại */}
      <div className="pt-6">
        <Link
          to="/"
          className="inline-block px-5 py-2 rounded-xl bg-sky-700 text-white hover:bg-sky-600 transition"
        >
          ← Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
}
