import React, { useMemo, useState } from "react";
import { isPhone, isEmail } from "../shared/lib/validators";
import { cars } from "../data/cars";
const Sheet_URL = import.meta.env.VITE_SHEET_URL ?? "";

export default function Form({ defaultModel = "vf3" }) {
  // Lấy options loại xe từ data
  const carOptions = useMemo(
    () =>
      cars.map((c) => ({
        id: c.id,
        label: c.name.replace(/^VinFast\s/i, ""), // hiển thị VF3, VF6...
      })),
    []
  );

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    model: defaultModel,
  });

  const [submitting, setSubmitting] = useState(false);
  const [note, setNote] = useState("");
  const URL = Sheet_URL;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const valid =
    form.fullName.trim().length >= 2 &&
    isPhone(form.phone) &&
    isEmail(form.email) &&
    form.location.trim().length >= 2 &&
    form.model;

  const submit = async (e) => {
    e.preventDefault();
    // console.log("SUBMIT CLICKED", { form, valid });
    setNote("");
    if (!valid) {
      setNote("Vui lòng điền đủ & hợp lệ các trường bắt buộc.");
      return;
    }

    try {
      setSubmitting(true);

      const payload = new URLSearchParams({
        name: form.fullName.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        model: form.model,
        location: form.location.trim(),
      }).toString();

      await fetch(URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload,
      });

      setNote("Gửi thành công! Chúng tôi sẽ liên hệ sớm.");
      setForm({
        fullName: "",
        phone: "",
        email: "",
        location: "",
        model: defaultModel,
      });
    } catch (err) {
      console.error(err);
      setNote("Gửi thất bại. Vui lòng thử lại sau.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="form" className="py-14 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-scrollFade">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-3xl font-extrabold">Đăng ký tư vấn</p>
          <p className="text-slate-600 mt-2">
            Điền thông tin để được tư vấn nhanh.
          </p>
        </div>

        <form
          onSubmit={submit}
          noValidate
          className="max-w-xl mx-auto mt-6 rounded-2xl bg-white border border-slate-200 p-5 shadow-sm"
        >
          {/* Họ và tên */}
          <div className="mb-3 ">
            <label className="block text-sm font-medium mb-1">
              Họ và tên (*)
            </label>
            <input
              className="w-full h-12 px-4 rounded-xl bg-white border border-slate-200 shadow-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              name="fullName"
              type="text"
              minLength={2}
              maxLength={80}
              placeholder="Nguyễn Văn A"
              value={form.fullName}
              onChange={onChange}
              required
            />
          </div>

          {/* Số điện thoại */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">
              Số điện thoại (*)
            </label>
            <input
              className="w-full h-12 px-4 rounded-xl bg-white border border-slate-200 shadow-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              name="phone"
              type="tel"
              inputMode="numeric"
              pattern="^\\+?\\d{9,12}$"
              maxLength={12}
              placeholder="09xxxxxxxx hoặc +849xxxxxxxx"
              value={form.phone}
              onChange={onChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Email (*)</label>
            <input
              className="w-full h-12 px-4 rounded-xl bg-white border border-slate-200 shadow-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              name="email"
              type="email"
              maxLength={60}
              placeholder="ten@gmail.com"
              value={form.email}
              onChange={onChange}
              required
            />
          </div>

          {/* Nơi sống */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">
              Nơi sống (*)
            </label>
            <input
              className="w-full h-12 px-4 rounded-xl bg-white border border-slate-200 shadow-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              name="location"
              type="text"
              maxLength={80}
              placeholder="Quận/Huyện, Tỉnh/Thành (VD: Tân Uyên, Bình Dương)"
              value={form.location}
              onChange={onChange}
              required
            />
          </div>

          {/* Loại xe */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Loại xe quan tâm (*)
            </label>
            <select
              name="model"
              value={form.model}
              onChange={onChange}
              className="w-full h-12 px-4 rounded-xl bg-white border border-slate-200 shadow-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            >
              {carOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* Thông báo trạng thái */}
          {note && (
            <div className="mb-3 rounded-xl px-3 py-2 bg-amber-50 text-amber-800 text-sm border border-amber-200">
              {note}
            </div>
          )}

          <button
            type="submit"
            disabled={!valid || submitting}
            className="w-full py-3 rounded-2xl bg-sky-700 text-white font-semibold hover:bg-sky-600 disabled:opacity-60"
          >
            {submitting ? "Đang gửi…" : "Đăng ký"}
          </button>
        </form>
      </div>
    </section>
  );
}
