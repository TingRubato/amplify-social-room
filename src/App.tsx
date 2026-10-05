import { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom"; // 移除 BrowserRouter 导入
import Home from "./Pages/Home";
import Menu from "./Components/Menu/Menu";
import Nav from "./Components/Nav/Nav";
import PromoWidget from "./Components/PromoWidget/PromoWidget";

const SpeakingPage = lazy(() => import("./Pages/SpeakingPage"));
const UpsellPage = lazy(() => import("./Pages/UpsellPage"));
const BookPage = lazy(() => import("./Pages/BookPage"));

function App() {
  const [showMenu, setShowMenu] = useState(""); // 控制菜单显示状态

  const toggleMenu = () => {
    setShowMenu(showMenu === "active" ? "" : "active");
  };

  return (
    <main>
      <Nav showMenu={showMenu} toggleMenu={toggleMenu} />
      <Menu showMenu={showMenu} toggleMenu={toggleMenu} />
      <Suspense fallback={<p role="status" style={{ padding: "8rem 2rem" }}>Loading page…</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakings" element={<SpeakingPage />} />
          <Route path="/upsell" element={<UpsellPage />} />
          <Route path="/book" element={<BookPage />} />
        </Routes>
      </Suspense>
      <PromoWidget />
    </main>
  );
}

export default App;
