export default function Footer() {
  return (
    <footer
      className="
    bg-[#121212] text-slate-300
    [&_a:hover]:underline          /* gạch chân khi hover mọi <a> bên trong */
    [&_a]:underline-offset-2      /* khoảng cách gạch chân dễ đọc */
    [&_a]:decoration-slate-400/60 /* màu gạch mặc định */
    [&_a:hover]:decoration-white  /* khi hover đổi theo màu chữ */
  "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid 4 cột: 1 cột lớn + 3 cột link */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Cột liên hệ (to) */}
          <div className="md:col-span-2">
            <img
              src="/logo.svg"
              alt="VinFast"
              className="h-8 w-auto mb-6 opacity-90"
            />

            <p className="text-slate-400 mb-2">Liên hệ</p>
            <h3 className="text-2xl font-semibold text-white pb-4 border-b border-slate-600/50">
              Vinfast Kim Nhật Phát - Tân Uyên
            </h3>

            <div className="mt-4 space-y-2 text-[15px] leading-relaxed">
              <p>
                <span className="text-slate-400">Địa chỉ: </span>
                1121 ĐT746, Khu phố Khánh Bình, Phường Tân Hiệp, Thành Phố Hồ
                Chí Minh
              </p>
              <p>
                <span className="text-slate-400">Hotline: </span>
                <a href="tel:070371196" className="hover:text-white">
                  0967 034 207
                </a>
              </p>
              <p>
                <span className="text-slate-400">Email: </span>
                <a
                  href="mailto:trituan.vinfastchevrolet@gmail.com"
                  className="hover:text-white break-all"
                >
                  maiquocthien0810@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Cột 1 */}
          <div>
            <h4 className="text-slate-400 mb-4">Động cơ điện</h4>
            <ul className="space-y-3">
              {["VF9", "VF8", "VF7", "VF6", "VF5", "VF3"].map((m) => (
                <li key={m}>
                  <a href="#" className="hover:text-white transition">
                    {m}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 2 */}
          <div>
            <h4 className="text-slate-400 mb-4">Dòng xe điện</h4>
            <ul className="space-y-3">
              {["EC Van", "Limo Green"].map((t) => (
                <li key={t}>
                  <a
                    href="/product/limogreen"
                    className="hover:text-white transition"
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3 */}
          <div className="md:col-start-4">
            <h4 className="text-slate-400 mb-4">Tìm hiểu thêm</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-white transition">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="#models" className="hover:text-white transition">
                  Mua xe trả góp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bar bản quyền */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Vinfast Kim Nhật Phát-Tân Uyên.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">
              Chính sách bảo mật
            </a>
            <a href="#" className="hover:text-white">
              Điều khoản
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
