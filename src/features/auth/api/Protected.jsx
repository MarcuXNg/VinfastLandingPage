import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../shared/lib/api";

export default function Protected({ children }) {
  const nav = useNavigate();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        await api("/auth/me"); // backend trả 200 khi có cookie hợp lệ
        if (alive) setOk(true);
      } catch {
        nav("/admin/login", { replace: true });
      }
    })();
    return () => {
      alive = false;
    };
  }, [nav]);

  if (!ok) return null; // hoặc spinner
  return children;
}
