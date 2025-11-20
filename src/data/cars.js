import vf3Icon from "../assets/vf3/ModelVF3.svg";
import vf5Icon from "../assets/vf5/ModelVF5.svg";
import vf6Icon from "../assets/vf6/ModelVF6.svg";
import vf7Icon from "../assets/vf7/ModelVF7.svg";
import vf8Icon from "../assets/vf8/ModelVF8.svg";
import vf9Icon from "../assets/vf9/ModelVF9.svg";
import ecvanIcon from "../assets/ecvan/ModelECVAN.svg";
import limoIcon from "../assets/limogreen/ModelLimoGreen.png";
import vf6Eco from "../assets/vf6/vf6_1.jpg";
import vf6Plus from "../assets/vf6//vf6_2.jpg";
import vf7Eco from "../assets/vf7/vf7_1.jpg";
import vf7Plus from "../assets/vf7/vf7_2.jpg";
import vf8Eco from "../assets/vf8/vf8_1.jpg";
import vf8Plus from "../assets/vf8/vf8_2.jpg";
import vf9Eco from "../assets/vf9/vf9_1.jpg";
import vf9Plus from "../assets/vf9/vf9_2.jpg";

export const cars = [
  {
    id: "vf3",
    name: "VinFast VF 3",
    segment: "vf",
    segment_label: "Dòng xe VinFast 3",
    price: "287.040.000 đồng",
    img: vf3Icon,
    specs: {
      "Số chỗ ngồi": "4",
      "Động cơ": "01 Motor điện",
      "Công suất tối đa (kW)": "30",
      "Quãng đường chạy một lần sạc đầy (km)": "215",
    },
  },
  {
    id: "vf5",
    name: "VinFast VF 5",
    segment: "vf",
    segment_label: "Dòng xe VinFast 5",
    price: "507.840.000 đồng",
    img: vf5Icon,
    specs: {
      "Số chỗ ngồi": "5",
      "Động cơ": "01 Motor điện",
      "Công suất tối đa (kW)": "70",
      "Quãng đường chạy một lần sạc đầy (km)": "326",
    },
  },
  {
    id: "vf6",
    name: "VinFast VF 6",
    segment: "vf",
    segment_label: "Dòng xe VinFast 6",
    price: "661.440.000 đồng",
    img: vf6Icon,
    specs: {
      "Số chỗ ngồi": "5",
      "Động cơ": "01 Motor điện",
      "Công suất tối đa (kW)": "130",
      "Quãng đường chạy một lần sạc đầy (km)": "480",
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
  {
    id: "vf7",
    name: "VinFast VF 7",
    segment: "vf",
    segment_label: "Dòng xe VinFast 7",
    price: "767.040.000 đồng",
    img: vf7Icon,
    specs: {
      "Số chỗ ngồi": "5",
      "Động cơ": "01 Motor điện",
      "Công suất tối đa (kW)": "130",
      "Quãng đường 1 lần sạc (km)": "498",
    },
    variants: {
      eco: {
        label: "VinFast Eco",
        price: "767.040.000 đồng",
        product_img: vf7Eco,
        specs: {
          "Số chỗ ngồi": "5",
          "Động cơ": "01 Motor điện",
          "Công suất tối đa (kW)": "130",
          "Quãng đường 1 lần sạc (km)": "498",
        },
      },
      plus: {
        label: "VinFast Plus",
        price: "911.040.000 đồng",
        product_img: vf7Plus,
        specs: {
          "Số chỗ ngồi": "5",
          "Động cơ": "Dual Motor",
          "Công suất tối đa (kW)": "150",
          "Quãng đường 1 lần sạc (km)": "496",
        },
      },
    },
  },
  {
    id: "vf8",
    name: "VinFast VF 8",
    segment: "vf",
    segment_label: "Dòng xe VinFast 8",
    price: "978.240.000 đồng",
    img: vf8Icon,
    specs: {
      "Số chỗ ngồi": "5",
      "Động cơ": "Motor x 2 (loại 150 kW)",
      "Công suất tối đa (kW)": "260",
      "Quãng đường 1 lần sạc (km)": "420 (Chuẩn WLTP)",
    },
    variants: {
      eco: {
        label: "VinFast Eco",
        price: "978.240.000 đồng",
        product_img: vf8Eco,
        specs: {
          "Số chỗ ngồi": "5",
          "Động cơ": "Motor x 2 (loại 150 kW)",
          "Công suất tối đa (kW)": "260",
          "Quãng đường 1 lần sạc (km)": "420 (Chuẩn WLTP)",
        },
      },
      plus: {
        label: "VinFast Plus",
        price: "1.151.040.000 đồng",
        product_img: vf8Plus,
        specs: {
          "Số chỗ ngồi": "5",
          "Động cơ": "Motor x 2 (loại 150 kW)",
          "Công suất tối đa (kW)": "300",
          "Quãng đường 1 lần sạc (km)": "400 (Chuẩn WLTP)",
        },
      },
    },
  },
  {
    id: "vf9",
    name: "VinFast VF 9",
    segment: "vf",
    segment_label: "Dòng xe VinFast 9",
    price: "1.439.040.000 đồng",
    img: vf9Icon,
    specs: {
      "Số chỗ ngồi": "7",
      "Động cơ": "2 motor 150 kW",
      "Công suất tối đa (kW)": "402/300",
      "Quãng đường 1 lần sạc (km)": "626",
    },
    variants: {
      eco: {
        label: "VinFast Eco",
        price: "1.439.040.000 đồng",
        product_img: vf9Eco,
        specs: {
          "Số chỗ ngồi": "7",
          "Động cơ": "2 motor 150 kW",
          "Công suất tối đa (kW)": "402/300",
          "Quãng đường 1 lần sạc (km)": "626",
        },
      },
      plus: {
        label: "VinFast Plus",
        price: "1.631.040.000 đồng",
        product_img: vf9Plus,
        specs: {
          "Số chỗ ngồi": "7",
          "Động cơ": "2 motor 150 kW",
          "Công suất tối đa (kW)": "402/300",
          "Quãng đường 1 lần sạc (km)": "602",
        },
      },
    },
  },
  // nhóm kinh doanh/green
  {
    id: "ecvan",
    name: "VinFast ECVan",
    segment: "ecvan",
    segment_label: "Dòng xe VinFast ECVan",
    price: "273.600.000 đồng",
    img: ecvanIcon,
    specs: {
      "Số chỗ ngồi": "2",
      "Động cơ": "1 motor",
      "Mô-men xoắn cực đại (Nm)": "110 Nm",
      "Quãng đường 1 lần sạc (km)": "150",
    },
  },
  {
    id: "limogreen",
    name: "VinFast LimoGreen",
    segment: "limogreen",
    segment_label: "Dòng xe LimoGreen",
    price: "719.040.000 đồng",
    img: limoIcon,
    specs: {
      "Số chỗ ngồi": "7",
      "Động cơ": "01 Motor điện 150W",
      "Công suất tối đa (kW)": "150",
      "Quãng đường chạy một lần sạc đầy (km)": "450",
    },
  },
];

// Tiện ích tra cứu nhanh ở nơi cần map theo id (tuỳ dùng)
export const carsById = Object.fromEntries(cars.map((c) => [c.id, c]));

/**
 * Gợi ý: nếu muốn đảm bảo type khi code JS thuần, thêm JSDoc:
 * @typedef {{id:string,name:string,segment:'vf'|'green',price?:string,img?:string}} CarBase
 * @type {CarBase[]}
 */
