import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './components/Header'
import Login from './components/Login'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<><Header /><Footer /></>} />
      <Route path="/login" element={<><Login /></>} />
      <Route path="*" element={<><Header /><h3>Page not Found</h3><Footer /></>} />
    </Routes>
  )
}

