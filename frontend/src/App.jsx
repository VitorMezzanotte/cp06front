import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Produtos from "./components/Produtos";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Login from "./components/Login";

export default function App() {
  return (
    <BrowserRouter>
      {/* Layout principal */}
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* HEADER */}
        <header className="bg-indigo-700 text-white py-4 shadow-md">
          <nav className="container-max flex justify-between items-center px-6">
            <h1 className="text-xl font-bold">🚗 Lore Motorsport</h1>
            <ul className="flex gap-6 text-sm">
              <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-gray-200">Portfólio</Link></li>
              <li><Link to="/produtos" className="hover:text-gray-200">Produtos</Link></li>
              <li><Link to="/sobre" className="hover:text-gray-200">Sobre</Link></li>
              <li><Link to="/contato" className="hover:text-gray-200">Contato</Link></li>
              <li><Link to="/login" className="hover:text-gray-200">Login</Link></li>
            </ul>
          </nav>
        </header>

        {/* CONTEÚDO */}
        <main className="flex-grow;">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        {/* FOOTER — sempre no final da tela */}
        <footer className="bg-indigo-700 text-white text-center py-4 mt-auto shadow-inner">
          <p className="text-sm tracking-wide">
            © 2025 Lore Motorsport — Desenvolvido por{" "}
            <span className="font-semibold">Vitor Mezzanotte Constante</span>
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
