import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import Historique from "./pages/Historique";

export default function App() {
    return (
        <Router basename="/dictionnaire">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/search" element={<Search />} />
                <Route path="/historique" element={<Historique />} />
            </Routes>
            <Footer />
        </Router>
    );
}
