// cars.js
import vf6Eco from "../assets/vf6/vf6_1.jpg";
import vf6Plus from "../assets/vf6//vf6_2.jpg";
import vf7Eco from "../assets/vf7/vf7_1.jpg";
import vf7Plus from "../assets/vf7/vf7_2.jpg";
import vf8Eco from "../assets/vf8/vf8_1.jpg";
import vf8Plus from "../assets/vf8/vf8_2.jpg";
import vf9Eco from "../assets/vf9/vf9_1.jpg";
import vf9Plus from "../assets/vf9/vf9_2.jpg";

// (các ảnh “gốc” nếu cũng để assets)
import vf6Default from "../assets/vf6/ModelVF6.svg";
import vf7Default from "../assets/vf7/ModelVF7.svg";
import vf8Default from "../assets/vf8/ModelVF8.svg";
import vf9Default from "../assets/vf9/ModelVF9.svg";

export const cars = [
  {
    id: "vf3",
    name: "VinFast VF 3",
    blurb:
      "Mẫu mini SUV điện hoàn toàn mới, nhỏ gọn cho đô thị, thiết kế trẻ trung và cá tính.",
    price: "287.040.000 đồng",
    img: "/ModelVF3.svg",
    product_img: "/vf3.jpg",
    title: "VF 3 – Nhỏ gọn, linh hoạt, năng lượng xanh",
    desc: "Xe điện đô thị cỡ nhỏ, thiết kế trẻ trung, di chuyển dễ dàng trong phố.",
    specs: {
      "Số chỗ ngồi": "5",
      "Động cơ": "01 Motor điện",
      "Công suất tối đa (kW)": "30",
      "Mô men xoắn cực đại (Nm)": "110",
      "Tăng tốc": "5,3s (0–50 km/h)",
      "Quãng đường chạy một lần sạc đầy (km)": "215",
      "Thời gian nạp pin nhanh nhất": "36 phút (10%–70%)",
      "Dẫn động": "RWD / Cầu sau",
      "Kích thước (D x R x C) (mm)": "3.190 x 1.679 x 1.622",
      "Khoảng sáng gầm xe (mm)": "191",
      "Dung lượng pin (kWh)": "18,64",
    },
  },
  {
    id: "vf5",
    name: "VinFast VF 5",
    blurb:
      "Xe điện phân khúc A với thiết kế hiện đại, phong cách năng động, hướng tới người trẻ.",
    price: "507.840.000 đồng",
    img: "/ModelVF5.svg",
    product_img: "/vf5.jpg",
    title: "VF 5 – Phong cách và tiện nghi",
    desc: "Mẫu xe điện phân khúc A hiện đại, năng động, dành cho giới trẻ.",
    specs: {
      "Số chỗ ngồi": "5",
      "Động cơ": "01 Motor điện",
      "Công suất tối đa (kW)": "70",
      "Mô men xoắn cực đại (Nm)": "135",
      "Tăng tốc": "7,2s (0–100 km/h)",
      "Quãng đường chạy một lần sạc đầy (km)": "300",
      "Thời gian nạp pin nhanh nhất": "35 phút (10%–70%)",
      "Dẫn động": "FWD / Cầu trước",
      "Kích thước (D x R x C) (mm)": "3.967 x 1.723 x 1.578",
      "Khoảng sáng gầm xe (mm)": "168",
      "Dung lượng pin (kWh)": "37,23",
    },
  },
  {
    id: "vf6",
    name: "VinFast VF 6",
    blurb:
      "SUV điện cỡ B, thiết kế bởi Torino Design, phù hợp di chuyển linh hoạt trong đô thị.",
    price: "661.440.000 đồng", // fallback khi không chọn biến thể
    img: vf6Default,
    product_img: "/vf6.jpg",
    title: "VF 6 – SUV điện tầm trung, mạnh mẽ và thông minh",
    desc: "Công nghệ tiên tiến, thiết kế tinh tế, tối ưu cho đô thị hiện đại.",
    specs: {
      "Số chỗ ngồi": "5",
      "Động cơ": "01 Motor điện",
      "Công suất tối đa (kW)": "100",
      "Mô men xoắn cực đại (Nm)": "135",
      "Tăng tốc": "6,5s (0–100 km/h)",
      "Quãng đường chạy một lần sạc đầy (km)": "381",
      "Thời gian nạp pin nhanh nhất": "31 phút (10%–70%)",
      "Dẫn động": "FWD / Cầu trước",
      "Kích thước (D x R x C) (mm)": "4.238 x 1.820 x 1.594",
      "Khoảng sáng gầm xe (mm)": "170",
      "Dung lượng pin (kWh)": "59,6",
    },
    variants: {
      eco: {
        label: "VinFast Eco",
        price: "661.440.000 đồng",
        product_img: vf6Eco,
        specs: {
          "Công suất tối đa (kW)": "100",
          "Mô men xoắn cực đại (Nm)": "135",
          "Dẫn động": "FWD / Cầu trước",
        },
      },
      plus: {
        label: "VinFast Plus",
        price: "719.040.000 đồng",
        product_img: vf6Plus,
        specs: {
          "Công suất tối đa (kW)": "120",
          "Mô men xoắn cực đại (Nm)": "180",
          "Dẫn động": "FWD / Cầu trước",
        },
      },
    },
  },

  // VF7
  {
    id: "vf7",
    name: "VinFast VF 7",
    blurb:
      "SUV điện hạng C, phong cách thể thao, nhiều công nghệ hỗ trợ lái thông minh.",
    price: "767.040.000 đồng",
    img: vf7Default,
    product_img: "/vf7.jpg",
    title: "VF 7 – Cá tính, thể thao và đẳng cấp",
    desc: "Trải nghiệm lái phấn khích với thiết kế đậm chất tương lai.",
    specs: {
      "Số chỗ ngồi": "5",
      "Động cơ": "01 Motor điện hoặc Dual Motor (bản Plus)",
      "Công suất tối đa (kW)": "150 – 260",
      "Mô men xoắn cực đại (Nm)": "310 – 500",
      "Tăng tốc": "5,8s (0–100 km/h)",
      "Quãng đường chạy một lần sạc đầy (km)": "450",
      "Thời gian nạp pin nhanh nhất": "33 phút (10%–70%)",
      "Dẫn động": "FWD hoặc AWD",
      "Kích thước (D x R x C) (mm)": "4.545 x 1.890 x 1.635",
      "Khoảng sáng gầm xe (mm)": "190",
      "Dung lượng pin (kWh)": "75,3",
    },
    variants: {
      eco: {
        label: "VinFast Eco",
        price: "767.040.000 đồng",
        product_img: vf7Eco,
        specs: {
          "Động cơ": "01 Motor điện",
          "Dẫn động": "FWD",
          "Công suất tối đa (kW)": "150",
          "Mô men xoắn cực đại (Nm)": "310",
        },
      },
      plus: {
        label: "VinFast Plus",
        price: "911.040.000 đồng",
        product_img: vf7Plus,
        specs: {
          "Động cơ": "Dual Motor",
          "Dẫn động": "AWD",
          "Công suất tối đa (kW)": "260",
          "Mô men xoắn cực đại (Nm)": "500",
        },
      },
    },
  },

  // VF8
  {
    id: "vf8",
    name: "VinFast VF 8",
    blurb:
      "SUV điện cỡ D – 5 chỗ ngồi, trang bị hệ thống hỗ trợ lái nâng cao và công nghệ thông minh VF Connect.",
    price: "978.240.000 đồng",
    img: vf8Default,
    product_img: "/vf8.jpg",
    title: "VF 8 – SUV điện sang trọng và thông minh",
    desc: "Hiệu suất mạnh mẽ, công nghệ tiên tiến, tiện nghi toàn diện.",
    specs: {
      "Số chỗ ngồi": "5",
      "Động cơ": "02 Motor điện",
      "Công suất tối đa (kW)": "260",
      "Mô men xoắn cực đại (Nm)": "500",
      "Tăng tốc": "5,5s (0–100 km/h)",
      "Quãng đường chạy một lần sạc đầy (km)": "471",
      "Thời gian nạp pin nhanh nhất": "31 phút (10%–70%)",
      "Dẫn động": "AWD / Hai cầu toàn thời gian",
      "Kích thước (D x R x C) (mm)": "4.750 x 1.934 x 1.667",
      "Khoảng sáng gầm xe (mm)": "179",
      "Dung lượng pin (kWh)": "82",
    },
    variants: {
      eco: {
        label: "VinFast Eco",
        price: "978.240.000 đồng",
        product_img: vf8Eco,
        specs: {
          "Động cơ": "02 Motor điện",
          "Dẫn động": "AWD",
          "Công suất tối đa (kW)": "260",
          "Mô men xoắn cực đại (Nm)": "500",
        },
      },
      plus: {
        label: vf8Plus,
        price: "1.151.040.000 đồng",
        product_img: "/vf8-plus.jpg",
        specs: {
          // Nếu Plus mạnh hơn/khác option, điền vào đây
        },
      },
    },
  },

  // VF9
  {
    id: "vf9",
    name: "VinFast VF 9",
    blurb:
      "SUV điện cỡ E – 7 chỗ ngồi, flagship của VinFast, nội thất sang trọng và phạm vi hoạt động lớn.",
    price: "1.439.040.000 đồng",
    img: vf9Default,
    product_img: "/vf9.jpg",
    title: "VF 9 – SUV 7 chỗ đẳng cấp quốc tế",
    desc: "Không gian rộng rãi, an toàn vượt trội, phù hợp cho gia đình và doanh nghiệp.",
    specs: {
      "Số chỗ ngồi": "7",
      "Động cơ": "02 Motor điện",
      "Công suất tối đa (kW)": "300",
      "Mô men xoắn cực đại (Nm)": "620",
      "Tăng tốc": "6,5s (0–100 km/h)",
      "Quãng đường chạy một lần sạc đầy (km)": "594",
      "Thời gian nạp pin nhanh nhất": "35 phút (10%–70%)",
      "Dẫn động": "AWD / Hai cầu toàn thời gian",
      "Kích thước (D x R x C) (mm)": "5.118 x 2.254 x 1.696",
      "Khoảng sáng gầm xe (mm)": "204",
      "Dung lượng pin (kWh)": "92",
    },
    variants: {
      eco: {
        label: "VinFast Eco",
        price: "1.439.040.000 đồng",
        product_img: vf9Eco,
        specs: {
          "Động cơ": "02 Motor điện",
          "Dẫn động": "AWD",
        },
      },
      plus: {
        label: "VinFast Plus",
        price: "1.631.040.000 đồng",
        product_img: vf9Plus,
        specs: {
          // Điền option khác biệt nếu có
        },
      },
    },
  },
  {
    id: "ecvan",
    name: "VinFast ECVan",
    blurb:
      "Xe van điện linh hoạt cho chở hàng/kinh doanh, tối ưu chi phí vận hành.",
    price: "273.600.000 đồng",
    img: "/ModelECVAN.svg",
    product_img: "/ecvan.jpg",
    title: "ECVan – Giải pháp vận tải xanh cho doanh nghiệp",
    desc: "Xe van điện tiết kiệm, bền bỉ, phù hợp cho kinh doanh và giao nhận hàng hóa.",
    specs: {
      // Ghi chú: số chỗ giả định. Boss có thể đổi tùy phiên bản.
      "Số chỗ ngồi": "2",
      "Động cơ": "Motor điện",
      "Dẫn động": "FWD",
      "Dung lượng pin (kWh)": "—",
    },
  },
  {
    id: "limogreen",
    name: "VinFast LimoGreen",
    blurb:
      "Dòng xe điện cao cấp cấu hình limousine cho doanh nhân/đón tiếp VIP.",
    price: "719.040.000 đồng",
    img: "/ModelLimoGreen.png",
    product_img: "/limogreen.jpg",
    title: "LimoGreen – Đẳng cấp xe điện limousine",
    desc: "Trải nghiệm sang trọng, tiện nghi cao cấp trên nền tảng xe điện hiện đại.",
    specs: {
      // Ghi chú: số chỗ giả định. Boss có thể đổi 6–7 theo layout.
      "Số chỗ ngồi": "6",
      "Động cơ": "Motor điện",
      "Dẫn động": "AWD",
      "Dung lượng pin (kWh)": "—",
    },
  },
];
