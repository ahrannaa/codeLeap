import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainScreenPage from "./pages/MainScreenPage.js";
import SignUpPage from "./pages/SignUpPage.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/" element={<MainScreenPage/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
};