// src/features/auth/Login.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../../../shared/lib/api";

export default function Login() {
  const nav = useNavigate();
  const loc = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setErr("");
    if (!email || !password) {
      setErr("Vui lòng nhập email và mật khẩu");
      return;
    }
    try {
      setLoading(true);
      await login(email.trim(), password);
      const to = (loc.state && loc.state.from) || "/admin";
      nav(to, { replace: true });
    } catch (e) {
      setErr(e.message || "Đăng nhập thất bại");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <form
        onSubmit={submit}
        className="w-full max-w-sm p-6 border rounded-xl shadow bg-white"
      >
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>

        <input
          className="border p-2 w-full mb-3 rounded"
          type="email"
          placeholder="Email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="border p-2 w-full mb-3 rounded"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {err && <div className="text-red-600 mb-2 text-sm">{err}</div>}

        <button
          className="w-full bg-black text-white py-2 rounded disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Đang đăng nhập…" : "Login"}
        </button>
      </form>
    </div>
  );
}
