import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Header from "./components/Header";

export default function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/apropos" element={<Apropos />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}
