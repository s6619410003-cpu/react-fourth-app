// components App by Ninnin style
//จะใช้ตัว routing/re-render page component
import About from './pages/About'
import Home from './pages/Home'
import Smartphone from './pages/Smartphone'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Computer from './pages/Computer'
//import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/smartphone" element={<Smartphone />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
