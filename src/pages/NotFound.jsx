// src/app/error/NotFound.jsx
import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const { pathname } = useLocation();
  return (
    <div className="mx-auto max-w-xl p-6 text-center">
      <h1 className="text-3xl font-semibold">404 — Page not found</h1>
      <p className="mt-3 text-slate-600">
        We couldn’t find{" "}
        <code className="px-1 py-0.5 bg-slate-100 rounded">{pathname}</code>.
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <Link to="/" className="px-4 py-2 rounded-xl border shadow-sm">
          Go Home
        </Link>
        {/* <a
          href="tel:0967034207"
          className="px-4 py-2 rounded-xl border shadow-sm"
        >
          Call us
        </a> */}
      </div>
    </div>
  );
}
