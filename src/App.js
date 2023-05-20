import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from './redux/userSlice';
import MainPage from "./pages/main.js";
import SignUpPage from "./pages/signup.js";

export default function App() {
  const { isLogged } = useSelector(selectUser);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/signup"
          element={isLogged ? <Navigate to="/" /> : <SignUpPage />}
        />
        <Route
          path="/"
          element={isLogged ? <MainPage /> : <Navigate to="/signup" />}
        />
      </Routes>
    </Router>
  );
};
