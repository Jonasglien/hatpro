"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Optimizer from "./Optimizer";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/optimizer" element={<Optimizer />} />
      </Routes>
      <Footer />
    </Router>
  );
}
