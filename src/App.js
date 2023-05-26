import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './components/Header'
import Login from './components/Login'
import { useAuth } from './context/GlobalState'
import { auth } from './firebase'

export default function App() {
  const { dispatch } = useAuth()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<><Header /><Footer /></>} />
      <Route path="/login" element={<><Login /></>} />
      <Route path="*" element={<><Header /><h3>Page not Found</h3><Footer /></>} />
    </Routes>
  )
}

