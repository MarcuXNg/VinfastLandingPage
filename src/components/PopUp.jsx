// src/components/PopUp.jsx
import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { cars } from "../data/cars";

const SHOW_INTERVAL = 300000; // 5 phút

export default function PopUp() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [model, setModel] = useState(cars[0]?.id || "vf3");

  const currentCar = useMemo(
    () =>
      cars.find(
        (c) => (c.id || c.name).toLowerCase().replace(/\s+/g, "") === model
      ) || cars[0],
    [model]
  );
  const isSVG = /\.svg$/i.test(currentCar?.img || "");

  // Khóa scroll khi mở popup
  useEffect(() => {
    const root = document.documentElement;
    if (open) root.classList.add("overflow-hidden");
    else root.classList.remove("overflow-hidden");
    return () => root.classList.remove("overflow-hidden");
  }, [open]);

  // Hiển thị ngay + lặp lại 5 phút
  useEffect(() => {
    setOpen(true);
    const id = setInterval(() => setOpen(true), SHOW_INTERVAL);
    return () => clearInterval(id);
  }, []);

  const close = () => setOpen(false);

  const submit = (e) => {
    e.preventDefault();
    window.location.hash = "#form";
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 sm:p-4">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/60 opacity-0 animate-[fadeIn_.25s_ease-out_forwards]"
        onClick={close}
      />

      {/* panel lớn gần full màn */}
      <div
        className="
          relative bg-white border border-slate-200 shadow-2xl overflow-hidden
          w-screen h-screen rounded-none
          sm:w-[94vw] sm:h-[90vh] sm:rounded-3xl
          opacity-0 translate-y-2 sm:translate-y-4 scale-[0.99]
          animate-[popIn_.3s_cubic-bezier(.2,.8,.2,1)_forwards]
        "
      >
        <button
          onClick={close}
          className="absolute right-3 top-3 sm:right-5 sm:top-5 rounded-full p-2 sm:p-3 hover:bg-slate-100 transition z-10"
          aria-label="Đóng"
        >
          <X size={24} />
        </button>

        {/* 2 cột */}
        <div className="grid h-full grid-cols-1 md:grid-cols-2">
          {/* LEFT — Form: to hơn + responsive + luôn giữa cột */}
          <div className="h-full flex items-center justify-center p-5 sm:p-10">
            <div className="w-full max-w-[640px] md:max-w-[580px] lg:max-w-[560px]">
              <h3 className="font-extrabold leading-tight text-[32px] sm:text-[40px] md:text-[48px]">
                Nhận báo giá
              </h3>
              <p className="text-slate-600 mt-3 text-base sm:text-lg md:text-xl">
                Hãy là người đầu tiên trải nghiệm ô tô điện đẳng cấp quốc tế!
              </p>

              <form onSubmit={submit} className="mt-7 space-y-5 md:space-y-6">
                <div>
                  <label className="block text-sm md:text-base font-medium mb-1.5">
                    Họ và tên *
                  </label>
                  <input
                    className="w-full h-12 sm:h-13 md:h-14 text-base sm:text-[17px] md:text-[18px]
                               px-4 md:px-6 rounded-xl border border-slate-300 outline-none
                               focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base font-medium mb-1.5">
                    Số điện thoại *
                  </label>
                  <input
                    className="w-full h-12 sm:h-13 md:h-14 text-base sm:text-[17px] md:text-[18px]
                               px-4 md:px-6 rounded-xl border border-slate-300 outline-none
                               focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    type="tel"
                    placeholder="09xxxxxxxx"
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base font-medium mb-1.5">
                    Nơi sống
                  </label>
                  <select
                    className="w-full h-12 sm:h-13 md:h-14 text-base sm:text-[17px] md:text-[18px]
                               px-4 md:px-6 rounded-xl border border-slate-300 bg-white
                               focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="">Chọn tỉnh thành</option>
                    <option>TP. Hồ Chí Minh</option>
                    <option>Hà Nội</option>
                    <option>Bình Dương</option>
                    <option>Đồng Nai</option>
                    <option>Đà Nẵng</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm md:text-base font-medium mb-1.5">
                    Dòng xe
                  </label>
                  <select
                    className="w-full h-12 sm:h-13 md:h-14 text-base sm:text-[17px] md:text-[18px]
                               px-4 md:px-6 rounded-xl border border-slate-300 bg-white
                               focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  >
                    {cars.map((c) => {
                      const id = (c.id || c.name)
                        .toLowerCase()
                        .replace(/\s+/g, "");
                      return (
                        <option key={id} value={id}>
                          {c.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="px-7 md:px-8 py-3.5 md:py-4 rounded-full
                               bg-black text-white font-semibold text-base md:text-lg
                               hover:bg-slate-800 transition"
                  >
                    Nhận báo giá
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT — cột ảnh: to hơn, căn giữa dọc/ngang */}
          <div className="h-full flex items-center justify-center p-0 sm:p-2 md:p-4">
            <div className="relative w-full h-full flex items-center justify-center">
              {(() => {
                const isSVG = /\.svg$/i.test(currentCar?.img || "");
                const baseScale = isSVG ? 4.5 : 4.0; // scale mặc định (SVG to hơn chút)
                const scale = currentCar?.ui?.scale ?? baseScale;
                const y = currentCar?.ui?.y ?? 0; // dịch ảnh theo trục Y nếu cần (âm là nhích lên)

                return (
                  <img
                    src={currentCar?.img}
                    alt={currentCar?.name}
                    className="
            w-auto object-contain transition-transform duration-300
            max-h-[82vh] md:max-h-[88vh] lg:max-h-[92vh]
            max-w-[96%]
          "
                    style={{ transform: `translateY(${y}%) scale(${scale})` }}
                    loading="lazy"
                  />
                );
              })()}

              {/* ground shadow */}
              <div
                className="pointer-events-none absolute bottom-[6%] left-1/2 -translate-x-1/2
                 w-[68%] max-w-[760px] h-10 rounded-full bg-black/10 blur-[12px] opacity-30"
              />
            </div>
          </div>
        </div>
      </div>

      {/* keyframes */}
      <style>{`
        @keyframes fadeIn { to { opacity: 1 } }
        @keyframes popIn { to { opacity: 1; transform: translateY(0) scale(1) } }
      `}</style>
    </div>
  );
}
