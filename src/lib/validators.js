export const isPhone = (v) => /^\+?\d{9,12}$/.test((v || "").trim());
export const isEmail = (v) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((v || "").trim());
