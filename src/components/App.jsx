import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "../pages/Home";
import { AboutPage } from "../pages/About";
import { StatutePage } from "../pages/Statute";
import { ContactPage } from "../pages/Contact";
import { PageNotFound } from "../pages/PageNotFound";
import { NewsPage } from "../pages/News";
import { Articles } from "../pages/Articles";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />}></Route>{" "}
        <Route path="news/:name" element={<Articles />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="statute" element={<StatutePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
