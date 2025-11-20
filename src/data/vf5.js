// src/data/cars/details/vf5.js

import vf5_red from "../assets/vf5/vf5_red.webp";
import vf5_pink from "../assets/vf5/vf5_pink.webp";
import vf5_green from "../assets/vf5/vf5_green.webp";
import vf5_white from "../assets/vf5/vf5_white.webp";
import vf5_yellow from "../assets/vf5/vf5_yellow.webp";
import vf5_grey from "../assets/vf5/vf5_grey.webp";
import vf5_blue from "../assets/vf5/vf5_blue.webp";

import hero1 from "../assets/vf5/vf5_3.jpg";

import afterSpecs from "../assets/vf5/vf5_details_1.webp";

import boardSize from "../assets/vf5/vf5_details_2.webp";
import boardColors from "../assets/vf5/vf5_details_3.webp";

import comment1 from "../assets/vf5/vf5_details_4.webp";
import comment2 from "../assets/vf5/vf5_details_5.webp";
import comment3 from "../assets/vf5/vf5_details_6.webp";
import comment4 from "../assets/vf5/vf5_details_7.webp";

import poster from "../assets/vf5/vf5_details_8.webp";

import pinkModel from "../assets/vf5/vf5_details_9.webp";
import redModel from "../assets/vf5/vf5_details_10.webp";
import greenModel from "../assets/vf5/vf5_details_11.webp";
import lightBlueModel from "../assets/vf5/vf5_details_12.webp";
import blueModel from "../assets/vf5/vf5_details_13.webp";
import greyModel from "../assets/vf5/vf5_details_14.webp";
import yellowModel from "../assets/vf5/vf5_details_15.webp";
import whiteModel from "../assets/vf5/vf5_details_16.webp";

import car1 from "../assets/vf5/vf5_details_17.webp";

import car2 from "../assets/vf5/vf5_details_18.webp";
import car3 from "../assets/vf5/vf5_details_19.webp";
import car4 from "../assets/vf5/vf5_details_20.webp";
import car5 from "../assets/vf5/vf5_details_21.webp";
import car6 from "../assets/vf5/vf5_details_22.webp";
import car7 from "../assets/vf5/vf5_details_23.webp";
import car8 from "../assets/vf5/vf5_details_24.webp";
import car9 from "../assets/vf5/vf5_details_25.webp";
import car10 from "../assets/vf5/vf5_details_26.webp";
import car11 from "../assets/vf5/vf5_details_27.webp";
import car12 from "../assets/vf5/vf5_details_28.webp";
import car13 from "../assets/vf5/vf5_details_29.webp";
import car14 from "../assets/vf5/vf5_details_30.webp";
import car15 from "../assets/vf5/vf5_details_31.webp";
import car16 from "../assets/vf5/vf5_details_32.webp";
import car17 from "../assets/vf5/vf5_details_33.webp";
import car18 from "../assets/vf5/vf5_details_34.webp";
import car19 from "../assets/vf5/vf5_details_35.webp";
import car20 from "../assets/vf5/vf5_details_36.webp";
import car21 from "../assets/vf5/vf5_details_37.webp";
import car22 from "../assets/vf5/vf5_details_38.webp";
import car23 from "../assets/vf5/vf5_details_39.webp";
import car24 from "../assets/vf5/vf5_details_40.webp";
import car25 from "../assets/vf5/vf5_details_41.webp";
import car26 from "../assets/vf5/vf5_details_42.webp";
import car27 from "../assets/vf5/vf5_details_43.webp";
import car28 from "../assets/vf5/vf5_details_44.webp";
import car29 from "../assets/vf5/vf5_details_45.webp";
import car30 from "../assets/vf5/vf5_details_46.webp";

export default {
  id: "vf5",
  name: "VinFast VF5",
  title: "VF5",
  product_img: hero1,
  price: "507.840.000 đồng",

  // Thông số dùng cho bảng Specs top
  specs: {
    "Số chỗ ngồi": "5",
    "Động cơ": "01 Motor điện",
    "Công suất tối đa (kW)": "100",
    "Mô men xoắn cực đại (Nm)": "135",
    "Quãng đường chạy một lần sạc đầy (km)": "326",
    "Thời gian sạc nhanh (10%–70%)": "33 phút",
    "Dẫn động": "FWD",
    "Kích thước (D x R x C) (mm)": "3.967 x 1.723 x 1.579",
    "Khoảng sáng gầm xe (mm)": "160",
    "Dung lượng pin (kWh)": "37,23",
  },

  afterSpecsImage: afterSpecs,

  // ===== Swatches màu (đổi ảnh khi chọn) =====
  colors: [
    {
      id: "red",
      name: "Đỏ",
      hex: "#FF0000",
      img: vf5_red,
    },
    {
      id: "Pink",
      name: "Hồng",
      hex: "#B98A92",
      img: vf5_pink,
    },
    {
      id: "urban-mint",
      name: "Xanh lá nhạt – Urban Mint",
      hex: "#0D3311",
      img: vf5_green,
    },
    {
      id: "infinity-blanc",
      name: "Trắng – Infinity Blanc",
      hex: "#F4F5F7",
      img: vf5_white,
    },
    {
      id: "summer-yellow",
      name: "Vàng – Summer Yellow",
      hex: "#F0D44A",
      img: vf5_yellow,
    },
    {
      id: "grey",
      name: "Xám",
      hex: "#BFC3C7",
      img: vf5_grey,
    },
    {
      id: "electric-blue",
      name: "Xanh dương đậm – Electric Blue",
      hex: "#2272FF",
      img: vf5_blue,
    },
  ],

  // ====== BÀI VIẾT CHI TIẾT (renderer ContentBlocks sẽ đọc) ======
  sections: [
    {
      type: "heading",
      level: 3,
      text: "Giới thiệu tổng quan VinFast VF5",
    },
    {
      type: "paragraph",
      text: "VF 5 Plus chất riêng sáng tạo cùng công nghệ của VinFast: Thiết kế năng động, cứng cáp cùng nhiều lựa chọn màu sắc hợp gu. Nội thất rộng rãi, tối ưu hoá không gian trong xe. 21 tính năng thông minh, 6 tính năng trợ lái hữu ích để trải nghiệm lái xe thêm thoải mái.",
    },
    {
      type: "metrics",
      items: [
        { value: "326 km", label: "Quãng đường/1 lần sạc" },
        { value: "33 phút", label: "Sạc nhanh (10%→70%)" },
        { value: "5 chỗ", label: "Số chỗ ngồi" },
      ],
    },

    // Bảng kích thước & bảng màu
    { type: "gallery2", images: [boardSize, boardColors] },

    {
      type: "heading",
      level: 3,
      text: "Màu sắc VinFast VF5: Bật cá tính",
    },
    {
      type: "paragraph",
      text: "VinFast VF5 Plus mang đến dải màu sắc phong phú, gồm 4 màu cơ bản (Xám, Đỏ, Xanh dương, Trắng) và 4 màu nâng cao mới (Vàng, Hồng tím, Xanh dương nhạt, Xanh lá nhạt), giúp thể hiện phong cách cá nhân của chủ sở hữu. Tùy chọn màu sắc nội thất đồng điệu với thiết kế ngoại thất tạo điểm nhấn nổi bật, nâng tầm vẻ đẹp cho mẫu xe điện VF5 Plus. ",
    },
    {
      type: "imageCardCarousel",
      perPage: 2, // 2 card mỗi slide
      cards: [
        {
          img: comment1,
          title: "VF5 – Summer Yellow",
          text: "Chọn khai mở cung đường mới thay vì lối mòn rập khuôn, năng lượng từ Summer Yellow giúp Kaity tự tin vào chất trẻ trung trong mình – để tinh thần tự do phóng khoáng luôn vượt lên những rào cản không tên. Giới hạn sẽ không bao giờ nằm trong từ điển cuộc sống, một khi có sắc vàng của VinFast 5 dẫn lối.",
        },
        {
          img: comment2,
          title: "VF5 – Zenith Grey",
          text: "Lựa chọn sắc xám chính là lựa chọn thành công - toàn tâm toàn ý cho mọi “công task” trên hành trình sự nghiệp. Là biểu tượng của sự uy tín và mạnh mẽ, GreyD tin rằng Zenith Grey sẽ mang đến thần thái chuyên nghiệp, đẳng cấp và tự tin trên mọi con đường bạn lựa chọn.",
        },
        {
          img: comment3,
          title: "VF5 – Sky Blue",
          text: "Hơn cả một màu sắc, Sky Blue đối với Amee đại diện cho cá tính đậm nét Gen Z, chất “đa-zi-năng” và phong cách trẻ trung năng động. Mọi chuyển động cùng sắc xanh  Sky Blue chính là tuyên ngôn cho thần thái khác biệt của hội Gen Z.",
        },
        {
          img: comment4,
          title: "VF5- Urban Mint",
          text: "Hiện đại với sắc xanh tươi mát, sống động và thân thiện với môi trường. Màu xanh mint mang đến cho Hà cảm giác tươi mới, đầy năng lượng, giúp Hà tận hưởng nhịp sống đô thị một cách trọn vẹn và đầy cảm hứng.",
        },
      ],
    },
    { type: "image", src: poster },

    {
      type: "heading",
      level: 4,
      text: "Ngoại thất VinFast VF5: Thiết kế năng động, đường nét mạnh mẽ và tinh tế",
    },
    {
      type: "paragraph",
      text: "VinFast VF5 Plus được trang bị các công nghệ tiên tiến dẫn đầu phân khúc, bao gồm: ghi nhớ hồ sơ người lái, định vị xe từ xa, chẩn đoán lỗi tự động, và cảnh báo xâm nhập trái phép. Mẫu xe này còn tích hợp nhiều tiện ích thông minh như trợ lý ảo điều khiển giọng nói, mua sắm trực tuyến, cập nhật phần mềm từ xa và điều khiển thiết bị smart home, mang đến trải nghiệm đẳng cấp và phong cách sống hiện đại cho người sở hữu.",
    },
    {
      type: "imageCardCarousel",
      perPage: 3,
      cards: [
        { img: pinkModel },
        { img: redModel },
        { img: greenModel },
        { img: lightBlueModel },
        { img: blueModel },
        { img: greyModel },
        { img: yellowModel },
        { img: whiteModel },
      ],
    },

    {
      type: "heading",
      level: 3,
      text: "VinFast VF5: Mẫu xe điện “Quốc Dân” trong phân khúc A",
    },
    {
      type: "paragraph",
      text: "VinFast VF5 được công nhận là mẫu xe điện nhỏ nhất trong dải sản phẩm của VinFast, thuộc phân khúc A – dòng SUV cỡ nhỏ, hướng đến đối tượng khách hàng tìm kiếm một phương tiện tiết kiệm, tiện lợi và thân thiện với môi trường.",
    },
    { type: "image", src: car1 },

    {
      type: "heading",
      level: 3,
      text: "Thân xe VinFast VF5: Thiết kế khí động học",
    },
    {
      type: "paragraph",
      text: "Thân xe VF5 gây ấn tượng với những chi tiết dập nổi và đường bo tròn mềm mại. Cột C thể thao với viền đen kéo dài ra sau, tạo cảm giác dài hơn cho xe. Hốc bánh xe mạnh mẽ, cùng với cổng sạc bố trí thuận tiện ở hông phải, tối ưu trải nghiệm người dùng trong quá trình sạc pin.",
    },
    { type: "gallery2", images: [car2, car3] },

    {
      type: "heading",
      level: 3,
      text: "Kích thước & Trọng lượng của VinFast VF5",
    },
    {
      type: "bullets",
      items: [
        "Dài x Rộng x Cao: 3.965 x 1.720 x 1.580 mm",
        "Chiều dài cơ sở: 2.513 mm",
        "Khoảng sáng gầm: 182 mm",
      ],
    },
    {
      type: "paragraph",
      text: "Kích thước này giúp VinFast VF5 mang đến không gian nội thất tiện nghi cho hành khách và tạo sự linh hoạt khi di chuyển trong các đô thị hoặc trên các cung đường nhỏ hẹp. Với khoảng sáng gầm 182 mm, VF5 cũng có khả năng vượt qua những địa hình nhẹ nhàng, phù hợp cho nhiều nhu cầu di chuyển hàng ngày.",
    },
    { type: "image", src: car4 },

    {
      type: "heading",
      level: 3,
      text: "Cấu trúc khung gầm và hệ thống treo của VinFast VF5",
    },
    {
      type: "bullets",
      items: [
        "Khung gầm: Liền khối",
        "Treo trước: MacPherson",
        "Treo sau: Dầm xoắn",
      ],
    },
    {
      type: "paragraph",
      text: "Cấu trúc khung gầm chắc chắn kết hợp với hệ thống treo trước và sau mang lại sự ổn định và thoải mái khi di chuyển, giúp VinFast VF5 vượt qua nhiều loại địa hình một cách dễ dàng.",
    },
    { type: "gallery2", images: [car5, car6] },

    {
      type: "heading",
      level: 3,
      text: "Hệ thống phanh VinFast VF5: Hiệu suất vượt trội với phanh đĩa",
    },
    {
      type: "paragraph",
      text: "VinFast VF5 trang bị phanh đĩa trước và sau, mang lại hiệu suất phanh tốt hơn so với phanh tang trống của các đối thủ như Raize và Sonet.",
    },
    { type: "image", src: car7 },

    {
      type: "heading",
      level: 3,
      text: "Hệ thống đèn pha VinFast VF5: Bi-Halogen tiêu chuẩn",
    },
    {
      type: "paragraph",
      text: "VinFast VF5 được trang bị đèn pha Bi-Halogen, mặc dù không có đèn sương mù hay đèn LED như các đối thủ Sonet và Raize, nhưng vẫn đảm bảo khả năng chiếu sáng hiệu quả trong mọi điều kiện.",
    },
    { type: "gallery2", images: [car8, car9] },

    {
      type: "heading",
      level: 3,
      text: "Gương chiếu hậu VinFast VF5: An toàn tuyệt đối",
    },
    {
      type: "paragraph",
      text: "Gương chiếu hậu của VinFast VF5 được sơn 2 tông màu, chỉnh điện, tích hợp đèn báo rẽ và cảnh báo điểm mù, mang lại sự tiện nghi và tăng cường an toàn cho người lái.",
    },
    { type: "image", src: car10 },

    {
      type: "heading",
      level: 3,
      text: "Cốp xe VinFast VF5: Tiện dụng cho các chuyến đi ngắn",
    },
    {
      type: "paragraph",
      text: "Cốp xe VinFast VF5 mở bằng cơ, cung cấp không gian chứa đồ hợp lý, phù hợp cho những chuyến đi ngắn ngày.",
    },
    { type: "gallery2", images: [car11, car12] },

    {
      type: "heading",
      level: 3,
      text: "VinFast VF5: Thiết kế trẻ trung và Cá tính",
    },
    {
      type: "paragraph",
      text: "VinFast VF5 mang đến thiết kế trẻ trung, hiện đại và độc đáo, với 16 tùy chọn phối màu ngoại thất, giúp mỗi chiếc xe thể hiện cá tính riêng của chủ sở hữu.",
    },
    { type: "image", src: car13 },

    {
      type: "heading",
      level: 3,
      text: "VinFast VF5 Plus: Chiếc xe điện đô thị lý tưởng cho người dùng trẻ",
    },
    {
      type: "paragraph",
      text: "VF5 Plus mang đến một sự kết hợp hoàn hảo giữa tính năng vượt trội và phong cách thời thượng, đáp ứng đầy đủ những yêu cầu của người dùng trẻ tìm kiếm một chiếc xe điện đô thị lý tưởng, tiện nghi và hiện đại.",
    },
    { type: "gallery2", images: [car14, car15] },

    {
      type: "heading",
      level: 3,
      text: "Mâm và lốp VinFast VF5: Ổn định và Thể thao",
    },
    {
      type: "paragraph",
      text: "VinFast VF5 trang bị mâm hợp kim 17 inch kết hợp với lốp 205/55R17, mang lại sự ổn định và khả năng vận hành linh hoạt trên mọi cung đường.",
    },
    { type: "image", src: car16 },

    {
      type: "heading",
      level: 3,
      text: "Đầu xe VinFast VF5: Thiết kế tinh tế và Tối giản",
    },
    {
      type: "paragraph",
      text: "Phần đầu xe VF5 mang phong cách hiện đại, tối giản với nắp ca-pô dập nổi cơ bắp và mặt Ca-lăng kín liền mạch, đặc trưng của xe điện. Logo VinFast nằm chính giữa, nổi bật với 2 dải crom trang trí hình cánh chim, tạo điểm nhấn dễ nhận diện.",
    },
    { type: "gallery2", images: [car17, car18] },

    {
      type: "heading",
      level: 3,
      text: "Nội thất VinFast VF5: Rộng rải & Tinh tế",
    },
    {
      type: "paragraph",
      text: "VinFast VF5 với không gian rộng rãi, phối màu sành điệu. Thiết kế nội thất hướng tới sự tối giản với cách phối màu nội thất đồng điệu với ngoại thất làm nổi bật lên vẻ cuốn hút nhờ các đường viền bắt mắt.",
    },
    { type: "image", src: car19 },

    {
      type: "heading",
      level: 3,
      text: "Khoang lái VinFast VF5: Tối giản",
    },
    {
      type: "paragraph",
      text: "Khoang lái VinFast VF5 sở hữu thiết kế tối giản với hai màn hình trên bảng táp-lô, hạn chế tối đa nút bấm vật lý, mang đến không gian hiện đại, tinh tế và dễ dàng sử dụng cho người lái.",
    },
    { type: "gallery2", images: [car20, car21] },

    {
      type: "heading",
      level: 3,
      text: "Vô lăng VinFast VF5: D-Cut thể thao",
    },
    {
      type: "paragraph",
      text: "Vô lăng VinFast VF5 thiết kế 3 chấu D-Cut thể thao, chỉnh cơ 2 hướng, tích hợp các nút điều khiển Menu, Âm lượng, Đàm thoại rảnh tay và Cruise Control, mang đến sự tiện nghi và phong cách thể thao cho người lái.",
    },
    { type: "image", src: car22 },

    {
      type: "heading",
      level: 3,
      text: "Màn hình VinFast VF5: LCD 7 inch",
    },
    {
      type: "paragraph",
      text: "VinFast VF5 trang bị màn LCD 7 inch hiển thị tốc độ và thông tin hỗ trợ lái, cùng màn cảm ứng 8 inch cho hệ thống thông tin giải trí, hỗ trợ điều khiển giọng nói và âm thanh 4 loa, mặc dù không hỗ trợ Apple CarPlay hay Android Auto.",
    },
    { type: "gallery2", images: [car23, car24] },

    {
      type: "heading",
      level: 3,
      text: "Điều hòa VinFast VF5: Lọc bụi mịn PM2.5",
    },
    {
      type: "paragraph",
      text: "VinFast VF5 trang bị điều hòa tự động 1 vùng, lọc bụi mịn PM2.5 và có khả năng điều chỉnh bằng giọng nói. Cửa gió được bố trí gọn gàng và đẹp mắt theo phương ngang, mang lại không gian thoải mái và trong lành cho người sử dụng.",
    },
    { type: "image", src: car25 },

    {
      type: "heading",
      level: 3,
      text: "Cần số VinFast VF5: Dạng núm xoay",
    },
    {
      type: "paragraph",
      text: "VinFast VF5 trang bị cần số núm xoay điều khiển hộp số, không có chế độ P. Người lái cần về N và kéo phanh tay khi đỗ xe, tạo nên thiết kế tối giản và dễ sử dụng.",
    },
    { type: "gallery2", images: [car26, car27] },

    {
      type: "heading",
      level: 3,
      text: "Ghế ngồi VinFast VF5: Thể thao & Thoải mái",
    },
    {
      type: "paragraph",
      text: "VinFast VF5 sở hữu sàn phẳng, độ ngả ghế tốt và ghế thấp, thích hợp cho chuyến đi ngắn. Ghế ngồi bọc da với chỉ khâu tương phản, hàng ghế trước thoải mái và thể thao, thành ghế nhô cao. Ghế hành khách phía trước chỉnh cơ, tạo sự linh hoạt và tiện nghi cho người sử dụng.",
    },
    { type: "gallery2", images: [car28, car29] },

    {
      type: "heading",
      level: 3,
      text: "Tiện nghi VinFast VF5",
    },
    {
      type: "paragraph",
      text: "VinFast VF 5 được trang bị đầy đủ những công nghệ tiên tiến bậc nhất như:",
    },
    {
      type: "bullets",
      items: [
        "Giám sát hành trình cơ bản.",
        "Cảnh báo giao thông phía sau.",
        "Cảnh báo điểm mù",
        "Hỗ trợ đỗ xe phía sau",
        "Hỗ trợ phanh khẩn cấp…",
      ],
    },
    {
      type: "paragraph",
      text: "VinFast VF 5 được trang bị đầy đủ những công nghệ tiên tiến bậc nhất như:",
    },
    {
      type: "bullets",
      items: [
        "Trợ lý ảo điều khiển bằng giọng nói",
        "Giúp nâng tầm trải nghiệm và kiến tạo một phong cách sống đẳng cấp, văn minh, hiện đại cho người sở hữu.",
      ],
    },
    {
      type: "specTable",
      rows: [
        {
          label: "Âm thanh",
          value: "4 loa, âm thanh sắc nét",
        },
        {
          label: "Kết nối",
          value:
            "Wifi/Bluetooth, cổng USB ở 2 hàng ghế (tiện lợi cho hành khách)",
        },
        {
          label: "Điều hòa",
          value:
            "Chỉnh cơ 1 vùng, có màng lọc bụi PM2.5, mang đến không gian trong lành",
        },
        {
          label: "Che nắng",
          value:
            "Giảm tia UV, bảo vệ sức khỏe người dùng và hạn chế hư hại nội thất",
        },
        {
          label: "Túi khí",
          value:
            "6 túi khí (2 túi khí trước, 2 túi khí rèm, 2 túi khí bên hông hàng ghế trước)",
        },
      ],
    },
    { type: "gallery2", images: [car30] },
    {
      type: "heading",
      level: 3,
      text: "VinFast VF5 vận hành mạnh mẽ",
    },
    {
      type: "paragraph",
      text: "Với thiết kế hiện đại, độc đáo, được trang bị các công nghệ và tính năng thông minh vượt trội, khả năng vận hành mạnh mẽ, an toàn, VinFast VF5 Plus hội tụ đầy đủ các yếu tố để bạn chọn một chiếc xe điện đô thị lý tưởng.",
    },
    {
      type: "specTable",
      rows: [
        {
          label: "Loại động cơ",
          value: "Môtơ điện",
        },
        {
          label: "Công suất động cơ",
          value: "134 mã lực",
        },
        {
          label: "Mô-men xoắn",
          value: "135 Nm",
        },
        {
          label: "Dung lượng pin",
          value: "37,23 kWh",
        },
        {
          label: "Quãng đường di chuyển",
          value: "Trên 300 km sau mỗi lần sạc đầy",
        },
        {
          label: "Thời gian sạc",
          value: "30 phút sạc 70% pin",
        },
        {
          label: "Dẫn động",
          value: "Cầu trước (FWD)",
        },
      ],
    },
  ],
};
