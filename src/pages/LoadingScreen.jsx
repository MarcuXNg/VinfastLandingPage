import React from "react";
import logo from "../assets/loadingscreen/logo.png"; // đổi path theo project của Boss

export default function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Ảnh logo + hiệu ứng nhẹ */}
        <div className="animate-pulse">
          <img
            src={logo}
            alt="VinFast"
            className="h-16 w-auto md:h-20 object-contain drop-shadow-lg"
          />
        </div>

        {/* Vòng tròn xoay nhỏ bên dưới */}
        <div className="relative mt-2">
          <div className="h-8 w-8 rounded-full border-2 border-slate-600" />
          <div className="h-8 w-8 rounded-full border-2 border-sky-400 border-t-transparent animate-spin absolute inset-0" />
        </div>

        {/* Text */}
        <p className="text-sm text-slate-300 mt-2">
          Đang tải dữ liệu, vui lòng chờ...
        </p>
      </div>
    </div>
  );
}
