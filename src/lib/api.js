const BASE_URL = ""; // để trống => dùng đường dẫn tuyệt đối từ data-url

export async function submitLead(payload) {
  const url =
    BASE_URL +
    "/on/demandware.store/Sites-app_vinfast_vn-Site/vi_VN/Lead-CreateLDPLeadCar";

  // payload giữ đúng tên field như form gốc
  const body = new URLSearchParams(payload);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body,
    credentials: "include",
  });

  if (!res.ok) throw new Error("Network error");
  return res.json().catch(() => ({})); // tuỳ endpoint trả gì
}
