// src/components/header.jsx
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { cars } from "../data/cars";

const slugOf = (c) =>
  (c.id || c.name || "")
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9-]/g, "");

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCarsOpen, setMobileCarsOpen] = useState(false);
  const wrapRef = useRef(null);
  const navigate = useNavigate();

  const group1 = cars.filter((c) => /vf3|vf5|vf6/i.test(slugOf(c)));
  const group2 = cars.filter((c) => /vf7|vf8|vf9/i.test(slugOf(c)));

  // Đóng dropdown khi click ra ngoài (desktop)
  useEffect(() => {
    const onDocClick = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setShowDropdown(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  // Đóng bằng phím Esc
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setShowDropdown(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="VinFast Logo"
            className="h-12 w-auto md:h-14 transition-all duration-300"
          />
        </Link>

        {/* Navbar (desktop) */}
        <nav
          ref={wrapRef}
          className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-800 relative"
        >
          <Link to="/" className="hover:text-sky-700 transition">
            Trang chủ
          </Link>

          {/* Dropdown Dòng xe (click to toggle) */}
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-sky-700 transition"
              onClick={(e) => {
                e.stopPropagation();
                setShowDropdown((v) => !v);
              }}
              aria-expanded={showDropdown}
              aria-haspopup="true"
              aria-controls="cars-menu"
            >
              Dòng xe
              <ChevronDown
                size={16}
                className={`mt-[2px] transition-transform duration-200 ${
                  showDropdown ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>

            {showDropdown && (
              <div
                id="cars-menu"
                className="absolute top-full left-0 mt-2 w-60 rounded-xl bg-white border border-slate-200 shadow-lg py-2 animate-fadeIn"
                // không còn hover handler — chỉ đóng khi click ngoài, Esc, hoặc chọn link
              >
                {group1.map((c) => (
                  <Link
                    key={slugOf(c)}
                    to={`/product/${slugOf(c)}`}
                    className="block px-4 py-2 hover:bg-slate-100 text-slate-700"
                    onClick={() => setShowDropdown(false)}
                  >
                    {c.name}
                  </Link>
                ))}
                <div className="my-2 h-px bg-slate-200" />
                {group2.map((c) => (
                  <Link
                    key={slugOf(c)}
                    to={`/product/${slugOf(c)}`}
                    className="block px-4 py-2 hover:bg-slate-100 text-slate-700"
                    onClick={() => setShowDropdown(false)}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a href="#installment" className="hover:text-sky-700 transition">
            Mua xe trả góp
          </a>
        </nav>

        {/* CTA (desktop) */}
        <div className="hidden md:flex items-center gap-3 text-sm font-medium">
          <a
            href="#form"
            className="px-4 py-2 rounded-full border border-slate-700 text-slate-700 hover:bg-slate-100 transition"
          >
            Đăng ký lái thử & nhận báo giá
          </a>
          <a
            href="tel:0967034207"
            className="px-4 py-2 rounded-full bg-black text-white flex items-center gap-2 hover:bg-slate-800 transition"
          >
            📞 <span>0967 034 207</span>
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-slate-700 hover:text-sky-700"
          aria-label="Mở menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          mobileOpen ? "max-h-[420px]" : "max-h-0"
        } border-t border-slate-200 bg-white`}
      >
        <div className="px-4 py-3 space-y-1 text-slate-800 font-medium">
          <Link
            to="/"
            className="block px-2 py-2 rounded hover:bg-slate-100"
            onClick={() => setMobileOpen(false)}
          >
            Trang chủ
          </Link>

          {/* Collapsible Dòng xe (mobile) */}
          <button
            className="w-full flex items-center justify-between px-2 py-2 rounded hover:bg-slate-100"
            onClick={() => setMobileCarsOpen((v) => !v)}
            aria-expanded={mobileCarsOpen}
          >
            <span>Dòng xe</span>
            <ChevronDown
              size={18}
              className={`transition-transform ${
                mobileCarsOpen ? "rotate-0" : "-rotate-90"
              }`}
            />
          </button>
          <div
            className={`pl-3 overflow-hidden transition-[max-height] duration-300 ${
              mobileCarsOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            {[...group1, ...group2].map((c) => (
              <button
                key={slugOf(c)}
                onClick={() => {
                  setMobileOpen(false);
                  navigate(`/product/${slugOf(c)}`);
                }}
                className="block w-full text-left px-2 py-2 rounded hover:bg-slate-100"
              >
                {c.name}
              </button>
            ))}
          </div>

          <a
            href="#installment"
            className="block px-2 py-2 rounded hover:bg-slate-100"
            onClick={() => setMobileOpen(false)}
          >
            Mua xe trả góp
          </a>
          <a
            href="#promotion"
            className="block px-2 py-2 rounded hover:bg-slate-100"
            onClick={() => setMobileOpen(false)}
          >
            Chương trình khuyến mãi
          </a>
          <a
            href="#form"
            className="mt-2 inline-block px-4 py-2 rounded-full border border-slate-700 text-slate-700 hover:bg-slate-100"
            onClick={() => setMobileOpen(false)}
          >
            Nhận báo giá
          </a>
        </div>
      </div>

      {/* hiệu ứng fadeIn dropdown desktop */}
      <style>{`
        @keyframes fadeIn { from { opacity:.0; transform: translateY(4px) } to { opacity:1; transform: translateY(0)}}
        .animate-fadeIn { animation: fadeIn .18s ease-out both; }
      `}</style>
    </header>
  );
}
