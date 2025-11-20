// src/data/cars/details/limogreen.js

import limogreen_black from "../assets/limogreen/limogreen_red.webp";
import limogreen_red from "../assets/limogreen/limogreen_red.webp";
import limogreen_grey from "../assets/limogreen/limogreen_grey.webp";
import limogreen_yellow from "../assets/limogreen/limogreen_yellow.webp";

import hero1 from "../assets/limogreen/limogreen_5.webp";

import afterSpecs from "../assets/limogreen/limogreen_details_1.webp";

import car1 from "../assets/limogreen/limogreen_details_2.webp";
import car2 from "../assets/limogreen/limogreen_details_3.webp";
import car3 from "../assets/limogreen/limogreen_details_4.webp";
import car4 from "../assets/limogreen/limogreen_details_5.webp";
import car5 from "../assets/limogreen/limogreen_details_6.webp";
import car6 from "../assets/limogreen/limogreen_details_7.webp";
import car7 from "../assets/limogreen/limogreen_details_8.webp";
import car8 from "../assets/limogreen/limogreen_details_9.webp";
import car9 from "../assets/limogreen/limogreen_details_10.webp";
import car10 from "../assets/limogreen/limogreen_details_11.webp";
import car11 from "../assets/limogreen/limogreen_details_12.webp";
import car12 from "../assets/limogreen/limogreen_details_13.webp";
import car13 from "../assets/limogreen/limogreen_details_14.webp";
import car14 from "../assets/limogreen/limogreen_details_15.webp";
import car15 from "../assets/limogreen/limogreen_details_16.webp";
import car16 from "../assets/limogreen/limogreen_details_17.webp";
import car17 from "../assets/limogreen/limogreen_details_18.webp";
import car18 from "../assets/limogreen/limogreen_details_19.webp";
import car19 from "../assets/limogreen/limogreen_details_20.webp";
import car20 from "../assets/limogreen/limogreen_details_21.webp";
import car21 from "../assets/limogreen/limogreen_details_22.webp";
import car22 from "../assets/limogreen/limogreen_details_23.webp";
import car23 from "../assets/limogreen/limogreen_details_24.webp";
import car24 from "../assets/limogreen/limogreen_details_25.webp";
import car25 from "../assets/limogreen/limogreen_details_26.webp";

export default {
  id: "limogreen",
  name: "VinFast LimoGreen",
  title: "limogreen",
  product_img: hero1,
  price: "719.040.000 đồng",

  // Thông số dùng cho bảng Specs top
  specs: {
    "Số chỗ ngồi": "7",
    "Động cơ": "01 Motor điện 150W",
    "Công suất tối đa (kW)": "150",
    "Mô men xoắn cực đại (Nm)": "280",
    "Quãng đường chạy một lần sạc đầy (km)": "450",
    "Thời gian sạc nhanh (10%–70%)": "30 phút",
    "Dẫn động": "FWD (Cầu trước)",
    "Kích thước (D x R x C) (mm)": "4740 x 1.872 x 1.723",
    "Khoảng sáng gầm xe (mm)": "170",
    "Dung lượng pin (kWh)": "37,23",
  },

  afterSpecsImage: afterSpecs,

  // ===== Swatches màu (đổi ảnh khi chọn) =====
  colors: [
    {
      id: "zenith-black",
      name: "Đen – Black Zenith",
      hex: "#000000",
      img: limogreen_black,
    },
    {
      id: "red",
      name: "Đỏ",
      hex: "#FF0000",
      img: limogreen_red,
    },
    {
      id: "grey",
      name: "Xám",
      hex: "#BFC3C7",
      img: limogreen_grey,
    },

    {
      id: "summer-yellow",
      name: "Vàng – Summer Yellow",
      hex: "#F0D44A",
      img: limogreen_yellow,
    },
  ],

  // ====== BÀI VIẾT CHI TIẾT (renderer ContentBlocks sẽ đọc) ======
  sections: [
    {
      type: "heading",
      level: 3,
      text: "VinFast Limo Green – MPV 7 chổ đa dụng",
    },
    {
      type: "paragraph",
      text: "Limo Green 7 chỗ có kích thước 4.730 x 1.870 x 1.690 mm, chiều dài cơ sở 2.840 mm, cung cấp không gian rộng rãi cho 3 hàng ghế. Xe sử dụng pin LFP, cho quãng đường di chuyển lên tới 450 km sau mỗi lần sạc đầy.",
    },
    {
      type: "metrics",
      items: [
        { value: "450 km", label: "Quãng đường/1 lần sạc" },
        { value: "30 phút", label: "Sạc nhanh (10%→70%)" },
        { value: "150 kW", label: "Công suất tối đa (kW)" },
      ],
    },
    { type: "image", src: car1 },

    {
      type: "heading",
      level: 3,
      text: "Màu ngoại thất: VinFast Limo Green",
    },
    {
      type: "paragraph",
      text: "Limo Green có các màu sắc trang nhã và sang trọng, phù hợp với phong cách của nhiều người dùng. Những màu sắc này không chỉ giúp xe nổi bật mà còn mang lại vẻ đẹp thẩm mỹ cao. Limo Green mang đến phong cách cá tính với 4 màu ngoại thất nổi bật: Vàng – Đỏ – Đen – Bạc, cùng màu nội thất đen sang trọng.",
    },
    { type: "image", src: car2 },

    {
      type: "heading",
      level: 3,
      text: "Thời gian sạc Limo Green nhanh chóng",
    },
    {
      type: "paragraph",
      text: "Với công suất sạc nhanh DC tối đa lên đến 80 kW, Limo Green có thể nạp 10% đến 70% pin trong chỉ 30 phút, giúp tiết kiệm thời gian khi cần di chuyển gấp. Ngoài ra, xe còn hỗ trợ sạc AC tại nhà với công suất tối đa 11 kW.",
    },
    { type: "image", src: car3 },

    {
      type: "heading",
      level: 3,
      text: "Chế độ lái Limo Green linh hoạt",
    },
    {
      type: "paragraph",
      text: "Limo Green cung cấp 3 chế độ lái (Eco, Comfort, Sport) để người lái có thể điều chỉnh hiệu suất của xe phù hợp với nhu cầu sử dụng, từ tiết kiệm năng lượng đến vận hành mạnh mẽ hơn.",
    },
    { type: "image", src: car4 },

    {
      type: "heading",
      level: 3,
      text: "Limo Green: Tiện nghi và an toàn tối ưu",
    },
    {
      type: "paragraph",
      text: "Limo Green được trang bị các tiện ích hiện đại như màn hình giải trí cảm ứng 10.1 inch, hệ thống âm thanh 4 loa, điều hòa tự động 1 vùng, cùng với các tính năng an toàn tiên tiến như hệ thống chống bó cứng phanh (ABS), hệ thống cân bằng điện tử (ESC), túi khí phía trước và bên hông.",
    },
    { type: "image", src: car5 },

    {
      type: "heading",
      level: 3,
      text: "Thiết kế Limo Green: Hiện đại và sang trọng",
    },
    {
      type: "paragraph",
      text: "Xe có ngoại thất tinh tế với đèn LED chiếu sáng phía trước và sau, gương chiếu hậu chỉnh điện, cùng với các chi tiết ngoại thất sang trọng và tiện lợi như gạt mưa tự động và cơ chế mở cửa bằng chốt điện. Nội thất rộng rãi, bọc nỉ cao cấp và ghế lái chỉnh cơ 6 hướng.",
    },
    { type: "image", src: car6 },

    {
      type: "heading",
      level: 3,
      text: "Limo Green: Hệ thống điều khiển thông minh",
    },
    {
      type: "paragraph",
      text: "Limo Green hỗ trợ tính năng tự chẩn đoán lỗi, cập nhật phần mềm từ xa, và thanh toán phí sạc qua mã QR trên ứng dụng điện thoại, mang lại sự tiện lợi và kết nối linh hoạt cho người sử dụng.",
    },
    { type: "image", src: car7 },

    {
      type: "heading",
      level: 3,
      text: "MPV 7 chổ dịch vụ đa dụng Thân thiện với môi trường",
    },
    {
      type: "paragraph",
      text: "Là một mẫu xe điện, Limo Green không chỉ giúp giảm chi phí vận hành mà còn góp phần giảm thiểu khí thải và ô nhiễm môi trường, phù hợp với xu hướng xanh và bền vững hiện nay. Limo Green là một lựa chọn tuyệt vời cho những ai muốn trải nghiệm xe điện với hiệu suất vượt trội, sự tiện nghi cao cấp, và tính năng an toàn tối ưu.",
    },
    { type: "image", src: car8 },

    {
      type: "heading",
      level: 3,
      text: "Ngoại thất xe VinFast Limo Green",
    },
    {
      type: "paragraph",
      text: "VinFast Limo Green được định vị trong phân khúc MPV 7 chỗ ngồi với kích thước dài x rộng x cao lên đến 4.730 x 1.870 x 1.690 (mm), lớn hơn khá nhiều so với các đối thủ trong cùng phân khúc như Mitsubishi Xpander, Suzuki XL7, và Suzuki Ertiga. Điều này giúp Limo Green cung cấp không gian rộng rãi hơn cho hành khách và hành lý, tạo cảm giác thoải mái hơn trong các chuyến đi dài.",
    },
    { type: "image", src: car9 },

    {
      type: "heading",
      level: 3,
      text: "VinFast Limo Green: Ổn định khi di chuyển",
    },
    {
      type: "paragraph",
      text: "Chiều dài cơ sở của Limo Green là 2.840 mm, cũng dài hơn đáng kể so với các mẫu xe khác trong phân khúc, góp phần cải thiện sự ổn định khi di chuyển và tăng cường trải nghiệm lái xe mượt mà hơn.",
    },
    { type: "image", src: car10 },

    {
      type: "heading",
      level: 3,
      text: "Limo Green: Đèn chiếu sáng LED",
    },
    {
      type: "bullets",
      items: [
        "Đèn chiếu sáng phía trước: Sử dụng công nghệ LED, không chỉ mang đến khả năng chiếu sáng mạnh mẽ mà còn tiết kiệm điện năng, đồng thời giúp tăng cường độ bền cho hệ thống chiếu sáng.",
        "Đèn chiếu sáng ban ngày: LED với thiết kế hiện đại, giúp xe trở nên nổi bật và dễ nhận diện ngay cả trong điều kiện ánh sáng ban ngày.",
        "Đèn hậu và đèn phanh trên cao: Cũng sử dụng công nghệ LED, tạo hiệu ứng nhận diện mạnh mẽ và góp phần vào an toàn khi tham gia giao thông.",
      ],
    },
    { type: "image", src: car11 },

    {
      type: "heading",
      level: 3,
      text: "Điều khiển độ cao góc chiếu",
    },
    {
      type: "paragraph",
      text: "Limo Green được trang bị điều khiển độ cao góc chiếu của đèn, giúp người lái dễ dàng điều chỉnh góc chiếu đèn cho phù hợp với điều kiện đường xá và tình hình giao thông, đảm bảo an toàn khi di chuyển vào ban đêm.",
    },
    { type: "image", src: car12 },

    {
      type: "heading",
      level: 3,
      text: "Gương chiếu hậu Limo Green chỉnh điện",
    },
    {
      type: "paragraph",
      text: "Gương chiếu hậu của xe có tính năng chỉnh điện, mang lại sự tiện lợi cho người lái trong việc điều chỉnh vị trí gương mà không cần phải sử dụng tay.",
    },
    { type: "image", src: car13 },

    {
      type: "heading",
      level: 3,
      text: "Gạt mưa Limo Green tự động",
    },
    {
      type: "paragraph",
      text: "Hệ thống gạt mưa trước có khả năng điều chỉnh gián đoạn, giúp gạt mưa hiệu quả trong mọi điều kiện thời tiết, mang lại tầm nhìn rõ ràng và an toàn hơn khi di chuyển dưới mưa.",
    },
    { type: "image", src: car14 },

    {
      type: "heading",
      level: 3,
      text: "Cơ chế mở cửa bằng chốt điện",
    },
    {
      type: "paragraph",
      text: "Limo Green có cơ chế lẫy mở cửa bằng chốt điện, mang lại sự tiện lợi và hiện đại trong việc mở cửa xe, giúp người sử dụng dễ dàng hơn trong việc ra vào xe.",
    },
    { type: "image", src: car15 },

    {
      type: "heading",
      level: 3,
      text: "Kích thước la-zăng 18 inch",
    },
    {
      type: "paragraph",
      text: "Limo Green sử dụng la-zăng 18 inch, thiết kế tinh tế và hiện đại, không chỉ giúp xe có vẻ ngoài thể thao mà còn tối ưu hóa hiệu quả vận hành và sự ổn định khi di chuyển.",
    },
    { type: "image", src: car16 },

    {
      type: "heading",
      level: 3,
      text: "Cửa cốp sau chỉnh cơ",
    },
    {
      type: "paragraph",
      text: "Cửa cốp sau được trang bị cơ chế chỉnh cơ, dễ dàng mở và đóng, đảm bảo sự tiện lợi khi sử dụng trong các tình huống cần chứa đồ hoặc lấy đồ từ cốp.",
    },
    { type: "image", src: car17 },

    {
      type: "heading",
      level: 3,
      text: "Nội thất xe VinFast Limo Green",
    },
    {
      type: "paragraph",
      text: "Nội thất VinFast Limo Green được thiết kế sang trọng, hiện đại và tối ưu hóa không gian, mang lại sự thoải mái và tiện nghi tối đa cho người sử dụng. Limo Green có không gian nội thất rộng rãi với 3 hàng ghế linh hoạt, mang đến sự thoải mái cho cả 7 người ngồi trong xe. Việc bố trí không gian hợp lý giúp xe có thể phục vụ cả nhu cầu gia đình hoặc sử dụng cho dịch vụ vận tải.",
    },
    { type: "image", src: car18 },

    {
      type: "heading",
      level: 3,
      text: "Ghế VinFast Limo Green",
    },
    {
      type: "paragraph",
      text: "Các ghế trong Limo Green được bọc nỉ cao cấp, không chỉ mang lại cảm giác dễ chịu mà còn dễ dàng vệ sinh và bảo dưỡng. Ngoài ra, ghế lái còn có chức năng chỉnh cơ 6 hướng, giúp người lái dễ dàng điều chỉnh vị trí ngồi phù hợp.",
    },
    { type: "image", src: car19 },

    {
      type: "heading",
      level: 3,
      text: "Hệ thống âm thanh",
    },
    {
      type: "paragraph",
      text: "Hệ thống âm thanh 4 loa cung cấp chất lượng âm thanh rõ ràng và mạnh mẽ, giúp mọi người trong xe thư giãn với các bản nhạc yêu thích hay các chương trình giải trí.",
    },
    { type: "image", src: car20 },

    {
      type: "heading",
      level: 3,
      text: "Hệ thống điều hòa",
    },
    {
      type: "paragraph",
      text: "Hệ thống điều hòa tự động 1 vùng mang đến sự tiện lợi và thoải mái, giúp duy trì nhiệt độ phù hợp trong suốt chuyến đi. Ngoài ra, cửa gió điều hòa cho hàng ghế thứ 2 và thứ 3 giúp làm mát đều cho mọi hành khách.",
    },
    { type: "image", src: car21 },

    {
      type: "heading",
      level: 3,
      text: "Phanh tay điện tử & Auto Hold",
    },
    {
      type: "paragraph",
      text: "Phanh tay điện tử kết hợp với chế độ tự động giữ phanh, giúp người lái dễ dàng kiểm soát xe khi dừng hoặc ở các khu vực dốc mà không cần phải sử dụng lực mạnh.",
    },
    { type: "image", src: car22 },

    {
      type: "heading",
      level: 3,
      text: "Gương chiếu hậu chóng chói",
    },
    {
      type: "paragraph",
      text: "Gương chiếu hậu trong xe có tính năng chế độ ngày & đêm, giúp người lái điều chỉnh độ sáng phù hợp với điều kiện ánh sáng bên ngoài, đảm bảo tầm nhìn rõ ràng và an toàn khi lái xe vào ban đêm.",
    },
    { type: "image", src: car23 },
    {
      type: "heading",
      level: 3,
      text: "App kết nối từ xa",
    },
    {
      type: "paragraph",
      text: "Limo Green còn trang bị các tiện ích thông minh như phần mềm cập nhật từ xa, tính năng thanh toán phí sạc qua mã QR, và tự chẩn đoán lỗi giúp người sử dụng dễ dàng theo dõi và bảo trì xe.",
    },
    { type: "image", src: car24 },
    {
      type: "heading",
      level: 3,
      text: "Chế độ lái Limo Green",
    },
    {
      type: "paragraph",
      text: "Xe cung cấp các chế độ lái như Eco, Comfort, Sport, giúp người lái dễ dàng thay đổi các chế độ vận hành tùy theo nhu cầu và tình huống sử dụng, từ tiết kiệm năng lượng cho đến tăng cường hiệu suất.",
    },
    { type: "image", src: car25 },
  ],
};
