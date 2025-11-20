// src/data/cars/details/vf6.js

import vf7_black from "../assets/vf7/vf7_black.webp";
import vf7_red from "../assets/vf7/vf7_red.webp";
import vf7_green from "../assets/vf7/vf7_green.webp";
import vf7_white from "../assets/vf7/vf7_white.webp";
import vf7_grey from "../assets/vf7/vf7_grey.webp";
import vf7_blue from "../assets/vf7/vf7_blue.webp";

import hero1 from "../assets/vf7/vf7_4.jpg";

import afterSpecs from "../assets/vf7/vf7_details_1.webp";

import car1 from "../assets/vf7/vf7_details_2.webp";
import car2 from "../assets/vf7/vf7_details_3.webp";
import car3 from "../assets/vf7/vf7_details_4.webp";
import car4 from "../assets/vf7/vf7_details_5.webp";
import car5 from "../assets/vf7/vf7_details_6.webp";
import car6 from "../assets/vf7/vf7_details_7.webp";
import car7 from "../assets/vf7/vf7_details_8.webp";
import car8 from "../assets/vf7/vf7_details_9.webp";
import car9 from "../assets/vf7/vf7_details_10.webp";
import car10 from "../assets/vf7/vf7_details_11.webp";
import car11 from "../assets/vf7/vf7_details_12.webp";
import car12 from "../assets/vf7/vf7_details_13.webp";
import car13 from "../assets/vf7/vf7_details_14.webp";
import car14 from "../assets/vf7/vf7_details_15.webp";
import car15 from "../assets/vf7/vf7_details_16.webp";
import car16 from "../assets/vf7/vf7_details_17.webp";
import car17 from "../assets/vf7/vf7_details_18.webp";
import car18 from "../assets/vf7/vf7_details_19.webp";
import car19 from "../assets/vf7/vf7_details_20.webp";
import car20 from "../assets/vf7/vf7_details_21.webp";
import car21 from "../assets/vf7/vf7_details_22.webp";
import car22 from "../assets/vf7/vf7_details_23.webp";
import car23 from "../assets/vf7/vf7_details_24.webp";
import car24 from "../assets/vf7/vf7_details_25.webp";
import car25 from "../assets/vf7/vf7_details_26.webp";
import car26 from "../assets/vf7/vf7_details_27.webp";
import car27 from "../assets/vf7/vf7_details_28.webp";
import car28 from "../assets/vf7/vf7_details_29.webp";
import car29 from "../assets/vf7/vf7_details_30.webp";
import car30 from "../assets/vf7/vf7_details_31.webp";
import car31 from "../assets/vf7/vf7_details_32.webp";

export default {
  id: "vf7",
  name: "VinFast VF7",
  title: "VF7",
  product_img: hero1,
  price: "767.040.000 đồng",
  priceTabs: [
    {
      id: "eco",
      label: "VF7 Eco",

      price: "767.040.000 đồng",
    },
    {
      id: "plus",
      label: "VF7 Plus",
      price: "911.040.000 đồng",
    },
  ],

  specs: {
    "Số chỗ ngồi": "5",
    "Động cơ": "01 Motor điện",
    "Công suất tối đa (kW)": "130",
    "Mô-men xoắn cực đại (Nm)": "250",
    "Quãng đường 1 lần sạc (km)": "498",
    "Thời gian sạc nhanh (10%–70%)": "24.1 phút",
    "Dẫn động": "FWD (Cầu trước)",
    "Kích thước (D x R x C) (mm)": "4,545 x 1,890 x 1,635.75",
    "Khoảng sáng gầm xe (mm)": "190",
    "Dung lượng pin (kWh)": "59,6",
  },
  specsByTrim: {
    eco: {
      "Số chỗ ngồi": "5",
      "Động cơ": "01 Motor điện",
      "Công suất tối đa (kW)": "130",
      "Mô-men xoắn cực đại (Nm)": "250",
      "Quãng đường 1 lần sạc (km)": "498",
      "Thời gian sạc nhanh (10%–70%)": "24.1 phút",
      "Dẫn động": "FWD (Cầu trước)",
      "Kích thước (D x R x C) (mm)": "4,545 x 1,890 x 1,635.75",
      "Khoảng sáng gầm xe (mm)": "190",
      "Dung lượng pin (kWh)": "59,6",
    },
    plus: {
      "Số chỗ ngồi": "5",
      "Động cơ": "Dual Motor",
      "Công suất tối đa (kW)": "150",
      "Mô-men xoắn cực đại (Nm)": "310",
      "Quãng đường 1 lần sạc (km)": "496",
      "Thời gian sạc nhanh (10%–70%)": "28.15 phút",
      "Dẫn động": "FWD (Cầu trước)",
      "Kích thước (D x R x C) (mm)": "4,545 x 1,890 x 1,635.75",
      "Khoảng sáng gầm xe (mm)": "190",
      "Dung lượng pin (kWh)": "75,6",
    },
  },
  afterSpecsImage: afterSpecs,

  // ===== Swatches màu (đổi ảnh khi chọn) =====
  colors: [
    {
      id: "black",
      name: "đen",
      hex: "#000000",
      img: vf7_black,
    },
    {
      id: "red",
      name: "Đỏ",
      hex: "#FF0000",
      img: vf7_red,
    },
    {
      id: "urban-mint",
      name: "Xanh lá",
      hex: "#0D3311",
      img: vf7_green,
    },
    {
      id: "infinity-blanc",
      name: "Trắng – Infinity Blanc",
      hex: "#F4F5F7",
      img: vf7_white,
    },
    {
      id: "grey",
      name: "Xám",
      hex: "#BFC3C7",
      img: vf7_grey,
    },
    {
      id: "electric-blue",
      name: "Xanh dương đậm – Electric Blue",
      hex: "#2272FF",
      img: vf7_blue,
    },
  ],

  // ====== BÀI VIẾT CHI TIẾT (renderer ContentBlocks sẽ đọc) ======
  sections: [
    {
      type: "heading",
      level: 3,
      text: "Giới thiệu VinFast VF7",
    },
    {
      type: "paragraph",
      text: "VinFast VF7 có động cơ mạnh mẽ nhất phân khúc C-SUV: phiên bản Plus với hai động cơ điện tổng công suất 349 mã lực (260 kW), mô-men xoắn 500 Nm; phiên bản Base với một động cơ điện công suất 174 mã lực (130 kW), mô-men xoắn 250 Nm.",
    },
    { type: "gallery3", images: [car1, car2, car3] },
    {
      type: "metrics",
      items: [
        { value: "431 km (NEDC)", label: "Quãng đường/1 lần sạc" },
        { value: "5.8 giây", label: "Tăng tốc từ 0 – 100km/ h" },
        { value: "260kW - 349HP", label: "Công suất tối đa" },
      ],
    },
    { type: "image", src: car4 },

    {
      type: "heading",
      level: 3,
      text: "Màu sắc VinFast VF7",
    },
    {
      type: "paragraph",
      text: "Màu sắc VinFast VF7 với dải màu đa dạng, gồm 4 màu cơ bản đã có là Xám, Đỏ, Xanh dương, Trắng; và 4 màu nâng cao mới là Vàng, Hồng tím, Xanh dương nhạt và Xanh lá nhạt. Mỗi màu sắc sẽ thể hiện phong cách, nét riêng của chủ sở hữu xe. Tùy chọn màu sắc nội thất đồng điệu với thiết kế bên ngoài cũng chính là điểm nhấn nổi bật của mẫu ô tô điện VF7 mới này.",
    },
    { type: "image", src: car5 },

    {
      type: "heading",
      level: 3,
      text: "VinFast VF7 Hỏa Long Độc Bản",
    },
    {
      type: "paragraph",
      text: "VF 7 Dragon Forged – Hỏa Long Độc Bản thực sự là biểu tượng của vẻ đẹp khác biệt và sức mạnh vô song. VF 7 Dragon Forged – Hỏa Long Độc Bản là biểu tượng của sự đam mê và lòng kiêu hãnh & và là lựa chọn của những người kiếm tìm sự độc đáo và đẳng cấp.",
    },
    { type: "image", src: car6 },
    {
      type: "paragraph",
      text: "Đây là thời điểm tuyệt vời để sở hữu VF 7 Dragon Forged – Hỏa Long Độc Bản, nơi bạn luôn tỏa sáng như Rồng lửa, là phiên bản độc đáo của chính mình, bứt phá mọi giới hạn với lòng kiêu hãnh của bản lĩnh tiên phong để năm mới ngập tràn thành công và hạnh phúc.",
    },
    { type: "gallery2", images: [car7, car8] },

    {
      type: "heading",
      level: 3,
      text: "Ngoại thất VinFast VF7",
    },
    {
      type: "paragraph",
      text: "VinFast VF 7 được thiết kế theo ngôn ngữ “Vũ trụ phi đối xứng” (Asymmetric Aerospace) do Torino Design (Italy) chắp bút, hiện thân cho sự tự do, công nghệ, thời thượng và cá tính.",
    },
    { type: "image", src: car9 },
    {
      type: "paragraph",
      text: "Xe có thiết kế rộng rãi với kích thước chiều dài 4.545mm, rộng 1.890mm, cao 1.635,75mm; chiều dài cơ sở 2.840 mm và khoảng sáng gầm xe 190 mm.",
    },
    { type: "gallery2", images: [car10, car11] },
    {
      type: "paragraph",
      text: "Cụm đèn LED trước của xe được trang bị phía dưới nắp capo, giúp tăng khả năng chiếu sáng và tính thẩm mỹ. Bên cạnh đó, phần lưới tản nhiệt cũng được loại bỏ mang lại sự tối giản và thanh lịch.",
    },
    { type: "image", src: car12 },
    {
      type: "paragraph",
      text: "Đầu và đuôi xe được định vị nổi bật bởi dải đèn LED hình cánh chim đặc trưng của VinFast. Mui xe vuốt xuôi về phía sau kiểu coupe, cùng hốc bánh xe lớn, la-zăng hợp kim lên tới 20 inch, góp phần tạo nên vẻ đẹp mạnh mẽ và thể thao.",
    },
    { type: "gallery2", images: [car13, car14] },
    {
      type: "paragraph",
      text: "VinFast VF 7 cũng toát lên sự cá tính và thời thượng nhờ các đường nét cắt xẻ mạnh ở hông xe. Tại vị trí này còn có tay nắm cửa dạng ẩn hiện đại, nhằm tối ưu tính khí động học. Bên dưới khu vực cột A sẽ là nơi đặt cổng sạc điện của mẫu xe này.",
    },
    { type: "image", src: car15 },
    {
      type: "paragraph",
      text: "Đuôi xe VF 7 được thiết kế dải đèn LED hình chữ “V” quen thuộc, đặc trưng của thương hiệu VinFast. Bên cạnh đó, đèn lùi được trang bị hướng về hai bên viền xe. Chính giữa khu vực gắn biển số được sơn màu đen tạo sự tương phản, nổi bật, ấn tượng mạnh cho người nhìn.",
    },
    { type: "gallery2", images: [car16, car17] },
    {
      type: "paragraph",
      text: "Cản sau chiếc SUV – VF 7 được thiết kế tương đối cao giúp phương tiện có góc thoát tốt, khi gặp chướng ngại vật mà không bị chạm phần đuôi. Kích thước mâm xe lớn tạo nên sự khỏe khoắn, hầm hố nhưng vẫn giữ nét tinh tế, sang trọng và có thể vận hành mạnh mẽ trên mọi cung đường.",
    },
    { type: "image", src: car18 },
    {
      type: "specTable",
      rows: [
        {
          label: "Tổng thể",
          value:
            "Phong cách cá tính và tinh tế, kết hợp giữa sự mạnh mẽ và thanh lịch.",
        },
        {
          label: "Đầu xe",
          value:
            "Lưới tản nhiệt hình chữ V đặc trưng, đèn pha LED sắc sảo, đèn định vị ban ngày hình chữ V.",
        },
        {
          label: "Thân xe",
          value:
            "Dáng SUV với đường nét khí động học, tay nắm cửa ẩn, gương chiếu hậu tích hợp đèn báo rẽ.",
        },
        {
          label: "Đuôi xe",
          value:
            "Đèn hậu LED nối liền tạo sự liền mạch, cánh lướt gió trên cao, ống xả kép giả.",
        },
        {
          label: "Mâm xe",
          value: "Mâm hợp kim đa chấu kích thước lớn, thiết kế thể thao.",
        },
        {
          label: "Màu sắc",
          value:
            "Đa dạng các tùy chọn màu sắc, bao gồm các tông màu thời thượng và hiện đại.",
        },
      ],
    },
    { type: "gallery2", images: [car19, car20] },

    {
      type: "heading",
      level: 3,
      text: "Nội thất VinFast VF7",
    },
    {
      type: "paragraph",
      text: "Thiết kế nội thất VF 7 hiện đại, tiện ích, sang trọng với phong cách tối giản và thông minh. Nhờ sự ưu việt trong kiểu dáng và tính năng, VinFast VF 7 có tiềm năng trở thành mẫu xe dẫn đầu phân khúc C-SUV tại Việt Nam.",
    },
    { type: "image", src: car21 },
    {
      type: "paragraph",
      text: "Màn hình thông tin cảm ứng được đặt ngay giữa trung tâm và hướng về người lái. Việc kết hợp các nút bấm điều khiển và màn hình giải trí vào một đã giúp tối giản hóa thiết kế khoang nội thất.",
    },
    { type: "gallery2", images: [car22, car23] },
    {
      type: "paragraph",
      text: "Cần số được tích hợp ngay bên dưới dạng phím piano cực kỳ bắt mắt và tiện lợi. Nhờ vậy, người điều khiển phương tiện có thể dễ dàng nắm bắt thông tin, tình trạng di chuyển và trải nghiệm tính năng giải trí ngay trên màn hình cảm ứng.",
    },
    { type: "image", src: car24 },
    {
      type: "paragraph",
      text: "Cần số được tích hợp ngay bên dưới dạng phím piano cực kỳ bắt mắt và tiện lợi. Nhờ vậy, người điều khiển phương tiện có thể dễ dàng nắm bắt thông tin, tình trạng di chuyển và trải nghiệm tính năng giải trí ngay trên màn hình cảm ứng.",
    },
    { type: "gallery2", images: [car25, car26] },
    {
      type: "paragraph",
      text: "Nội thất VF 7 được VinFast thiết kế theo phong cách tối giản, nhằm đáp ứng nhu cầu thẩm mỹ hiện đại và tăng không gian sử dụng cho người dùng. Điểm nổi bật của VF7 chính là sự phối hợp giữa 2 màu sang trọng, giúp làm bật lên những đường nét hấp dẫn của xe. Khu vực điều khiển được tạo hình liền mạch khiến không gian trở nên tinh tế và hài hòa.",
    },
    { type: "image", src: car27 },
    {
      type: "paragraph",
      text: "VF 7 có không gian hai hàng ghế vô cùng rộng rãi và thoải mái. Mỗi vị trí ghế đều được bọc da hai màu kết hợp và trang bị tựa đầu chỉnh cơ cao thấp, tạo cảm giác dễ chịu cho người ngồi xe. Chính vì vậy, VF 7 được đánh giá mang đến sự thoải mái hơn so với các mẫu xe cùng phân khúc chạy động cơ đốt trong. Mẫu xe này chính là một trong những sản phẩm thu hút nhóm khách hàng trong phân khúc xe xăng dầu truyền thống chuyển dịch sang dùng xe động cơ điện.",
    },
    { type: "gallery2", images: [car28, car29] },
    {
      type: "specTable",
      rows: [
        {
          label: "Ghế ngồi",
          value:
            "Bọc da cao cấp, phối hai tông màu sang trọng, tạo cảm giác thoải mái cho người ngồi.",
        },
        {
          label: "Ghế sau",
          value:
            "Rộng rãi, có thể gập 60:40 để tăng không gian chứa đồ khi cần thiết.",
        },
        {
          label: "Bệ tỳ tay",
          value:
            "Trang bị ở cả hai hàng ghế, nâng cao sự tiện nghi cho hành khách.",
        },
        {
          label: "Cửa sổ trời	",
          value:
            "Kích thước lớn, giúp không gian nội thất thêm thoáng đãng và sáng sủa.",
        },
        {
          label: "Đèn nội thất",
          value:
            "Đèn LED Ambient Light đa màu sắc, tạo không gian sang trọng và hiện đại.",
        },
        {
          label: "Vô lăng",
          value:
            "Thiết kế thể thao, tích hợp các phím chức năng, mang lại trải nghiệm lái xe tiện lợi.",
        },
        {
          label: "Màn hình",
          value:
            "Màn hình cảm ứng lớn, hỗ trợ kết nối Apple CarPlay và Android Auto, cung cấp các ứng dụng giải trí và thông tin hữu ích.",
        },
        {
          label: "Âm thanh",
          value:
            "Hệ thống loa chất lượng cao, mang lại trải nghiệm âm thanh sống động.",
        },
        {
          label: "Điều hòa",
          value:
            "Hệ thống điều hòa tự động hai vùng độc lập, đảm bảo sự thoải mái cho mọi hành khách.",
        },
        {
          label: "Hộc chứa đồ",
          value:
            "Nhiều ngăn chứa đồ thông minh, bao gồm hộc để cốc, ngăn đựng găng tay và khay để điện thoại.",
        },
      ],
    },
    { type: "image", src: car30 },

    {
      type: "heading",
      level: 3,
      text: "Tiện nghi VinFast VF7",
    },
    {
      type: "paragraph",
      text: "Với kích cỡ 12,9 inch, có thể tùy chỉnh cá nhân hóa theo người dùng. Màn hình giải trí cảm ứng của VF 7 có thể giúp điều khiển các chức năng trên xe bằng cách vuốt/chạm nhẹ hoặc ra lệnh cho trợ lý ảo qua giọng nói.",
    },
    { type: "image", src: car31 },
    {
      type: "paragraph",
      text: "Cả hai phiên bản của VinFast VF7 đều trang bị gói dịch vụ VF Connect với công nghệ tiên tiến, bao gồm trợ lý ảo giọng nói tiếng Việt đa vùng miền, chức năng gọi cứu hộ tự động, giám sát xâm nhập trái phép, và theo dõi thông tin xe theo thời gian thực. Đây là các tính năng độc đáo chỉ có trên ô tô điện VinFast, khác biệt so với xe xăng cùng phân khúc.",
    },
    {
      type: "bullets",
      items: [
        "Kết nối giải trí: Internet, video, Radio, Bluetooth®, Kết nối Apple Carplay và Android Auto.",
        "Bản đồ: Bản đồ tích hợp trên xe có thể tự động đề xuất dẫn hướng qua trạm sạc khi cần thiết.",
        "Điều khiển các tính năng: Điều chỉnh điều hòa, chỉnh gương, mở cốp,…",
        "Theo dõi tình trạng xe: Quản lý PIN và Sạc, Áp suất lốp, Camera 360…",
      ],
    },
  ],
};
