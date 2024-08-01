import { Suspense } from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Ładowanie...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
