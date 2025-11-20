// src/data/cars/details/vf9.js

import vf9_red from "../assets/vf9/vf9_red.webp";
import vf9_black from "../assets/vf9/vf9_black.webp";
import vf9_white from "../assets/vf9/vf9_white.webp";

import hero1 from "../assets/vf9/vf9_4.webp";

import car1 from "../assets/vf9/vf9_details_1.jpg";
import car2 from "../assets/vf9/vf9_details_2.webp";
import car3 from "../assets/vf9/vf9_details_3.webp";
import car4 from "../assets/vf9/vf9_details_4.webp";
import car5 from "../assets/vf9/vf9_details_5.webp";
import car6 from "../assets/vf9/vf9_details_6.webp";
import car7 from "../assets/vf9/vf9_details_7.webp";
import car8 from "../assets/vf9/vf9_details_8.webp";
import car9 from "../assets/vf9/vf9_details_9.webp";
import car10 from "../assets/vf9/vf9_details_10.webp";
import car11 from "../assets/vf9/vf9_details_11.webp";
import car12 from "../assets/vf9/vf9_details_12.webp";
import car13 from "../assets/vf9/vf9_details_13.webp";
import car14 from "../assets/vf9/vf9_details_14.webp";
import car15 from "../assets/vf9/vf9_details_15.webp";
import car16 from "../assets/vf9/vf9_details_16.webp";
import car17 from "../assets/vf9/vf9_details_17.webp";
import car18 from "../assets/vf9/vf9_details_18.webp";
import car19 from "../assets/vf9/vf9_details_19.webp";
import car20 from "../assets/vf9/vf9_details_20.webp";
import car21 from "../assets/vf9/vf9_details_21.webp";
import car22 from "../assets/vf9/vf9_details_22.webp";
import car23 from "../assets/vf9/vf9_details_23.webp";
import car24 from "../assets/vf9/vf9_details_24.webp";
import car25 from "../assets/vf9/vf9_details_25.webp";
import car26 from "../assets/vf9/vf9_details_26.webp";
import car27 from "../assets/vf9/vf9_details_27.webp";
import car28 from "../assets/vf9/vf9_details_28.webp";
import car29 from "../assets/vf9/vf9_details_29.webp";
import car30 from "../assets/vf9/vf9_details_30.webp";
import car31 from "../assets/vf9/vf9_details_31.webp";
import car32 from "../assets/vf9/vf9_details_32.webp";

export default {
  id: "vf9",
  name: "VinFast vf9",
  title: "vf9",
  product_img: hero1,
  price: "1.439.040.000 đồng",
  priceTabs: [
    {
      id: "eco",
      label: "vf9 Eco",

      price: "1.439.040.000 đồng",
    },
    {
      id: "plus",
      label: "vf9 Plus",
      price: "1.631.040.000 đồng",
    },
  ],

  specs: {
    "Số chỗ ngồi": "7",
    "Động cơ": "2 motor 150 kW",
    "Công suất tối đa (kW)": "402/300",
    "Mô-men xoắn cực đại (Nm)": "620",
    "Quãng đường 1 lần sạc (km)": "626",
    "Thời gian sạc nhanh (10%–70%)": "24 phút",
    "Dẫn động": "AWD/2 cầu toàn thời gian",
    "Kích thước (D x R x C) (mm)": "5.118 x 2.254 x 1.696",
    "Khoảng sáng gầm xe (mm)": "173.7",
    "Dung lượng pin (kWh)": "123",
  },
  specsByTrim: {
    eco: {
      "Số chỗ ngồi": "7",
      "Động cơ": "2 motor 150 kW",
      "Công suất tối đa (kW)": "402/300",
      "Mô-men xoắn cực đại (Nm)": "620",
      "Quãng đường 1 lần sạc (km)": "626",
      "Thời gian sạc nhanh (10%–70%)": "24 phút",
      "Dẫn động": "AWD/2 cầu toàn thời gian",
      "Kích thước (D x R x C) (mm)": "5.118 x 2.254 x 1.696",
      "Khoảng sáng gầm xe (mm)": "173.7",
      "Dung lượng pin (kWh)": "123",
    },
    plus: {
      "Số chỗ ngồi": "7",
      "Động cơ": "2 motor 150 kW",
      "Công suất tối đa (kW)": "402/300",
      "Mô-men xoắn cực đại (Nm)": "620",
      "Quãng đường 1 lần sạc (km)": "602",
      "Thời gian sạc nhanh (10%–70%)": "24 phút",
      "Dẫn động": "AWD/2 cầu toàn thời gian",
      "Kích thước (D x R x C) (mm)": "5.118 x 2.254 x 1.696",
      "Khoảng sáng gầm xe (mm)": "183.5",
      "Dung lượng pin (kWh)": "123",
    },
  },
  afterSpecsImage: car1,

  // ===== Swatches màu (đổi ảnh khi chọn) =====
  colors: [
    {
      id: "black",
      name: "đen",
      hex: "#000000",
      img: vf9_black,
    },
    {
      id: "red",
      name: "Đỏ",
      hex: "#FF0000",
      img: vf9_red,
    },
    {
      id: "infinity-blanc",
      name: "Trắng – Infinity Blanc",
      hex: "#F4F5F7",
      img: vf9_white,
    },
  ],

  // ====== BÀI VIẾT CHI TIẾT (renderer ContentBlocks sẽ đọc) ======
  sections: [
    {
      type: "heading",
      level: 3,
      text: "Giới thiệu VinFast VF9",
    },
    {
      type: "paragraph",
      text: "Khả năng vận hành lý tưởng, thiết kế nội – ngoại thất ấn tượng cùng với nhiều tính năng thông minh, hiện đại là lý do khiến xe ô tô điện VinFast VF 9 “bùng nổ” ngay từ khi vừa ra mắt. Đánh giá tổng quan VinFast VF 9 về thông số kỹ thuật, công nghệ thông minh vượt trội được trang bị để khách hàng hiểu hơn về thông điệp chủ đạo của VinFast – “Tương lai của di chuyển”.",
    },
    {
      type: "metrics",
      items: [
        { value: "438 km (NEDC)", label: "Quãng đường/1 lần sạc" },
        { value: "620 Nm", label: "Mô men xoắn cực đại" },
        { value: "402 HP", label: "Công suất tối đa" },
      ],
    },
    { type: "gallery2", images: [car2, car3] },

    {
      type: "heading",
      level: 3,
      text: "Bảng màu xe VF 9 thời thượng, thu hút mọi ánh nhìn",
    },
    {
      type: "paragraph",
      text: "Xe điện VinFast VF 9 không chỉ gây ấn tượng với khả năng vận hành mạnh mẽ, tính năng thông minh mà còn sở hữu ngoại hình mạnh mẽ, thu hút mọi ánh nhìn. Đặc biệt, bảng màu VF 9 bao gồm 8 tùy chọn màu sắc hiện đại đón đầu xu hướng màu sắc thế giới và phù hợp với thị hiếu người Việt.",
    },
    {
      type: "imageCardCarousel",
      perPage: 2, // 2 card mỗi slide
      cards: [
        {
          img: car4,
          title: "VF 9 Sunset Orange – Cá tính nổi bật",
          text: "Sunset Orange là màu sắc được VinFast bổ sung trong bộ sưu tập màu xe mới. Đây cũng là gam màu dẫn đầu trong xu hướng màu xe thế giới hiện nay. Xe màu Sunset Orange hội tụ sự sự cá tính, bùng cháy và bản lĩnh.",
        },
        {
          img: car5,
          title: "VF 9 Desat Silver – Phong độ trường tồn",
          text: "Bảng màu VF 9 lần này vẫn duy trì màu Desat Silver (màu bạc), màu đại diện cho sự tinh khiết nhưng cũng toát lên sự sang trọng. Chủ sở hữu những chiếc xe màu bạc thường để lại ấn tượng về sự bình tĩnh và tự tin.",
        },
        {
          img: car6,
          title: "VF 9 Neptune Grey – Nội tâm phóng khoáng",
          text: "Neptune Grey là gam màu mới nổi, tiềm ẩn những vẻ đẹp phóng khoáng và mới lạ. Đây là màu sắc đại diện cho sự tinh tế, quyền lực và trưởng thành. Do vậy, VinFast VF 9 Neptune Grey được nhiều giới doanh nhân đặc biệt yêu thích.",
        },
        {
          img: car7,
          title: "VF 9 Brahminy White – Phong cách thanh lịch",
          text: "Không quá khi nói rằng, Brahminy White là gam màu “quốc dân”. Với ưu điểm không bị lỗi mốt, VF 9 Brahminy White toát lên sự hiện đại, sang trọng và tinh tế. Ở góc nhìn phong thủy, VinFast VF 9 màu trắng phù hợp với những khách hàng thuộc mệnh Thổ, Thủy và Kim.",
        },
        {
          img: car8,
          title: "VF 9 Jet Black – Thần thái sang trọng ",
          text: "Jet Black còn được biết đến là màu đen bóng với ưu điểm có thể tạo ra chiều sâu khi di chuyển nhờ việc phản chiếu được sự ánh sáng đa chiều trên thân xe. Gam màu này toát lên sự bí ẩn, sang trọng, mang đến sự tinh tế và hòa hợp.",
        },
        {
          img: car9,
          title: "VF 9 VinFast Blue – Sức sống bền bỉ",
          text: "Ở bộ sưu tập màu sơn ngoại thất xe VF 9 lần này, VinFast Blue là màu xanh độc đáo được nhiều khách hàng yêu thích. Gam màu này biểu tượng cho sự dịu mát, linh hoạt. Do vậy, màu xe VinFast VF 9 Blue phù hợp với đại đa số người dùng, đặc biệt những ai ưa thích sự sáng tạo, mới mẻ.",
        },
        {
          img: car10,
          title: "VF 9 Crimson Red – Vẻ đẹp quyền lực",
          text: `Crimson Red là màu sắc mới được cập nhật nhằm đón đầu xu hướng màu xe mới. Crimson Red vốn là gam đỏ sặc sỡ nhưng không quá gắt, tạo nên sự quyền lực, quý tộc cho chủ sở hữu. Đây là một trong ba màu sơn ngoại thất xe VF 9 mới nhất trong bộ sưu tập màu thiết kế xe VF 9 lần này.`,
        },
        {
          img: car11,
          title: "VF 9 Deep Ocean – Năng lượng bứt phá",
          text: "Xanh lá là màu xec độc đáo, thể hiện rõ nét thông điệp hướng tới giao thông xanh, thân thiện với môi trường của VinFast. Đặc biệt, màu sắc này còn toát lên sự tươi mới, đánh dấu sự khởi đầu tràn đầy năng lượng.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "Sở hữu bảng màu đa dạng và thời thượng, VF 9 mang đến cho người nhiều sự lựa chọn màu xe khác nhau giúp bật “tone” cá tính. Tại thị trường Việt Nam VF 9 ra mắt với 2 phiên bản VF 9 Eco và VF 9 Plus với 8 màu sắc đón đầu xu hướng: Deep Ocean, Crimson Red, Blue, Jet Black, Brahminy White, Neptune Grey, Desat Silver, Sunset Orange.",
    },
    { type: "gallery2", images: [car12, car13] },

    {
      type: "heading",
      level: 3,
      text: "Ngoại thất VinFast VF9",
    },
    {
      type: "paragraph",
      text: "VinFast VF 9 là mẫu SUV điện hạng E đa dụng với vóc dáng bề thế, mạnh mẽ, khoang cabin rộng rãi và tiện nghi. Ô tô điện VF 9 có chiều rộng lớn hơn so với một số dòng xe cùng phân khúc và khoảng sáng gầm xe phù hợp với điều kiện giao thông ở Việt Nam – mưa nhiều và thường xuyên xảy ra ngập lụt ở các thành phố lớn. Cụ thể: Kích thước (dài x rộng x cao): 5.120 x 2.000 x 1.721 (mm); Chiều dài cơ sở: 3.150mm; Khoảng sáng gầm xe không tải: 204mm.",
    },
    { type: "image", src: car14 },

    {
      type: "heading",
      level: 3,
      text: "Thiết kế đầu & đuôi xe VinFast VF 9",
    },
    {
      type: "paragraph",
      text: "Điểm nổi bật ở ngoại hình VF 9 vẫn là dải đèn LED có logo chữ “V” lồng vào nhau ở đầu và đuôi xe tạo sự liên kết chặt chẽ và khát vọng vươn xa của VinFast.",
    },
    { type: "gallery2", images: [car15, car16] },

    {
      type: "heading",
      level: 3,
      text: "Thiết kế thân xe VinFast VF9",
    },
    {
      type: "paragraph",
      text: "Với kích thước tương đầu như các mẫu SUV Full Size, Thân xe VF9 nhìn trường dài; mạnh mẽ nam tính. Mâm xe có kích thước lớn với 5 chấu tạo hình giống như “Hoa anh đào” được phối 2 màu đen và ánh kim tạo nên sự sang trọng và ấn tượng hơn cho xe.",
    },
    { type: "image", src: car17 },
    {
      type: "paragraph",
      text: "Điểm nhấn đặc biệt nằm ở thân xe với logo chữ “V” màu bạc nổi bật ở cột C làm tăng độ nhận diện thương hiệu VinFast. Thiết kế phần cản sau và cánh gió thể thao thể hiện sự mạnh mẽ, bề thế, khỏe khoắn trong ngoại hình của ô tô điện VF 9.",
    },
    { type: "gallery2", images: [car18, car19] },
    {
      type: "paragraph",
      text: "Được thiết kế tính khí động học cao, mẫu xe này bố trí hốc hút gió ở đầu và mui xe với tay nắm cửa ẩn vào thân xe, không có lưới tản nhiệt như các dòng xe động cơ đốt trong. Cụm đèn pha đặt dưới dải đèn LED tạo hình cánh chim, trong khi đèn sương mù được tích hợp ở cản trước càng làm tăng thêm tính hiện đại và phong cách cho mẫu xe này.",
    },
    { type: "image", src: car20 },
    {
      type: "paragraph",
      text: "Khả năng vận hành lý tưởng, thiết kế nội – ngoại thất ấn tượng cùng với nhiều tính năng thông minh, hiện đại là lý do khiến xe ô tô điện VinFast VF 9 “bùng nổ” ngay từ khi vừa ra mắt.",
    },
    { type: "gallery2", images: [car21, car22] },

    {
      type: "heading",
      level: 3,
      text: "Nội thất VinFast VF9",
    },
    {
      type: "paragraph",
      text: "Là một trong những yếu tố ảnh hưởng đến giá trị chiếc xe, nội thất VF 9 toát lên sự tinh tế và hiện đại. Mẫu xe này không sử dụng cụm đồng hồ phía sau vô lăng và được giảm thiểu các nút bấm vật lý. Thay vào đó, các thao tác sẽ tập trung về màn hình lớn 15,6 inch đặt ở trung tâm bảng taplo, từ đó đảm bảo sự tập trung của người lái khi điều khiển xe, giúp quá trình vận hành thuận tiện và an toàn hơn.",
    },
    { type: "image", src: car23 },
    {
      type: "paragraph",
      text: "Hai phiên bản Eco và Plus của VinFast VF 9 có trang bị số chỗ ngồi khác nhau. Theo đó, bản Eco có 7 chỗ ngồi, bản Plus có 2 tùy chọn 6 chỗ ngồi và 7 chỗ ngồi. Đặc biệt ở tùy chọn 6 chỗ ngồi bản Plus, hàng ghế thứ 2 được tách riêng 2 ghế ngồi kiểu thương gia. Không gian nội thất của VF 9 được thiết kế rộng rãi, tạo sự thoải mái cho người lái và hành khách.",
    },
    { type: "gallery2", images: [car24, car25] },
    {
      type: "paragraph",
      text: "Điểm làm VinFast VF9 trở nên khác biệt trong phân khúc E-SUV chính là nội thất quá đẳng cấp và tiện nghi. VinFast An Thái có thể khẳng định VF9 được làm ra để “tái định nghĩa” xe của chủ tịch là như thế nào. Bởi các bố trí công nghệ trên xe đều hướng đến việc tạo sự tiện lợi cho mỗi người.",
    },
    { type: "image", src: car26 },
    {
      type: "paragraph",
      text: "Điều này thể hiện qua việc VF9 trang bị màn hình trung tâm phụ cho hàng 2 và màn hình này có thể điều chỉnh mọi hoạt động như màn hình chính. Và ngay dưới màn hình là 2 cổng sạc riêng biệt, có thể sạc cùng lúc 2 thiết bị. Đặc biệt, hàng ghế 2 có hộp để đồ vừa đủ để đựng đồ cá nhân.",
    },
    { type: "gallery2", images: [car27, car28] },
    {
      type: "paragraph",
      text: "Hàng ghế thứ 3 trên VinFast VF9 có 2 cổng sạc riêng, màn hình phụ 8 inch, màn hình trung tâm 15,6 inch, hệ thống 13 loa. Xe có trần kính, hệ thống ion hóa và lọc không khí trong điều hòa.",
    },
    { type: "image", src: car29 },
    {
      type: "paragraph",
      text: "Một điểm đặc biệt ở phiên bản VF 9 Plus là khách hàng sẽ có tùy chọn chỗ 6 hoặc 7 chổ ngồi: Tùy chọn 6 chỗ ngồi có ghế cơ trưởng, chỉnh điện 8 hướng, massage, thông gió, sưởi, bệ tì tay, hộp đồ, chi phí phụ thêm 32,23 triệu đồng (đã bao gồm VAT). Đây là mẫu xe hiếm trong phân khúc SUV đô thị cỡ lớn tại Việt Nam.",
    },
    { type: "gallery2", images: [car30, car31] },

    {
      type: "heading",
      level: 3,
      text: "Tiện nghi VinFast VF9",
    },
    {
      type: "paragraph",
      text: "Không gian nội thất xe điện VinFast VF9 được thiết kế tinh giản, tạo độ rộng thoáng, thoải mái cho người ngồi bên trong. VF9 có thiết kế gồm 5 chỗ ngồi, 2 hàng ghế thoải mái.",
    },
    { type: "image", src: car32 },
    {
      type: "paragraph",
      text: "Cụm đồng hồ phía trước có màn hình hắt HUD hiển thị tốc độ, dung lượng pin. Màn hình giải trí trung tâm 15,6 inch giảm nút bấm vật lý. VF9 có ghế sưởi (bản Eco) và ghế sưởi – thông gió (bản Plus), phù hợp cho mùa đông. Xe có chế độ lọc không khí cabin Combi 1.0.",
    },
  ],
};
