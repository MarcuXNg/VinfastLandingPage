// src/shared/lib/api.js
const RAW_BASE = import.meta.env.VITE_API_BASE ?? "";
// Đừng để "/" -> thành "" nữa; chuẩn hoá base rõ ràng.
const API_BASE = RAW_BASE
  ? RAW_BASE.replace(/\/+$/, "") // cắt "/" cuối
  : ""; // nếu thật sự muốn relative

export async function api(
  path,
  { method = "GET", body, form, headers, timeoutMs = 15000 } = {}
) {
  // console.log(API_BASE);
  const url = `${API_BASE}${path.startsWith("/") ? path : `/${path}`}`;
  const opts = { method, credentials: "include", headers: headers || {} };

  // --- Body & headers
  // --- Body & headers
  if (form) {
    // FormData: KHÔNG tự set Content-Type
    opts.body = form;
  } else if (body !== undefined) {
    // Chỉ set JSON khi có body thật sự
    if (!opts.headers["Content-Type"] && !opts.headers["content-type"]) {
      opts.headers["Content-Type"] = "application/json";
    }
    opts.body = JSON.stringify(body);
  }

  // --- Timeout với AbortController
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  opts.signal = ac.signal;

  // Log gọn (bật tạm thời khi debug)
  // console.log("[API] =>", method, url, body ?? "(no body)");

  let res, text;
  try {
    res = await fetch(url, opts);
    text = await res.text();
  } catch (err) {
    clearTimeout(t);
    // Network/timeout → ném lỗi rõ ràng
    if (err?.name === "AbortError") {
      throw new Error("Request timeout");
    }
    throw new Error(`Network error: ${err?.message || err}`);
  }
  clearTimeout(t);

  // console.log("[API] <=", res.status, text);

  // Thành công nhưng không body (204/205/empty) → trả null
  if (res.ok) {
    if (!text) return null;
    try {
      return JSON.parse(text);
    } catch {
      // server trả text/HTML nhưng 2xx → trả raw text để FE tự dùng
      return text;
    }
  }

  // Lỗi: cố parse JSON để lấy message; fallback status text
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    // server có thể trả HTML stack-trace → bỏ qua
  }
  const message =
    (data && (data.error || data.message)) || `${res.status} ${res.statusText}`;
  throw new Error(message);
}

// export async function getPromotions() {
//   return api("/promotions", { method: "GET" });
// }

// export async function createPromotions(id, payload) {
//   return api(`/promotions/${id}`, { method: "POST", body: payload });
// }

// export const updatePromotion = (id, payload) =>
//   api(`/promotions/${id}`, { method: "PUT", body: payload });

// export const deletePromotion = (id) =>
//   api(`/promotions/${id}`, { method: "DELETE" });

// helper cho login
export const login = (email, password) =>
  api("/auth/login", { method: "POST", body: { email, password } });
