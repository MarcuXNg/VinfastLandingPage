// src/data/cars/details/vf3.js

import vf3_white from "../assets/vf3/vf3_white.webp";
import vf3_black from "../assets/vf3/vf3_black.webp";
import vf3_yellow from "../assets/vf3/vf3_yellow.webp";
import vf3_green from "../assets/vf3/vf3_green.webp";
import vf3_blue from "../assets/vf3/vf3_blue.webp";
import vf3_pink from "../assets/vf3/vf3_pink.webp";

import hero1 from "../assets/vf3/vf3_2.jpg";
import afterSpecs from "../assets/vf3/vf3_details_1.webp";
import boardSize from "../assets/vf3/vf3_details_2.webp";
import boardColors from "../assets/vf3/vf3_details_3.webp";
import poster from "../assets/vf3/vf3_details_4.webp";

import yellowModel from "../assets/vf3/vf3_details_5.webp";
import front1 from "../assets/vf3/vf3_details_6.webp";
import back1 from "../assets/vf3/vf3_details_7.webp";

import rear from "../assets/vf3/vf3_details_8.webp";
import front2 from "../assets/vf3/vf3_details_9.webp";
import back2 from "../assets/vf3/vf3_details_10.webp";

import lights from "../assets/vf3/vf3_details_11.webp";

import car1 from "../assets/vf3/vf3_details_12.webp";
import car2 from "../assets/vf3/vf3_details_13.webp";
import front3 from "../assets/vf3/vf3_details_14.webp";
import front4 from "../assets/vf3/vf3_details_15.webp";
import back4 from "../assets/vf3/vf3_details_16.webp";
import car3 from "../assets/vf3/vf3_details_17.webp";
import front5 from "../assets/vf3/vf3_details_18.webp";
import back5 from "../assets/vf3/vf3_details_19.webp";
import car4 from "../assets/vf3/vf3_details_20.webp";
import front6 from "../assets/vf3/vf3_details_21.webp";
import back6 from "../assets/vf3/vf3_details_22.webp";
import car5 from "../assets/vf3/vf3_details_23.webp";
import front7 from "../assets/vf3/vf3_details_24.webp";
import back7 from "../assets/vf3/vf3_details_25.webp";

export default {
  id: "vf3",
  name: "VinFast VF3",
  title: "VF3 – Nhỏ gọn, linh hoạt, năng lượng xanh",
  product_img: hero1,
  price: "287.040.000 đồng",

  // Thông số dùng cho bảng Specs top
  specs: {
    "Số chỗ ngồi": "4",
    "Động cơ": "01 Motor điện",
    "Công suất tối đa (kW)": "30",
    "Mô men xoắn cực đại (Nm)": "110",
    // "Tăng tốc": "5,3 s (0–50 km/h)",
    "Quãng đường chạy một lần sạc đầy (km)": "215",
    "Thời gian sạc nhanh (10%–70%)": "36 phút",
    "Dẫn động": "RWD",
    "Kích thước (D x R x C) (mm)": "3.190 x 1.679 x 1.652",
    "Khoảng sáng gầm xe (mm)": "175",
    "Dung lượng pin (kWh)": "18,64",
  },

  afterSpecsImage: afterSpecs,

  // ===== Swatches màu (đổi ảnh khi chọn) =====
  colors: [
    {
      id: "electric-blue",
      name: "Xanh dương đậm – Electric Blue",
      hex: "#2272FF",
      img: vf3_blue,
    },
    {
      id: "infinity-blanc",
      name: "Trắng – Infinity Blanc",
      hex: "#F4F5F7",
      img: vf3_white,
    },
    {
      id: "zenith-black",
      name: "Đen – Black Zenith",
      hex: "#000000",
      img: vf3_black,
    },
    {
      id: "summer-yellow",
      name: "Vàng nóc Trắng – Summer Yellow",
      hex: "#F0D44A",
      img: vf3_yellow,
    },
    {
      id: "urban-mint",
      name: "Xanh lá nhạt – Urban Mint",
      hex: "#C02B2B",
      img: vf3_green,
    },
    {
      id: "iris-berry",
      name: "Hồng tím – Iris Berry",
      hex: "#B98A92",
      img: vf3_pink,
    },
  ],

  // ====== BÀI VIẾT CHI TIẾT (renderer ContentBlocks sẽ đọc) ======
  sections: [
    {
      type: "heading",
      level: 3,
      text: "VinFast VF3 – Phân khúc xe cỡ nhỏ (Mini Car)",
    },
    {
      type: "paragraph",
      text: "VF 3 thuộc phân khúc xe cỡ nhỏ (Mini car) và là mẫu xe cỡ nhỏ đầu tiên được VinFast nghiên cứu phát triển. Dựa trên những đặc tính và thói quen giao thông của người tiêu dùng nội địa. Với ưu điểm nhỏ gọn, hiện đại, VF 3 phù hợp cho nhiều mục đích sử dụng và không gian vận hành. Đồng thời là lựa chọn di chuyển xanh, thông minh và năng động cho tất cả mọi người.",
    },
    {
      type: "metrics",
      items: [
        { value: "215 km", label: "Quãng đường/1 lần sạc" },
        { value: "36 phút", label: "Sạc nhanh (10%→70%)" },
        { value: "5,3 s", label: "Tăng tốc (0–50 km/h)" },
      ],
    },

    // Bảng kích thước & bảng màu
    { type: "gallery2", images: [boardSize, boardColors] },

    {
      type: "heading",
      level: 3,
      text: "Màu ngoại thất: VinFast VF3 mới",
    },
    {
      type: "paragraph",
      text: "VinFast VF3 dành cho đối tượng khách hàng trẻ trung, năng động nên xe được trang bị lên đến 9 màu ngoại thất. Với 9 tùy chọn màu sắc trẻ trung và thời thượng, VinFast VF 3 giúp người dùng có thể tự tin thể hiện phong cách và cá tính riêng của mình. Hiện tại, xe Vinfast VF3 có 9 màu ngoại thất.",
    },
    { type: "image", src: poster },

    { type: "heading", level: 4, text: "Bao gồm 4 màu ngoại thất cơ bản:" },
    {
      type: "bullets",
      items: [
        "Trắng – Infinity Blanc",
        "Xanh dương đậm – Electric Blue",
        "Xám – Zenith Grey (Xám xi măng)",
        "Đỏ – Crimson Red",
      ],
    },
    {
      type: "heading",
      level: 3,
      text: "5 màu phối nâng cao đậm chất phong cách:",
    },
    {
      type: "bullets",
      items: [
        "Vàng nóc Trắng – Summer Yellow",
        "Hồng tím – Iris Berry",
        "Xanh lá nhạt – Urban Mint",
        "Xanh dương nhạt – Aquatic Azure",
        "Hồng phấn – Rose Pink",
      ],
    },

    { type: "image", src: yellowModel },

    {
      type: "heading",
      level: 3,
      text: "Thông số kỹ thuật VinFast VF3",
    },
    {
      type: "paragraph",
      text: "VinFast VF3 có sức chứa 4 người và dung tích khoang chứa hành lý là 36L khi ghế cuối chưa gập. Khi gập ghế cuối, dung tích khoang hành lý có thể lên tới 285L. Xe cũng có đường kính quay đầu tối thiểu là 8.1m, giúp di chuyển dễ dàng trong không gian đô thị hạn chế. Với những thông số này, VinFast VF3 đảm bảo sự linh hoạt và ổn định cho việc di chuyển trong thành phố.",
    },
    { type: "gallery2", images: [front1, back1] },

    {
      type: "heading",
      level: 3,
      text: "Ngoại thất VF3: Hiện đại & đồng nhất",
    },
    {
      type: "paragraph",
      text: "VinFast VF3 là mẫu xe điện cỡ nhỏ đầu tiên được VinFast phát triển, nhắm đến nhu cầu giao thông của người tiêu dùng Việt Nam. Xe có khoảng sáng gầm xe đạt 191 mm và được trang bị lốp 16 inch, mang lại khả năng di chuyển linh hoạt.",
    },
    { type: "image", src: rear },
    {
      type: "heading",
      level: 3,
      text: "Động cơ & Pin VinFast VF3",
    },
    {
      type: "paragraph",
      text: "VF 3 được nhà sản xuất trang bị động cơ điện có công suất và mô-men xoắn đủ mạnh để đáp ứng nhu cầu di chuyển trong thành phố. Khả năng tăng tốc từ 0 – 50 km/h trong 5,3 giây giúp xe di chuyển linh hoạt và nhanh nhẹn. VF 3 sử dụng loại pin LFP có độ bền cao, an toàn và ít bị chai pin hơn so với các loại pin khác. Quãng đường di chuyển 215 km cho 1 lần sạc đầy, đáp ứng được nhu cầu di chuyển hàng ngày của đa số người dùng.",
    },
    { type: "gallery2", images: [front2, back2] },
    {
      type: "heading",
      level: 3,
      text: "Thiết kế đèn pha vuông vức; Gương chiếu hậu và logo chữ V",
    },
    {
      type: "paragraph",
      text: "Đặc biệt, cặp đèn pha và gương chiếu hậu vuông vức, logo chữ V hình cánh chim cách điệu ở cản trước và sau xe là những điểm nhấn tạo nên một ngôn ngữ thiết kế đồng nhất, mang đến hiệu ứng thị giác năng động và ấn tượng cho thiết kế tổng thể của xe.",
    },
    { type: "image", src: lights },
    {
      type: "heading",
      level: 3,
      text: "VinFast VF3: Mẫu xe điện “Mini” trong phân khúc A",
    },
    {
      type: "paragraph",
      text: "VinFast VF3 hướng đến mục tiêu trở thành mẫu xe dành cho mọi người, mọi nhà. VinFast VF 3 sẽ có nhiều lựa chọn về màu sắc để người tiêu dùng lựa chọn.",
    },
    { type: "gallery2", images: [front2, back2] },
    {
      type: "heading",
      level: 3,
      text: "VinFast VF3: Crossover đô thị cỡ nhỏ mạnh mẽ",
    },
    {
      type: "paragraph",
      text: "VF 3 mang kiểu dáng crossover cỡ nhỏ, vuông vức, tạo cảm giác mạnh mẽ và cá tính. Xe có kích thước tổng thể Dài x Rộng x Cao là 3.190 x 1.679 x 1.652 mm, chiều dài cơ sở 2.075 mm và khoảng sáng gầm xe 191 mm, nhờ vậy dễ dàng di chuyển trong thành phố và linh hoạt vượt qua các địa hình gồ ghề.",
    },
    { type: "image", src: car1 },
    {
      type: "heading",
      level: 3,
      text: "VinFast VF3: Đèn LED hiện đại và gương chiếu hậu tích hợp đèn báo rẽ",
    },
    {
      type: "paragraph",
      text: "VF 3 được trang bị cụm đèn trước full LED với thiết kế hiện đại, sắc sảo, tích hợp chức năng tự động bật/tắt và đèn LED ban ngày. Cụm đèn hậu LED với thiết kế chữ “V” đặc trưng của VinFast, tạo điểm nhấn cho phần đuôi xe. Gương chiếu hậu chỉnh điện, có tích hợp đèn báo rẽ, giúp người lái dễ dàng quan sát phía sau.",
    },
    { type: "gallery2", images: [front3, front3] },
    {
      type: "heading",
      level: 3,
      text: "VinFast VF3: La-zăng 16 inch thể thao và lốp 195/55R16",
    },
    {
      type: "paragraph",
      text: "Đặc biệt, nhà sản xuất đã thiết kế VF 3 với la-zăng 16 inch hợp kim nhôm kiểu dáng thể thao, góp phần tăng thêm sự năng động cho ngoại thất xe. Lốp xe có kích thước 195/55R16, phù hợp với kích thước xe và mang lại khả năng vận hành ổn định.",
    },
    { type: "image", src: car2 },
    {
      type: "heading",
      level: 3,
      text: "Cảm hứng thiết kế từ các mẫu SUV hạng sang",
    },
    {
      type: "paragraph",
      text: "VinFast VF3 có thiết kế góc cạnh, vuông vức tương tự như các đàn anh SUV thậm chí là xe hạng sang như: Mercedes G-Class, Land Rover Defender , Toyota FJ Cruiser, Suzuki Jimny… với ngoại hình như ảnh công bố cho thấy VinFast đã dành tâm huyết không nhỏ cho mẫu xe này.",
    },
    { type: "gallery2", images: [front4, back4] },
    {
      type: "heading",
      level: 3,
      text: "Chau chuốt từng góc cạnh",
    },
    {
      type: "paragraph",
      text: "Phối màu cho nữ giới: VinFast VF3 có thiết kế mạnh mẽ của một chiếc SUV do đó sẽ hướng đến đối tượng nam giới nhiều hơn. Từng chi tiết góc cạnh đều rất chau chuốt và ngoại thất VF3 sẽ có nhiều màu sắc để khách hàng lựa chọn.",
    },
    { type: "image", src: car3 },
    {
      type: "heading",
      level: 3,
      text: "Giải pháp di chuyển an toàn mới",
    },
    {
      type: "paragraph",
      text: "Tuy nhiên VinFast VF 3 được định hướng để phổ cập xe ô tô điện tới đại đa số người dân Việt Nam, mang tới giải pháp di chuyển an toàn, tiện lợi và thông minh cho tất cả mọi người.",
    },
    { type: "gallery2", images: [front5, back5] },
    {
      type: "heading",
      level: 3,
      text: "Nội thất VF 3: Không gian tối ưu – Thoải mái cho 4 người",
    },
    {
      type: "paragraph",
      text: "Nội thất của VF 3 – xe ô tô điện mới nhất của VinFast được nhiều người dùng quan tâm. Mẫu xe mini cart này sở hữu ưu điểm nhỏ gọn với không gian tối ưu, là lựa chọn thoải mái cho các cá nhân và gia đình.",
    },
    { type: "image", src: car4 },
    {
      type: "heading",
      level: 3,
      text: "Không gian nội thất rộng rãi",
    },
    {
      type: "paragraph",
      text: "Quay trở lại một chút về thiết kế ngoại thất, chúng ta thấy phần đuôi xe có thiết kế vuông vức làm gia tăng không gian nội thất ở phần đuôi xe. Và là dòng xe ô tô điện nên động cơ nhỏ gọn hơn xe xăng rất nhiều do đó phần đầu xe của VF 3 có thể thiết kế ngắn hơn để tối ưu hơn cho không gian nội thất cho 5 chỗ ngồi bên trong.",
    },
    { type: "gallery2", images: [front6, back6] },
    {
      type: "heading",
      level: 3,
      text: "Vô lăng D-CUT VinFast VF 3",
    },
    {
      type: "paragraph",
      text: "Vô lăng VF3 có thiết kế dạng 2 chấu thể thao và có 1 chút D-CUT để tăng không gian cho người lái. Nhìn qua hình ảnh chúng ta có thể thấy Vô lăng được tích hợp các phím giải trí tăng giảm âm lượng cũng như chế độ thoại rảnh tay. Ở phân khúc này chúng ta không kỳ vọng VinFast bổ sung tính năng cruise control cho VF 3 vì với mẫu xe này sẽ không hướng đến việc di chuyển thường xuyên trên đường cao tốc.",
    },
    { type: "image", src: car5 },
    {
      type: "heading",
      level: 3,
      text: "VinFast VF3 xe bình dân nhưng nội thất sang trọng",
    },
    {
      type: "paragraph",
      text: "VF3 được thiết kế không gian nội thất khá hiện đại, và hướng đến sự sang trọng với các chi tiết đường chỉ khâu ở mặt táp lô và các vị trí ốp hai bên cánh cửa và vô lăng thường xuất hiện ở các dòng xe sang (Có thể VinFast sẽ dùng vật liệu nhựa nhưng giả vân chỉ để tạo sự sang trọng mà vẫn đảm bảo không làm tăng giá thành sản phẩm). Phần taplo chiếm diện tích không quá lớn do đó chúng ta có thể thấy không gian nội thất ở ghế lái và ghế phụ khá rộng rãi.",
    },
    { type: "gallery2", images: [front7, back7] },
    {
      type: "heading",
      level: 3,
      text: "Khả năng vận hành Vinfast VF3",
    },
    {
      type: "paragraph",
      text: "Xe được trang bị động cơ điện và pin có quãng đường di chuyển đáp ứng tốt nhu cầu và thói quen sử dụng hàng ngày của đại đa số người Việt. Theo một số thông tin rò rỉ VinFast VF 3 có quãng đường di chuyển lên đến 285 km cho 1 lần sạc đầy, và khả năng tăng tốc từ 0-100km chỉ trong <12S.",
    },
    {
      type: "paragraph",
      text: "Ngoài ra với cấu trúc của xe điện thường thì các khối Pin được đặt dưới sàn xe, do đó trọng lượng xe được tập trung ở giữa xe và sàn xe. Từ đó giúp xe vận hành ổn định, vào cua êm hơn, ít rung lắc giảm thiểu những nguy cơ lật xe. Ngoài ra, pack pin gần như chiếm toàn bộ phần sàn xe giúp gia cố thêm độ chắc chắn cho gầm xe khi có những tác động như va chạm ngang thân xe, giảm bớt các tác động của ngoại lực đảm bảo an toàn hơn cho người ngồi trên xe.",
    },
  ],
};
