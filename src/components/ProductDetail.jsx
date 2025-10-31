import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { cars } from "../data/cars";
// Ở đầu file ProductDetail.jsx, thêm:
import { Gift, CheckCircle, Phone } from "lucide-react";
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

// … bên trong file, đặt trước phần `export default function …` hoặc ngay trên chỗ dùng:
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
      {/* Dải nổi bật Tháng/Năm */}
      <div className="absolute -right-10 -top-10 rotate-45 bg-emerald-600 text-white text-xs md:text-sm px-12 py-2 shadow">
        Tháng 11/2025
      </div>

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
      <PromotionBox modelName={car.name} />
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
