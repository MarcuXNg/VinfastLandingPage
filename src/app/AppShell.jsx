import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

export default function AppShell() {
  useEffect(() => {
    const onScroll = () => {
      const elements = document.querySelectorAll(".animate-scrollFade");
      const trigger = window.innerHeight * 0.85;
      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) el.classList.add("is-visible");
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // chạy 1 lần khi mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
