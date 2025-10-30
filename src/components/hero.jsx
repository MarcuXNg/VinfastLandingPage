import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "VF 3 – Nhỏ gọn, linh hoạt, năng lượng xanh",
    desc: "Xe điện đô thị cỡ nhỏ, thiết kế trẻ trung, di chuyển dễ dàng trong phố.",
    img: "/vf3.jpg",
  },
  {
    id: 2,
    title: "VF 5 Plus – Phong cách và tiện nghi",
    desc: "Mẫu xe điện phân khúc A hiện đại, năng động, dành cho giới trẻ.",
    img: "/vf5.jpg",
  },
  {
    id: 3,
    title: "VF 6 – SUV điện tầm trung, mạnh mẽ và thông minh",
    desc: "Công nghệ tiên tiến, thiết kế tinh tế, tối ưu cho đô thị hiện đại.",
    img: "/vf6.jpg",
  },
  {
    id: 4,
    title: "VF 7 – Cá tính, thể thao và đẳng cấp",
    desc: "Trải nghiệm lái phấn khích với thiết kế đậm chất tương lai.",
    img: "/vf7.jpg",
  },
  {
    id: 5,
    title: "VF 8 – SUV điện sang trọng và thông minh",
    desc: "Hiệu suất mạnh mẽ, công nghệ tiên tiến, tiện nghi toàn diện.",
    img: "/vf8.jpg",
  },
  {
    id: 6,
    title: "VF 9 – SUV 7 chỗ đẳng cấp quốc tế",
    desc: "Không gian rộng rãi, an toàn vượt trội, phù hợp cho gia đình và doanh nghiệp.",
    img: "/vf9.jpg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Auto slide mỗi 6 giây
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

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
