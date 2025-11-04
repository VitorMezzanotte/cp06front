import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Sobre from './components/Sobre'
import Contato from './components/Contato'
import Login from './components/Login'
import Produtos from './components/Produtos'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="container-max px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-indigo-600">Loja de Carros</h1>
            <nav className="space-x-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/portfolio" className="hover:underline">Portfólio</Link>
              <Link to="/produtos" className="hover:underline">Produtos</Link>
              <Link to="/sobre" className="hover:underline">Sobre</Link>
              <Link to="/contato" className="hover:underline">Contato</Link>
              <Link to="/login" className="hover:underline">Login</Link>
            </nav>
          </div>
        </header>

        <main className="container-max p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <footer className="bg-white border-t mt-10">
          <div className="container-max px-6 py-6 text-sm text-gray-600">
            © {new Date().getFullYear()} Loja de Carros - Feito por Vitor Mezzanotte
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}
