import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/main.js";
import SignUpPage from "./pages/signup.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};