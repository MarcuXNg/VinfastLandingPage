import { useMemo, useState } from "react";
import { isPhone, isEmail } from "../lib/validators";
import { submitLead } from "../lib/api";

export default function Form({
  defaultModel = "EI13_2024",
  campaign = "Popup T10/2025",
}) {
  const [form, setForm] = useState({
    lastName: "",
    phone: "",
    email: "",
    consent_data_tnc: "OPT_OUT", // hidden thực tế gửi
    consent_data_tnc_shadow: false, // checkbox hiển thị
    title: "Footer - Popup Website lead Nhận tư vấn",
    description: "Footer - Popup Website lead Nhận tư vấn",
    targetOwner: "VinFast TeleSales",
    campaign,
    model: defaultModel,
    lead_source: "Đăng ký tư vấn",
    utmParams: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [note, setNote] = useState("");

  // Lấy UTM từ URL 1 lần
  const utmFromURL = useMemo(() => window.location.search.slice(1), []);
  useMemo(() => {
    if (utmFromURL) setForm((s) => ({ ...s, utmParams: utmFromURL }));
  }, [utmFromURL]);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
    if (name === "consent_data_tnc_shadow") {
      setForm((s) => ({
        ...s,
        consent_data_tnc: checked ? "OPT_IN" : "OPT_OUT",
      }));
    }
  };

  const valid =
    form.lastName.trim().length >= 2 &&
    isPhone(form.phone) &&
    isEmail(form.email) &&
    form.consent_data_tnc_shadow;

  const submit = async (e) => {
    e.preventDefault();
    setNote("");
    if (!valid) {
      setNote("Vui lòng điền đủ & hợp lệ các trường bắt buộc.");
      return;
    }
    try {
      setSubmitting(true);
      const payload = {
        title: form.title,
        description: form.description,
        targetOwner: form.targetOwner,
        campaign: form.campaign,
        model: form.model,
        utmParams: form.utmParams,
        lead_source: form.lead_source,

        lastName: form.lastName,
        phone: form.phone,
        email: form.email,

        consent_source: "LeadForm",
        consent_form_key: "null",
        consent_identifier: "",
        consent_data_tnc: form.consent_data_tnc,
      };

      await submitLead(payload);
      // Nếu endpoint có thankpage riêng, có thể redirect:
      // window.location.href = "/vn_vi/oto-dien-vinfast/thank-you-page-lead-oto.html";
      setNote("Gửi thành công! Chúng tôi sẽ liên hệ sớm.");
      setForm((s) => ({
        ...s,
        lastName: "",
        phone: "",
        email: "",
        consent_data_tnc_shadow: false,
        consent_data_tnc: "OPT_OUT",
      }));
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
            Đăng ký ngay hôm nay để nhận thông tin chính thức và tư vấn từ
            VinFast
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
              className="w-full h-12 px-4 rounded-xl bg-white
                  border border-slate-200 shadow-sm
                  outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              name="lastName"
              type="text"
              minLength={2}
              maxLength={80}
              placeholder="Nguyễn Văn A"
              value={form.lastName}
              onChange={onChange}
              required
            />
          </div>

          {/* Điện thoại */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">
              Số điện thoại (*)
            </label>
            <input
              className="w-full h-12 px-4 rounded-xl bg-white
                  border border-slate-200 shadow-sm
                  outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              name="phone"
              type="tel"
              inputMode="numeric"
              pattern="^\+?\d{9,12}$"
              maxLength={12}
              placeholder="09xxxxxxxx hoặc +849xxxxxxxx"
              value={form.phone}
              onChange={onChange}
              required
            />
            {/* <p className="text-xs text-slate-500 mt-1">
              9–12 số, có thể có dấu + ở đầu.
            </p> */}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Email (*)</label>
            <input
              className="w-full h-12 px-4 rounded-xl bg-white
                  border border-slate-200 shadow-sm
                  outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              name="email"
              type="email"
              maxLength={40}
              placeholder="ten@gmail.com"
              value={form.email}
              onChange={onChange}
              required
            />
          </div>

          {/* Consent */}
          <div className="mb-3">
            <label className="flex items-start gap-3 text-sm">
              <input
                className="mt-1 w-4 h-4"
                type="checkbox"
                name="consent_data_tnc_shadow"
                checked={form.consent_data_tnc_shadow}
                onChange={onChange}
              />
              <span>
                Tôi đồng ý cho phép VinFast xử lý dữ liệu cá nhân theo{" "}
                <a
                  className="text-sky-600 underline"
                  href="https://vinfastauto.com/vn_vi/privacy-policy"
                  target="_blank"
                >
                  Chính sách Bảo vệ Dữ liệu cá nhân
                </a>
                .
              </span>
            </label>
          </div>

          {/* Thông báo */}
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
