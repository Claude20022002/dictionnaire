import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Search from "./pages/Search";

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </Router>
    );
}
