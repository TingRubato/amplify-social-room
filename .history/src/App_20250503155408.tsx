import { useState } from "react";
import { Routes, Route } from "react-router-dom"; // 移除 BrowserRouter 导入
import Home from "./Pages/Home";
import Menu from "./Components/Menu/Menu";
import SpeakingPage from "./Pages/SpeakingPage";
import Nav from "./Components/Nav/Nav";
import UpsellPage from "./Pages/UpsellPage";
import BookPage from "./Pages/BookPage";

function App() {
  const [showMenu, setShowMenu] = useState(""); // 控制菜单显示状态

  const toggleMenu = () => {
    setShowMenu(showMenu === "active" ? "" : "active");
  };

  return (
    <main>
      <Nav showMenu={showMenu} toggleMenu={toggleMenu} />
      <Menu showMenu={showMenu} toggleMenu={toggleMenu} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speakings" element={<SpeakingPage />} />
        <Route path="/upsell" element={<UpsellPage />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </main>
  );
}

export default App;
