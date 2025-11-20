// src/data/cars/details/vf6.js

import vf6_red from "../assets/vf6/vf6_red.webp";
import vf6_green from "../assets/vf6/vf6_green.webp";
import vf6_white from "../assets/vf6/vf6_white.webp";
import vf6_grey from "../assets/vf6/vf6_grey.webp";
import vf6_blue from "../assets/vf6/vf6_blue.webp";

import hero1 from "../assets/vf6/vf6_2.jpg";

import afterSpecs from "../assets/vf6/vf6_details_1.webp";

import hero2 from "../assets/vf6/vf6_5.jpg";

import comment1 from "../assets/vf6/vf6_details_2.webp";
import comment2 from "../assets/vf6/vf6_details_3.webp";
import comment3 from "../assets/vf6/vf6_details_4.webp";
import comment4 from "../assets/vf6/vf6_details_5.webp";

import boardSize from "../assets/vf6/vf6_details_6.webp";
import boardColors from "../assets/vf6/vf6_details_7.webp";

import pinkModel1 from "../assets/vf6/vf6_details_8.webp";
import pinkModel2 from "../assets/vf6/vf6_details_9.webp";
import greyModel1 from "../assets/vf6/vf6_details_10.webp";
import greyModel2 from "../assets/vf6/vf6_details_11.webp";
import redModel1 from "../assets/vf6/vf6_details_12.webp";
import redModel2 from "../assets/vf6/vf6_details_13.webp";
import greenModel1 from "../assets/vf6/vf6_details_14.webp";
import greenModel2 from "../assets/vf6/vf6_details_15.webp";
import blackModel1 from "../assets/vf6/vf6_details_16.webp";
import blackModel2 from "../assets/vf6/vf6_details_17.webp";

import poster from "../assets/vf6/vf6_details_18.webp";

import car1 from "../assets/vf6/vf6_details_19.webp";
import car2 from "../assets/vf6/vf6_details_20.webp";
import car3 from "../assets/vf6/vf6_details_21.webp";
import car4 from "../assets/vf6/vf6_details_22.webp";
import car5 from "../assets/vf6/vf6_details_22.webp";
import car6 from "../assets/vf6/vf6_details_23.webp";
import car7 from "../assets/vf6/vf6_details_24.webp";

export default {
  id: "vf6",
  name: "VinFast VF6",
  title: "VF6",
  product_img: hero1,
  price: "661.440.000 đồng",
  priceTabs: [
    {
      id: "eco",
      label: "VF6 Eco",

      price: "661.440.000 đồng",
    },
    {
      id: "plus",
      label: "VF6 Plus",
      price: "719.040.000 đồng",
    },
  ],
  // Thông số dùng cho bảng Specs top
  specs: {
    "Số chỗ ngồi": "5",
    "Động cơ": "01 Motor điện",
    "Công suất tối đa (kW)": "100",
    "Mô-men xoắn cực đại (Nm)": "135",
    "Quãng đường 1 lần sạc (km)": "399",
    "Thời gian sạc nhanh (10%–70%)": "25 phút",
    "Dẫn động": "FWD",
    "Kích thước (D x R x C) (mm)": "4.238 x 1.820 x 1.594",
    "Dung lượng pin (kWh)": "59,6",
  },
  specsByTrim: {
    eco: {
      "Số chỗ ngồi": "5",
      "Động cơ": "01 Motor điện",
      "Công suất tối đa (kW)": "100",
      "Mô-men xoắn cực đại (Nm)": "135",
      "Quãng đường 1 lần sạc (km)": "399",
      "Thời gian sạc nhanh (10%–70%)": "25 phút",
      "Dẫn động": "FWD",
      "Kích thước (D x R x C) (mm)": "4.238 x 1.820 x 1.594",
      "Dung lượng pin (kWh)": "59,6",
    },
    plus: {
      "Số chỗ ngồi": "5",
      "Động cơ": "01 Motor điện",
      "Công suất tối đa (kW)": "150",
      "Mô-men xoắn cực đại (Nm)": "310",
      "Quãng đường 1 lần sạc (km)": "381",
      "Thời gian sạc nhanh (10%–70%)": "25 phút",
      "Dẫn động": "FWD",
      "Kích thước (D x R x C) (mm)": "4.238 x 1.820 x 1.594",
      "Dung lượng pin (kWh)": "59,6",
    },
  },

  afterSpecsImage: afterSpecs,

  // ===== Swatches màu (đổi ảnh khi chọn) =====
  colors: [
    {
      id: "red",
      name: "Đỏ",
      hex: "#FF0000",
      img: vf6_red,
    },
    {
      id: "urban-mint",
      name: "Xanh lá",
      hex: "#0D3311",
      img: vf6_green,
    },
    {
      id: "infinity-blanc",
      name: "Trắng – Infinity Blanc",
      hex: "#F4F5F7",
      img: vf6_white,
    },
    {
      id: "grey",
      name: "Xám",
      hex: "#BFC3C7",
      img: vf6_grey,
    },
    {
      id: "electric-blue",
      name: "Xanh dương đậm – Electric Blue",
      hex: "#2272FF",
      img: vf6_blue,
    },
  ],

  // ====== BÀI VIẾT CHI TIẾT (renderer ContentBlocks sẽ đọc) ======
  sections: [
    { type: "image", src: hero2 },
    {
      type: "heading",
      level: 3,
      text: "Giới thiệu tổng quan VinFast VF6",
    },
    {
      type: "paragraph",
      text: "VinFast VF6, thiết kế bởi Torino Design, mang triết lý “Cặp đối lập tự nhiên”, tạo sự cân bằng giữa các yếu tố đối lập như thú vị – tinh tế, công nghệ – con người. VF6 là lựa chọn hoàn hảo cho ai tìm xe điện nhỏ gọn nhưng đầy đủ công nghệ, với thiết kế tinh tế, nội thất hiện đại, rộng rãi và màn hình cảm ứng lớn mang lại trải nghiệm lái sang trọng.",
    },
    {
      type: "metrics",
      items: [
        { value: "480 km", label: "Quãng đường/1 lần sạc" },
        { value: "150 kW/201 hp", label: "Công suất tối đa" },
        { value: "59.6 kW", label: "Dung lượng pin" },
      ],
    },

    {
      type: "imageCardCarousel",
      perPage: 2, // 2 card mỗi slide
      cards: [
        {
          img: comment1,
        },
        {
          img: comment2,
        },
        {
          img: comment3,
        },
        {
          img: comment4,
        },
      ],
    },

    {
      type: "heading",
      level: 3,
      text: "Màu sắc VinFast VF6: Nổi bật cá tính riêng",
    },
    {
      type: "paragraph",
      text: "Thiết kế ngoại thất VinFast VF6 sở hữu bảng màu đa dạng gồm 7 lựa chọn được khởi tạo từ những đường nét tinh tế đến từng chi tiết cùng vẻ ngoài năng động, ấn tượng ngày từ ánh nhìn đầu tiên: trắng, đỏ, xám, xanh dương, xanh rêu, cam, đen. Ngoài ra, khách hàng còn có tùy chọn màu sắc cá nhân hóa theo sở thích và cá tính riêng…",
    },

    { type: "gallery2", images: [boardSize, boardColors] },

    {
      type: "heading",
      level: 3,
      text: "Ngoại thất VinFast VF6: Tinh tế và Ấn tượng",
    },
    {
      type: "paragraph",
      text: "VinFast VF6 có thiết kế tinh tế do studio danh tiếng Torino Design. Được định vị ở phân khúc B, VinFast VF 6 có kích thước tổng thể (dài x rộng x cao): 4.238 x 1.820 x 1.594 mm. Chiều dài cơ sở lên đến 2.730 mm đây là thông số lớn nhất so với các dòng xe hạng B đồng thời tương đồng với các xe Hạng C SUV.",
    },
    { type: "gallery2", images: [pinkModel1, pinkModel2] },

    {
      type: "heading",
      level: 3,
      text: "Không gian ngoại thất tối ưu của VinFast VF6: Lợi thế từ thiết kế xe điện",
    },
    {
      type: "paragraph",
      text: "Với lợi thế của xe điện phần động cơ không chiếm nhiều diện tích và các khối Pin gắn ở phần sàn xe, và chiều dài cơ sở lớn giúp mang đến không gian nội thất tối ưu cho VF6, tương đương những mẫu xe thuộc phân khúc C sử dụng động cơ đốt trong.",
    },
    { type: "gallery2", images: [greyModel1, greyModel2] },

    {
      type: "heading",
      level: 3,
      text: "Vẻ ngoài thời thượng và mạnh mẽ của VinFast VF6",
    },
    {
      type: "paragraph",
      text: "Ngoại thất xe được tô điểm bởi dải đèn LED tạo hình cánh chim đặc trưng của VinFast, cùng la-zăng hợp kim 5 chấu khỏe khắn với kích thước lên đến 19 inch, tôn lên vẻ ngoài thời thượng.",
    },
    { type: "gallery2", images: [redModel1, redModel2] },

    {
      type: "heading",
      level: 3,
      text: "VinFast VF6: Thiết kế tinh tế và mạnh mẽ trong mỗi chi tiết",
    },
    {
      type: "paragraph",
      text: "Ngoại thất VF6 thể hiện sự đầu tư tỉ mỉ của VinFast, từ kiểu dáng khí động học đến từng chi tiết trang trí. Điểm nổi bật ngoại thất:",
    },
    {
      type: "bullets",
      items: [
        "Thiết kế khí động học: Tối ưu di chuyển và tiết kiệm năng lượng.",
        "Đèn LED hiện đại: Chiếu sáng tốt, tăng vẻ ngoài bắt mắt.",
        "Mâm xe hợp kim: Thiết kế thể thao, thêm vẻ khỏe khoắn.",
      ],
    },
    { type: "gallery2", images: [greenModel1, greenModel2] },

    {
      type: "heading",
      level: 3,
      text: "Thông số ngoại thất ấn tượng của VinFast VF6",
    },
    {
      type: "paragraph",
      text: "VinFast VF6 có kích thước dài x rộng x cao lần lượt là 4.238 x 1.820 x 1.594 mm, chiều dài cơ sở 2.730 mm và khoảng sáng gầm 170 mm. La-zăng 19 inch. Đèn pha LED đặt thấp ở hai bên, kết hợp dải LED định vị ban ngày. Cản trước mở rộng với khe gió lớn, sơn đen thể thao.",
    },
    { type: "gallery2", images: [blackModel1, blackModel2] },

    {
      type: "heading",
      level: 4,
      text: "Chi tiết ngoại thất nổi bật của VinFast VF6",
    },
    {
      type: "paragraph",
      text: "Tay nắm cửa cùng màu thân xe, ốp lốp sơn đen. Gương chiếu hậu chỉnh/gập điện, tích hợp đèn báo rẽ, camera 360 độ và sấy gương. Đuôi xe nổi bật với đèn hậu LED dạng “cánh chim” và cản sau mở rộng cùng ốp nhựa đồng màu thân xe. Ngoài ra, VinFast VF6 còn trang bị cánh gió thể thao và ăng-ten vây cá mập.",
    },
    { type: "image", src: poster },

    {
      type: "heading",
      level: 3,
      text: "Nội thất VinFast VF6: Thiết kế tiện nghi & Sang trọng",
    },
    {
      type: "paragraph",
      text: "Thiết kế nội thất VinFast VF6 lấy cảm hứng từ ngôi nhà thứ hai của gia đình với không gian rộng rãi, thoải mái cùng hai màu nội thất và chất liệu tự nhiên, thân thiện với người dùng.​ VF 6 có 2 màu nội thất. Trong đó, màu nội thất nâu Mocca Brown cực kỳ sang trọng lần đầu tiên ra mắt hứa hẹn sẽ đáp ứng nhu cầu, sở thích, cá tính, phong cách của đa dạng khách hàng..",
    },
    { type: "image", src: car1 },

    {
      type: "heading",
      level: 3,
      text: "Khoang lái, màn hình và vô lăng VinFast VF6",
    },
    {
      type: "bullets",
      items: [
        "Khoang lái: Tối giản, tinh tế, tối ưu hóa không gian hướng tới người lái.",
        "Màn hình trung tâm: Kích thước 12,9 inch, hiển thị sắc nét, tích hợp kết nối thông minh và hệ giải trí 8 loa cao cấp.",
        "Vô lăng: Thiết kế to bản với D-cut, mang lại sự thoải mái cho người lái.",
      ],
    },
    { type: "gallery2", images: [car2, car3] },

    {
      type: "heading",
      level: 3,
      text: "Tính năng hỗ trợ lái tiên tiến của VinFast VF6",
    },
    {
      type: "paragraph",
      text: "Tương tự các mẫu ô tô điện khác trong dải sản phẩm của VinFast, VF6 được trang bị các tính năng hỗ trợ lái và công nghệ hiện đại như:",
    },
    {
      type: "bullets",
      items: [
        "Hỗ trợ lái trên đường cao tốc (Level 2): Trợ lái ADAS cấp độ 2 giúp người lái di chuyển thuận tiện, nhẹ nhàng trên đường cao tốc (áp dụng với phiên bản Plus).",
        "Kiểm soát đi giữa làn, Hỗ trợ giữ làn, Kiểm soát đi giữa làn: Tính năng giúp xe giữ đúng giữa làn đường nhờ vào camera và cảm biến nhận diện vạch kẻ đường.",
        "Giám sát hành trình thích ứng: Hệ thống thu thập dữ liệu vị trí xe và tự động điều chỉnh, theo dõi quá trình vận hành để đảm bảo an toàn và tiện nghi.",
      ],
    },
    { type: "image", src: car4 },

    {
      type: "heading",
      level: 3,
      text: "VinFast VF6: Tính năng thông minh đột phá",
    },
    {
      type: "paragraph",
      text: "Các tính năng thông minh của VinFast VF 6 đều được hiển thị trên màn hình cảm ứng kích thước 12.9 inches sắc nét, hứa hẹn đem đến cảm giác lái khác biệt và đẳng cấp. Các tính năng có thể nâng cấp, bổ sung theo thời gian, giúp xe thông minh hơn, mang đến trải nghiệm mới cho người dùng.",
    },
    {
      type: "bullets",
      items: [
        "Cập nhật phần mềm từ xa: Hệ thống cho phép nâng cấp các tính năng và khắc phục lỗi phần mềm mà không cần đến showroom hay xưởng dịch vụ, tối ưu hóa hiệu suất xe.",
        "Trợ lý ảo: Điều khiển ô tô điện bằng giọng nói, thực hiện nhiều tính năng linh hoạt theo nhu cầu người dùng.",
        "Ứng dụng VinFast: Ứng dụng thông minh giúp người dùng dễ dàng điều khiển và quản lý phương tiện mọi lúc, mọi nơi.",
        "Màn hình cảm ứng 12.9 inches: Các tính năng thông minh được hiển thị sắc nét trên màn hình, mang đến trải nghiệm lái đẳng cấp, đồng thời có thể nâng cấp và bổ sung tính năng theo thời gian.",
      ],
    },
    { type: "gallery2", images: [car5, car6] },

    {
      type: "heading",
      level: 3,
      text: "VinFast VF6 vận hành mạnh mẽ",
    },
    {
      type: "paragraph",
      text: "Ở phân khúc B tại Việt Nam, VF 6 sở hữu khối động cơ có công suất mạnh nhất. Với sức mạnh của động cơ điện tương đương với những mẫu xe thuộc phân khúc C-SUV (Công suất tối đa lên đến 201 mã lực bản Plus và bản base là 134 mã lực). VF 6 chắc chắn sẽ thỏa mãn niềm đam mê cầm lái của chủ sở hữu, tự tin chinh phục mọi địa hình.​",
    },
    { type: "image", src: car7 },
    {
      type: "paragraph",
      text: "Về Pin và quãng đường đi chuyển: Pin hai bản này do VinES sản xuất, dùng chung loại 59,6 kWh, phạm vi hoạt động 399 km bản Base và 381 km trên bản Plus.",
    },

    {
      type: "specTable",
      rows: [
        {
          label: "Động cơ",
          value: "Động cơ điện một chiều (DC Motor)",
        },
        {
          label: "Công suất tối đa",
          value: "150 kW (201 mã lực)",
        },
        {
          label: "Mô-men xoắn cực đại",
          value: "310 Nm",
        },
        {
          label: "Tốc độ tối đa",
          value: "175 km/h",
        },
        {
          label: "Tăng tốc 0-100 km/h",
          value: "Khoảng 8-10 giây",
        },
        {
          label: "Loại pin",
          value: "Pin Lithium sắt phốt phát (LFP)",
        },
        {
          label: "Dung lượng pin khả dụng",
          value: "59,6 kWh",
        },
        {
          label: "Quãng đường di chuyển sau một lần sạc đầy",
          value: "381 km (theo tiêu chuẩn WLTP)",
        },
        {
          label: "Chuẩn sạc tại trạm sạc công cộng",
          value: "Plug & Charge, Auto Charge",
        },
        {
          label: "Công suất sạc AC tối đa",
          value: "7,2 kW (tùy chọn 11 kW)",
        },
        {
          label: "Tính năng sạc nhanh",
          value: "Có",
        },
        {
          label: "Tính năng sạc siêu nhanh",
          value: "Có",
        },
        {
          label: "Hệ thống phanh tái sinh",
          value: "Có (các chế độ thấp và cao)",
        },
        {
          label: "Thời gian sạc đầy bằng bộ sạc 11 kW",
          value: "Khoảng 6,7 giờ",
        },
        {
          label: "Thời gian sạc nhanh (10-70%) với bộ sạc 250 kW)",
          value: "Khoảng 25 phút",
        },
      ],
    },
  ],
};
