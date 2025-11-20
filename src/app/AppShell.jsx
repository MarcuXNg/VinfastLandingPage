import React, { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PopUp from "../components/PopUp";
import FloatingContact from "../components/FloatingContact";
import LoadingScreen from "../pages/LoadingScreen";

export default function AppShell() {
  const [loading, setLoading] = React.useState(true); // ⬅️ cho mặc định là true
  const location = useLocation();
  const showGlobalWidgets = !location.pathname.startsWith("/admin");

  // Hiện loading 1.2s rồi tắt (demo)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // 1200ms = 1.2s
    return () => clearTimeout(timer);
  }, []);

  // hiệu ứng fade khi cuộn (như cũ)
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
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (loading) {
    return <LoadingScreen />; // ⬅️ trong 1.2s đầu chỉ hiện màn loading
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      {showGlobalWidgets && (
        <>
          <PopUp />
          <FloatingContact
            zaloLink="https://zalo.me/0967034207"
            phone="0967034207"
          />
        </>
      )}

      <Outlet />

      <Footer />
      <ScrollRestoration />
    </div>
  );
}
