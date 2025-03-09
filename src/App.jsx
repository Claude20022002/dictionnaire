import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/apropos" element={<Apropos />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}
