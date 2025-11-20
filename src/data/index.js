// CHỈ gom các file chi tiết: vf*.js + ecvan.js + limogreen.js
const modules = import.meta.glob("./{vf*,ecvan,limogreen}.js", {
  eager: true,
  import: "default",
});

/** id -> chi tiết xe */
export const carDetailsMap = {};
for (const [path, mod] of Object.entries(modules)) {
  // mod là default export của từng file chi tiết
  if (!mod) continue;
  // ./vf6.js -> vf6
  const inferredId = path.replace("./", "").replace(".js", "");
  const id = (mod.id || inferredId).toLowerCase();
  carDetailsMap[id] = { ...mod, id };
}

export function getCarDetail(id) {
  return carDetailsMap[(id || "").toLowerCase()] || null;
}
