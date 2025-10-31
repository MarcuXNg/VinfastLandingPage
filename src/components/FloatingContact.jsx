import { Phone } from "lucide-react";

export default function FloatingContact({
  zaloLink = "https://zalo.me/0967034207",
  phone = "0967 034 207",
}) {
  return (
    <div
      className="
        fixed left-[max(0.75rem,env(safe-area-inset-left))] bottom-[max(1rem,env(safe-area-inset-bottom))]
        z-40 rounded-[999px] p-3 md:p-4
        bg-white/30 backdrop-blur-md
        border border-black/20 shadow-2xl
        flex flex-col items-center gap-4 md:gap-5
        touch-manipulation
      "
      aria-label="Liên hệ nhanh"
    >
      {/* Zalo */}
      <a
        href={zaloLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        className="
          w-16 h-16 md:w-20 md:h-20 rounded-full
          bg-white shadow-md ring-1 ring-black/10
          flex items-center justify-center overflow-hidden
          hover:scale-105 active:scale-95 transition
        "
      >
        <img
          src="/zalo.png" // /public/zalo.png
          alt="Zalo"
          className="w-11 h-11 md:w-12 md:h-12 object-contain"
        />
      </a>

      {/* Phone */}
      <a
        href={`tel: ${phone.replace(/\s+/g, "")}`} // bỏ dấu cách để gọi OK
        aria-label={`Gọi ${phone}`}
        className="
          w-16 h-16 md:w-20 md:h-20 rounded-full
          bg-[#4ea2ff] shadow-md ring-1 ring-black/10
          flex items-center justify-center
          hover:scale-105 active:scale-95 transition
          text-white
        "
      >
        <Phone className="w-9 h-9 md:w-10 md:h-10" />
      </a>
    </div>
  );
}
