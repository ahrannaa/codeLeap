import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/signUp" element={<SignUpPage />} />
          </Routes>
      </BrowserRouter>
    </>
  );
};