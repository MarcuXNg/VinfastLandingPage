import { useState } from "react";
import { ChevronDown } from "lucide-react"; // icon mũi tên xổ xuống (đã có sẵn trong shadcn/lucide-react)

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="VinFast Logo"
            className="h-14 w-auto md:h-16 transition-all duration-300"
          />
        </div>

        {/* Navbar links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-800">
          <a href="#" className="hover:text-sky-700 transition">
            Trang chủ
          </a>

          {/* Dropdown Dòng xe */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="flex items-center gap-1 hover:text-sky-700 transition">
              Dòng xe <ChevronDown size={16} className="mt-[2px]" />
            </button>
            {showDropdown && (
              <div className="absolute top-full left-0 mt-2 w-44 rounded-xl bg-white border border-slate-200 shadow-md py-2 animate-fadeIn">
                <a
                  href="#models"
                  className="block px-4 py-2 hover:bg-slate-100 text-slate-700"
                >
                  VF 3
                </a>
                <a
                  href="#models"
                  className="block px-4 py-2 hover:bg-slate-100 text-slate-700"
                >
                  VF 5
                </a>
                <a
                  href="#models"
                  className="block px-4 py-2 hover:bg-slate-100 text-slate-700"
                >
                  VF 6
                </a>
                <a
                  href="#models"
                  className="block px-4 py-2 hover:bg-slate-100 text-slate-700"
                >
                  VF 7, 8, 9
                </a>
              </div>
            )}
          </div>

          <a href="#installment" className="hover:text-sky-700 transition">
            Mua xe trả góp
          </a>
          <a href="#promotion" className="hover:text-sky-700 transition">
            Chương trình khuyến mãi
          </a>
        </nav>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3 text-sm font-medium">
          <a
            href="#form"
            className="px-4 py-2 rounded-full border border-slate-700 text-slate-700 hover:bg-slate-100 transition"
          >
            Đăng ký lái thử
          </a>
          <a
            href="tel:0703711726"
            className="px-4 py-2 rounded-full bg-black text-white flex items-center gap-2 hover:bg-slate-800 transition"
          >
            📞 <span>0703 711 726</span>
          </a>
          <a
            href="#form"
            className="px-4 py-2 rounded-r-full rounded-l-full bg-sky-600 text-white font-semibold hover:bg-sky-500 transition"
          >
            Nhận Báo Giá Ngay
          </a>
        </div>

        {/* Mobile Menu (ẩn trên PC) */}
        <button className="md:hidden text-slate-700 hover:text-sky-700">
          ☰
        </button>
      </div>
    </header>
  );
}
