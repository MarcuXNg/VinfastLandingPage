// src/data/cars/details/vf9.js

import vf9_red from "../assets/vf9/vf9_red.webp";
import vf9_black from "../assets/vf9/vf9_black.webp";
import vf9_white from "../assets/vf9/vf9_white.webp";
import ecvan_green from "../assets/ecvan/ecvan_green.webp";

import hero1 from "../assets/ecvan/ecvan_4.webp";

export default {
  id: "ecvan",
  name: "VinFast ECVan",
  title: "VinFast ECVan",
  product_img: hero1,
  price: "273.600.000 đồng",

  specs: {
    "Số chỗ ngồi": "2",
    "Động cơ": "1 motor",
    "Công suất tối đa (kW)": "30",
    "Mô-men xoắn cực đại (Nm)": "110 Nm",
    "Quãng đường 1 lần sạc (km)": "150",
    "Thời gian sạc nhanh (10%–70%)": "42 phút",
    "Dẫn động": "RWD/Cầu sau",
    "Kích thước (D x R x C) (mm)": " 3.767 x 1.680 x 1.790mm",
    "Khoảng sáng gầm xe (mm)": "165",
    "Dung lượng pin (kWh)": "17",
    "Dung tích khoang hành lý (m3)": "2,6",
  },

  // ===== Swatches màu (đổi ảnh khi chọn) =====
  colors: [
    {
      id: "urban-mint",
      name: "Xanh lá",
      hex: "#0D3311",
      img: ecvan_green,
    },
  ],

  // ====== BÀI VIẾT CHI TIẾT (renderer ContentBlocks sẽ đọc) ======
  sections: [],
};
