// src/components/PopUp.jsx
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cars } from "../data/cars";
import { isEmail } from "../shared/lib/validators";
const Sheet_URL = import.meta.env.VITE_SHEET_URL ?? "";

const SHOW_INTERVAL = 300000; // 5 phút
const URL = Sheet_URL;

export default function PopUp() {
  const [open, setOpen] = useState(false);

  // form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [model, setModel] = useState(cars[0]?.id || "vf3");
  const [submitting, setSubmitting] = useState(false);
  const [note, setNote] = useState("");

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

  const submit = async (e) => {
    e.preventDefault();
    setNote("");

    const okName = name.trim().length >= 2;
    const okPhone = phone.trim().length >= 9;
    const okCity = city.trim().length >= 2;
    const okEmail = email.trim() === "" || isEmail(email.trim());
    if (!okName || !okPhone || !okCity || !okEmail || !model) {
      setNote(
        "Vui lòng điền đúng Họ tên, Số điện thoại, Nơi sống và Email (nếu nhập)."
      );
      return;
    }

    try {
      setSubmitting(true);

      const payload = new URLSearchParams({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        model,
        location: city.trim(),
      }).toString();

      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload,
      });

      setNote("Gửi thành công! Chúng tôi sẽ liên hệ sớm.");
      window.location.hash = "#form";
      setOpen(false);

      setName("");
      setPhone("");
      setCity("");
      setEmail("");
      setModel(cars[0]?.id || "vf3");
    } catch (err) {
      console.error(err);
      setNote("Gửi thất bại. Vui lòng thử lại sau.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 sm:p-4">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/60 opacity-0 animate-[fadeIn_.25s_ease-out_forwards]"
        onClick={close}
      />

      {/* panel */}
      <div
        className="
         relative bg-white border border-slate-200 shadow-2xl overflow-hidden
         w-[92vw] max-w-[640px] sm:max-w-[820px] md:max-w-[760px]
         max-h-[90dvh] sm:rounded-3xl rounded-2xl
         pb-[env(safe-area-inset-bottom)]
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

        {/* Nội dung (cuộn trong panel nếu thiếu chỗ) */}
        <div className="max-h-[90dvh] overflow-y-auto overscroll-contain flex items-start sm:items-center justify-center p-5 sm:p-10">
          <div className="w-full max-w-[540px]">
            <h3 className="font-extrabold leading-tight text-[32px] sm:text-[40px] md:text-[48px]">
              Nhận báo giá
            </h3>
            <p className="text-slate-600 mt-3 text-base sm:text-lg md:text-xl">
              Hãy là người đầu tiên trải nghiệm ô tô điện đẳng cấp quốc tế!
            </p>

            <form onSubmit={submit} className="mt-7 space-y-5 md:space-y-6">
              <div>
                <label className="block text-sm md:text-base font-medium mb-1.5">
                  Họ và tên (*)
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
                  Số điện thoại (*)
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
                  Email (*)
                </label>
                <input
                  className="w-full h-12 sm:h-13 md:h-14 text-base sm:text-[17px] md:text-[18px]
                             px-4 md:px-6 rounded-xl border border-slate-300 outline-none
                             focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="ten@gmail.com"
                />
              </div>

              <div>
                <label className="block text-sm md:text-base font-medium mb-1.5">
                  Nơi sống (*)
                </label>
                <input
                  className="w-full h-12 sm:h-13 md:h-14 text-base sm:text-[17px] md:text-[18px]
                             px-4 md:px-6 rounded-xl border border-slate-300 outline-none
                             focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  placeholder="Quận/Huyện, Tỉnh/Thành (VD: Tân Uyên, Bình Dương)"
                />
              </div>

              <div>
                <label className="block text-sm md:text-base font-medium mb-1.5">
                  Dòng xe quan tâm (*)
                </label>
                <select
                  className="w-1/2 min-w-[220px] h-12 sm:h-13 md:h-14 text-base sm:text-[17px] md:text-[18px]
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

              {note && (
                <div className="rounded-xl px-3 py-2 bg-amber-50 text-amber-800 text-sm border border-amber-200">
                  {note}
                </div>
              )}

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-7 md:px-8 py-3.5 md:py-4 rounded-full
                             bg-black text-white font-semibold text-base md:text-lg
                             hover:bg-slate-800 transition disabled:opacity-60"
                >
                  {submitting ? "Đang gửi…" : "Nhận báo giá"}
                </button>
              </div>
            </form>
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
