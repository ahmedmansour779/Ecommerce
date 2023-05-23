import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<><Header /></>} />
      <Route path="*" element={<h3>Page not Found</h3>} />
    </Routes>
  )
}

