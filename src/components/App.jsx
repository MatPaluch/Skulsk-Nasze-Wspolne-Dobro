import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "../pages/Home";
import { AboutPage } from "../pages/About";
import { StatutePage } from "../pages/Statute";
import { ContactPage } from "../pages/Contact";
import { PageNotFound } from "../pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/Skulsk-Nasze-Wspolne-Dobro/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/Skulsk-Nasze-Wspolne-Dobro/about" element={<AboutPage />} />
        <Route path="/Skulsk-Nasze-Wspolne-Dobro/statute" element={<StatutePage />} />
        <Route path="/Skulsk-Nasze-Wspolne-Dobro/contact" element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
