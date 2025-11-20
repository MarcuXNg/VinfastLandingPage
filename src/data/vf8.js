// src/data/cars/details/vf8.js

import vf8_red from "../assets/vf8/vf8_red.webp";
import vf8_black from "../assets/vf8/vf8_black.webp";
import vf8_white from "../assets/vf8/vf8_white.webp";

import hero1 from "../assets/vf8/vf8_4.jpg";

import car1 from "../assets/vf8/vf8_details_1.webp";
import car2 from "../assets/vf8/vf8_details_2.webp";
import car3 from "../assets/vf8/vf8_details_3.webp";
import car4 from "../assets/vf8/vf8_details_4.webp";
import car5 from "../assets/vf8/vf8_details_5.webp";
import car6 from "../assets/vf8/vf8_details_6.webp";
import car7 from "../assets/vf8/vf8_details_7.webp";
import car8 from "../assets/vf8/vf8_details_8.webp";
import car9 from "../assets/vf8/vf8_details_9.webp";
import car10 from "../assets/vf8/vf8_details_10.webp";
import car11 from "../assets/vf8/vf8_details_11.webp";
import car12 from "../assets/vf8/vf8_details_12.webp";
import car13 from "../assets/vf8/vf8_details_13.webp";
import car14 from "../assets/vf8/vf8_details_14.webp";
import car15 from "../assets/vf8/vf8_details_15.webp";
import car16 from "../assets/vf8/vf8_details_16.webp";
import car17 from "../assets/vf8/vf8_details_17.webp";
import car18 from "../assets/vf8/vf8_details_18.webp";
import car19 from "../assets/vf8/vf8_details_19.webp";
import car20 from "../assets/vf8/vf8_details_20.webp";
import car21 from "../assets/vf8/vf8_details_21.webp";
import car22 from "../assets/vf8/vf8_details_22.webp";
import car23 from "../assets/vf8/vf8_details_23.webp";
import car24 from "../assets/vf8/vf8_details_24.webp";
import car25 from "../assets/vf8/vf8_details_25.webp";
import car26 from "../assets/vf8/vf8_details_26.webp";
import car27 from "../assets/vf8/vf8_details_27.webp";
import car28 from "../assets/vf8/vf8_details_28.webp";

export default {
  id: "vf8",
  name: "VinFast VF8",
  title: "VF8",
  product_img: hero1,
  price: "978.240.000 đồng",
  priceTabs: [
    {
      id: "eco",
      label: "VF8 Eco",

      price: "978.240.000 đồng",
    },
    {
      id: "plus",
      label: "VF8 Plus",
      price: "1.151.040.000 đồng",
    },
  ],

  specs: {
    "Số chỗ ngồi": "5",
    "Động cơ": "Motor x 2 (loại 150 kW)",
    "Công suất tối đa (kW)": "260",
    "Mô-men xoắn cực đại (Nm)": "500",
    "Quãng đường 1 lần sạc (km)": "420 (Chuẩn WLTP)",
    "Thời gian sạc nhanh (10%–70%)": "24 phút",
    "Dẫn động": "AWD/2 cầu toàn thời gian",
    "Kích thước (D x R x C) (mm)": "4.750 x 1.934 x 1.667",
    "Khoảng sáng gầm xe (mm)": "179",
    "Dung lượng pin (kWh)": "82",
  },
  specsByTrim: {
    eco: {
      "Số chỗ ngồi": "5",
      "Động cơ": "Motor x 2 (loại 150 kW)",
      "Công suất tối đa (kW)": "260",
      "Mô-men xoắn cực đại (Nm)": "500",
      "Quãng đường 1 lần sạc (km)": "420 (Chuẩn WLTP)",
      "Thời gian sạc nhanh (10%–70%)": "24 phút",
      "Dẫn động": "AWD/2 cầu toàn thời gian",
      "Kích thước (D x R x C) (mm)": "4.750 x 1.934 x 1.667",
      "Khoảng sáng gầm xe (mm)": "179",
      "Dung lượng pin (kWh)": "82",
    },
    plus: {
      "Số chỗ ngồi": "5",
      "Động cơ": "Motor x 2 (loại 150 kW)",
      "Công suất tối đa (kW)": "300",
      "Mô-men xoắn cực đại (Nm)": "620",
      "Quãng đường 1 lần sạc (km)": "400 (Chuẩn WLTP)",
      "Thời gian sạc nhanh (10%–70%)": "24 phút",
      "Dẫn động": "AWD/2 cầu toàn thời gian",
      "Kích thước (D x R x C) (mm)": "4.750 x 1.934 x 1.667",
      "Khoảng sáng gầm xe (mm)": "179",
      "Dung lượng pin (kWh)": "82",
    },
  },
  afterSpecsImage: car1,

  // ===== Swatches màu (đổi ảnh khi chọn) =====
  colors: [
    {
      id: "black",
      name: "đen",
      hex: "#000000",
      img: vf8_black,
    },
    {
      id: "red",
      name: "Đỏ",
      hex: "#FF0000",
      img: vf8_red,
    },
    {
      id: "infinity-blanc",
      name: "Trắng – Infinity Blanc",
      hex: "#F4F5F7",
      img: vf8_white,
    },
  ],

  // ====== BÀI VIẾT CHI TIẾT (renderer ContentBlocks sẽ đọc) ======
  sections: [
    {
      type: "heading",
      level: 3,
      text: "Giới thiệu VinFast VF8",
    },
    {
      type: "paragraph",
      text: "Mẫu ô tô điện thông minh VF 8 sở hữu tỉ lệ thiết kế hiện đại tạo nên bởi triết lý “Cân bằng động”. Những khối cong mềm mại được chấm phá bởi các đường thẳng sắc nét tạo nên ấn tượng mạnh mẽ, mang đầy hơi thở của tương lai. Các đường nét cân đối với nhau tạo nên sự hài hòa – sự hài hòa với chính chiếc xe và môi trường xung quanh.",
    },
    {
      type: "metrics",
      items: [
        { value: "431 km (NEDC)", label: "Quãng đường/1 lần sạc" },
        { value: "5.8 giây", label: "Tăng tốc từ 0 – 100km/ h" },
        { value: "260kW - 349HP", label: "Công suất tối đa" },
      ],
    },
    { type: "gallery2", images: [car2, car3] },

    {
      type: "heading",
      level: 3,
      text: "Màu sắc VinFast VF8",
    },
    {
      type: "paragraph",
      text: "Như vậy, dòng sản phẩm VF 8 Series mới đem tới gần 10 chọn lựa màu ngoại thất phối 2 màu độc quyền của Vinfast. Những thay đổi này góp phần khẳng định đẳng cấp của chủ sở hữu, tiêu biểu các màu sắc nổi trội dưới đây:",
    },
    {
      type: "imageCardCarousel",
      perPage: 2, // 2 card mỗi slide
      cards: [
        {
          img: car4,
          title: "VF 8 màu bạc – Desat Silver",
          text: "Desat Silver (màu bạc) là màu sắc tượng trưng cho sự tinh tế, vận may và sự giàu có. Nhờ ưu điểm này, xe VF 8 màu bạc - Desat Silver mang lại sang trọng, đẳng cấp cho người sở hữu. Đây cũng là lý do giúp màu xe này được nhiều doanh nhân lựa chọn, nhất là người mệnh Thủy và Kim. ",
        },
        {
          img: car5,
          title: "VF 8 màu xanh – VinFast Blue",
          text: "VinFast Blue là một màu xanh độc đáo của VF 8 mới được ra mắt. Màu sắc này tượng trưng cho sự tươi mới, lạc quan và nổi bật. Đây là màu xe phù hợp với nhiều đối tượng, VF 8 màu xanh đặc biệt thích hợp với người mệnh Thủy và Mộc hoặc những ai luôn yêu thích những điều mới mẻ, thú vị.",
        },
        {
          img: car6,
          title: "VF 8 màu xám – Neptune Grey",
          text: "Neptune là một vị thủy thần trong thần thoại La Mã. Chính vì vậy, màu Neptune Grey (màu xám) đại diện cho sự tinh tế nhưng cũng đầy quyền lực. VinFast VF 8 màu xám - Neptune Grey lọt vào mắt xanh của những khách hàng hướng đến sự trưởng thành. Màu xe này đặc biệt thích hợp với người mệnh Kim và Thủy.",
        },
        {
          img: car7,
          title: "VF 8 màu trắng – Brahminy White",
          text: "Brahminy White (màu trắng) là màu sắc đại diện cho sự thông tuệ, tốt lành và nhiệt tình. Hình ảnh xe VF 8 màu trắng - Brahminy White toát lên khí chất mạnh mẽ, thời thượng và có chiều sâu so với sắc trắng thông thường. VF 8 màu trắng này thích hợp với những người mệnh Thổ, Thủy và Kim. ",
        },
        {
          img: car8,
          title: "VF 8 màu đỏ – Crimson Red",
          text: "Hình ảnh xe VF 8 Crimson Red (màu đỏ) gây ấn tượng mạnh bởi sự thu hút và nổi bật. Đó là sắc màu hội tụ của sự huyền bí, cá tính đầy quyền lực. Với kỹ thuật sơn tiên tiến, VinFast VF 8 màu đỏ - Crimson Red có vẻ đẹp sinh động ở mọi góc nhìn.",
        },
        {
          img: car9,
          title: "VF 8 màu đen – Jet Black",
          text: "Jet Black còn được gọi là màu đen tuyền. Màu sắc này tạo cảm giác bí ẩn, sang trọng, tạo sự hòa hợp với các đường nét uốn lượn tinh tế ở thân xe. Vì vậy, VF 8 là sự lựa chọn hàng đầu cho những người thích sự đơn giản, lịch lãm. VF 8 màu đen phù hợp với người mệnh Thủy và Mộc. ",
        },
        {
          img: car10,
          title: "VF 8 màu cam – Sunset Orange",
          text: `Sunset Orange (màu cam) là màu sắc "rạng ngời nhưng không chói lóa", đầy tươi mới. Đặc biệt, màu sơn này có thể linh hoạt biến hóa về sắc độ màu theo tần số ánh sáng khác nhau mang đến những sự thú vị, bất ngờ.`,
        },
      ],
    },

    {
      type: "heading",
      level: 3,
      text: "VinFast VF 8 Lux Hỏa Long Độc Bản: Mạ vàng, giới hạn 888 chiếc",
    },
    {
      type: "paragraph",
      text: "VinFast VF 8 Lux Hỏa Long Độc Bản được phát triển dựa trên thiết kế của VF 8 Lux Plus, phiên bản đặc biệt này được trang bị các chi tiết mạ vàng như logo trước/sau, nẹp đèn pha, ốp cửa trước/sau, vành la-zăng và cản trước/sau. Bên cạnh đó là số thứ tự xuất xưởng được khắc trên thân xe.",
    },
    { type: "image", src: car11 },
    {
      type: "paragraph",
      text: "VinFast VF 8 Lux tích hợp trợ lý ảo AI, mô-tơ điện 350 mã lực (VF 8 Lux) và 402 mã lực (VF 8 Lux Plus), tầm vận hành lần lượt 471 km và 457 km. VF 8 Lux có 11 túi khí, cảnh báo điểm mù, áp suất lốp. VF 8 Lux Plus có thêm gói an toàn ADAS cấp độ 2 với các tính năng hỗ trợ lái và phanh.",
    },
    { type: "gallery2", images: [car12, car13] },

    {
      type: "heading",
      level: 3,
      text: "Ngoại thất VinFast VF8",
    },
    {
      type: "paragraph",
      text: "VinFast VF 8 là SUV lai Coupe với cabin rộng, gầm cao, nóc thấp vuốt về đuôi. Kết hợp thiết kế Ý sang trọng và nét truyền thống Việt, sử dụng ngôn ngữ thiết kế “Cân bằng động” để đạt tiêu chuẩn an toàn cao.",
    },
    { type: "image", src: car14 },
    {
      type: "paragraph",
      text: "Nắp capo VF 8 có đường gân dập nổi, không có lưới tản nhiệt nhận diện thương hiệu, thay vào đó là dải đèn chiếu sáng từ logo chữ “V”, biểu tượng của Việt Nam, Vingroup và VinFast.",
    },
    { type: "gallery2", images: [car15, car16] },
    {
      type: "paragraph",
      text: "Phần đuôi xe VF 8 tối ưu khí động học, cốp sau mở điện (bản Plus), dải LED đèn hậu trải dài. Hệ thống chiếu sáng LED chất lượng giúp xe nổi bật ngày đêm.",
    },
    { type: "image", src: car17 },
    {
      type: "paragraph",
      text: "VinFast VF 8 có kích thước 4.750mm x 1.900mm x 1.660mm, thiết kế cân đối, đường gân dập nổi tạo sự cứng cáp. Thanh giá nóc, ốp bảo vệ thân xe màu đen, mâm 21 inch 5 chấu, gương chiếu hậu chỉnh điện, camera 360. Nẹp mạ crom trên kính và ốp cửa tăng sự sang trọng.",
    },
    { type: "gallery2", images: [car18, car19] },

    {
      type: "heading",
      level: 3,
      text: "Nội thất VinFast VF8",
    },
    {
      type: "paragraph",
      text: "VinFast VF 8 có 5 chỗ ngồi, ghế lái chỉnh điện 8 hướng (bản Eco) và 12 hướng (bản Plus), cả ghế lái và ghế phụ đều có hệ thống sưởi đa năng.",
    },
    { type: "image", src: car20 },
    {
      type: "paragraph",
      text: "Khoang lái VF 8 có vô lăng và bảng taplo hiện đại, cụm đồng hồ thông tin thay bằng màn hình HUD, tích hợp màn hình giải trí 15,6 inch, tối giản nút bấm vật lý để dễ dàng theo dõi và điều chỉnh thông tin hành trình.",
    },
    { type: "gallery2", images: [car21, car22] },
    {
      type: "paragraph",
      text: "Bên cạnh đó, khách hàng có thể tự chọn màu sắc nội thất phù hợp với cá tính riêng như màu đen (bản Eco) và 1 trong 4 màu Saddle Brown (nâu); Cotton Beige (be); Navy Blue (xanh navy); Black (đen) ở bản Plus.",
    },
    { type: "image", src: car23 },
    {
      type: "paragraph",
      text: "VinFast VF 8 được thiết kế bởi Pininfarina, tối ưu động học, giảm tiêu thụ năng lượng và giữ vẻ đẹp thể thao, năng động. Xe có động cơ mạnh mẽ, công suất cao, cấu tạo chắc chắn, đảm bảo trải nghiệm tốt cho người sử dụng.",
    },
    { type: "gallery2", images: [car24, car25] },
    {
      type: "paragraph",
      text: "Nội thất VF 8 tinh giản, cụm đồng hồ thay bằng màn hình HUD hiển thị tốc độ và dung lượng pin. Xe có 5 chỗ ngồi, 2 hàng ghế thoải mái, không gian rộng rãi, vô lăng tích hợp nhiều chức năng tiện nghi.",
    },
    { type: "image", src: car26 },

    {
      type: "heading",
      level: 3,
      text: "Tiện nghi VinFast VF8",
    },
    {
      type: "paragraph",
      text: "Nội thất VF 8 tinh giản, 5 chỗ ngồi, 2 hàng ghế thoải mái. Cụm đồng hồ thay bằng màn hình HUD hiển thị tốc độ, dung lượng pin. Màn hình giải trí 15,6 inch, kết nối điện thoại, USB loại C. Ghế sưởi (Eco) và sưởi – thông gió (Plus). Xe có chế độ lọc không khí Combi 1.0. Hệ thống âm thanh 8–10 loa mang lại trải nghiệm sống động.",
    },
    { type: "gallery2", images: [car27, car28] },

    {
      type: "specTable",
      rows: [
        {
          label: "Vô lăng",
          value:
            "Bọc da, tích hợp các phím điều khiển âm thanh, đàm thoại rảnh tay và các chức năng khác.",
        },
        {
          label: "Đồng hồ",
          value:
            "Hiển thị các thông số vận hành và thông tin cần thiết một cách rõ ràng và trực quan.",
        },
        {
          label: "Cửa sổ trời",
          value: "Tạo không gian thoáng đãng và ánh sáng tự nhiên cho cabin.",
        },
        {
          label: "Khởi động",
          value: "Khởi động xe bằng nút bấm, kết hợp với chìa khóa thông minh.",
        },
        {
          label: "Kết nối",
          value:
            "Nhiều cổng USB, bao gồm cả loại C, hỗ trợ sạc nhanh và kết nối đa dạng.",
        },
        {
          label: "Hộc chứa đồ",
          value:
            "Nhiều ngăn chứa đồ, bao gồm hộc để cốc, ngăn đựng găng tay và khay để điện thoại.",
        },
        {
          label: "Điều khiển",
          value:
            "Tích hợp trợ lý ảo, hỗ trợ điều khiển các chức năng của xe bằng giọng nói.",
        },
        {
          label: "GPS",
          value:
            "Hỗ trợ dẫn đường với bản đồ chi tiết, cập nhật giao thông thời gian thực.",
        },
        {
          label: "Chế độ lái",
          value:
            "Nhiều chế độ lái (Eco, Normal, Sport) tùy chỉnh theo phong cách lái và điều kiện đường xá.",
        },
        {
          label: "Áp suất lốp",
          value:
            "Cảnh báo khi áp suất lốp không đạt tiêu chuẩn, đảm bảo an toàn khi lái xe.",
        },
      ],
    },
  ],
};
