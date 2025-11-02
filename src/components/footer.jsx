// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { cars } from "../data/cars";

const slugOf = (c) =>
  (c.id || c.name || "")
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9-]/g, "");

// Nhóm xe: VF* và các dòng khác (ecvan, limogreen)
const vfSeries = cars.filter((c) => /^vf\d+$/i.test(c.id));
const otherSeries = cars.filter((c) => !/^vf\d+$/i.test(c.id));

export default function Footer() {
  return (
    <footer
      className="
        bg-[#121212] text-slate-300
        [&_a:hover]:underline
        [&_a]:underline-offset-2
        [&_a]:decoration-slate-400/60
        [&_a:hover]:decoration-white
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Cột liên hệ */}
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
                <a href="tel:0967034207" className="hover:text-white">
                  0967 034 207
                </a>
              </p>
              <p>
                <span className="text-slate-400">Email: </span>
                <a
                  href="mailto:maiquocthien0810@gmail.com"
                  className="hover:text-white break-all"
                >
                  maiquocthien0810@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Cột VF series */}
          <div>
            <h4 className="text-slate-400 mb-4">Động cơ điện</h4>
            <ul className="space-y-3">
              {vfSeries
                // Sắp xếp VF9 → VF3 (giảm dần theo số)
                .sort(
                  (a, b) =>
                    Number(b.id.replace("vf", "")) -
                    Number(a.id.replace("vf", ""))
                )
                .map((c) => (
                  <li key={c.id}>
                    <Link
                      to={`/product/${slugOf(c)}`}
                      className="hover:text-white transition"
                    >
                      {
                        c.name.replace(
                          /^VinFast\s/i,
                          ""
                        ) /* Hiển thị VF9, VF8,... */
                      }
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Cột dòng khác (eCVan, LimoGreen, …) */}
          <div>
            <h4 className="text-slate-400 mb-4">Dòng xe điện</h4>
            <ul className="space-y-3">
              {otherSeries.map((c) => (
                <li key={c.id}>
                  <Link
                    to={`/product/${slugOf(c)}`}
                    className="hover:text-white transition"
                  >
                    {c.name.replace(/^VinFast\s/i, "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột điều hướng khác */}
          <div className="md:col-start-4">
            <h4 className="text-slate-400 mb-4">Tìm hiểu thêm</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Trang chủ
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Tin tức
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
