import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Factorial from "./components/Factorial/Factorial";
import Navbar from "./components/Navbar/Navbar";
import Description from "./components/Description/Description";
import GithubApi from "./components/GithubApi/GithubApi";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Description />} />
                <Route path="/github-api" element={<GithubApi />} />
                <Route path="/factorial" element={<Factorial />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
