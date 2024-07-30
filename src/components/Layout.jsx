import { Suspense } from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import { ContactUs } from "./ContactUs/ContactUs.jsx";

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Ładowanie...</div>}>
        <Outlet />
      </Suspense>
      <ContactUs />
      <Footer />
    </>
  );
};
