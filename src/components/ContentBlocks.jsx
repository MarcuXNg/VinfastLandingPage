import React, { useState, useEffect, useRef } from "react";

function AnimatedNumber({ value, duration = 4000 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);

  const str = String(value).trim();
  const match = str.match(/^([\d.,]+)/);
  const numberPart = match ? match[1] : null;
  const suffix = match ? str.slice(numberPart.length) : "";
  const normalized = numberPart
    ? numberPart.replace(/\./g, "").replace(",", ".")
    : null;
  const end = normalized ? parseFloat(normalized) : NaN;
  const isNumeric = !Number.isNaN(end);

  // Khi phần tử lọt vào viewport thì bật cờ hasAnimated
  useEffect(() => {
    if (!isNumeric) {
      // Không phải số -> hiện nguyên văn, không cần observer
      setDisplay(str);
      return;
    }

    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      // môi trường không hỗ trợ -> animate luôn
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3, // thấy khoảng 30% là đủ
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [isNumeric, str]);

  // Chạy animation khi hasAnimated = true
  useEffect(() => {
    if (!hasAnimated || !isNumeric) return;

    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = end * progress;

      const formatted = Number.isInteger(end)
        ? Math.round(current)
        : current.toFixed(1);

      setDisplay(`${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [hasAnimated, duration, end, suffix, isNumeric]);

  return <span ref={ref}>{display}</span>;
}

function ImageCardCarousel({ cards = [], perPage = 2 }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(cards.length / perPage);

  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(cards.slice(i * perPage, (i + 1) * perPage));
  }

  // ⬅️ nếu perPage = 3 thì 3 cột, còn lại 2 cột
  const colsClass =
    perPage === 3 ? "md:grid-cols-3 lg:grid-cols-3" : "md:grid-cols-2";

  return (
    <div className="relative pb-8">
      {/* Vùng slide */}
      <div className="overflow-x-hidden">
        <div
          className="flex transition-transform duration-500 will-change-transform"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((pg, pi) => (
            <div
              key={pi}
              className={`w-full shrink-0 grid grid-cols-1 ${colsClass} gap-6 pb-2`}
            >
              {pg.map((card, idx) => {
                const hasText = !!(card.title || card.text);

                return (
                  <div
                    key={idx}
                    className="
        rounded-3xl bg-white shadow-sm overflow-hidden border border-slate-100
        transition-shadow duration-300
        hover:-translate-y-1 hover:shadow-xl
      "
                  >
                    {!hasText ? (
                      <img
                        src={card.img}
                        alt={card.title || ""}
                        className="block w-full h-auto"
                      />
                    ) : (
                      <>
                        <img
                          src={card.img}
                          alt={card.title || ""}
                          className="block w-full h-auto"
                        />
                        <div className="p-4 md:p-5">
                          {card.title && (
                            <h3 className="text-lg md:text-xl font-semibold mb-2">
                              {card.title}
                            </h3>
                          )}
                          {card.text && (
                            <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
                              {card.text}
                            </p>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2">
        {pages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setPage(i)}
            className={`h-2.5 w-2.5 rounded-full border transition ${
              i === page
                ? "bg-sky-500 border-sky-500"
                : "bg-white border-slate-300"
            }`}
            aria-label={`Trang ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ContentBlocks({ sections = [] }) {
  return (
    <div className="space-y-8">
      {sections.map((blk, i) => {
        switch (blk.type) {
          case "heading": {
            const Tag = blk.level === 4 ? "h4" : blk.level === 3 ? "h3" : "h2";
            const size =
              blk.level === 4
                ? "text-lg md:text-xl"
                : blk.level === 3
                ? "text-xl md:text-2xl"
                : "text-2xl md:text-3xl";
            return (
              <Tag key={i} className={`${size} font-extrabold`}>
                {blk.text}
              </Tag>
            );
          }
          case "paragraph":
            return (
              <p key={i} className="text-slate-700 leading-relaxed">
                {blk.text}
              </p>
            );

          case "bullets":
            return (
              <ul key={i} className="list-disc pl-5 space-y-1 text-slate-700">
                {blk.items.map((t, idx) => (
                  <li key={idx}>{t}</li>
                ))}
              </ul>
            );

          case "metrics":
            return (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {blk.items.map((m, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-slate-100 p-5 shadow-sm"
                  >
                    <div className="text-2xl font-extrabold">
                      <AnimatedNumber value={m.value} />
                    </div>
                    <div className="text-slate-600">{m.label}</div>
                  </div>
                ))}
              </div>
            );

          case "gallery2":
            return (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blk.images.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt=""
                    className="w-full rounded-2xl object-cover"
                  />
                ))}
              </div>
            );

          case "gallery3":
            return (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {blk.images.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt=""
                    className="w-full rounded-2xl object-cover"
                  />
                ))}
              </div>
            );

          case "image":
            return (
              <img
                key={i}
                src={blk.src}
                alt={blk.caption || ""}
                className="w-full rounded-2xl object-cover"
              />
            );

          case "imageCardCarousel":
            return (
              <ImageCardCarousel
                key={i}
                cards={blk.cards || []}
                perPage={blk.perPage || 2}
              />
            );

          case "specTable":
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border border-slate-200 bg-white"
              >
                <table className="w-full border-collapse">
                  <tbody>
                    {blk.rows.map((row, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-slate-200 last:border-b-0"
                      >
                        <td className="py-3 px-4 font-semibold text-slate-800 align-top w-[32%]">
                          {row.label}
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
