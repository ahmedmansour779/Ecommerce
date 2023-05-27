import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import { useAuth } from './context/GlobalState'
import { auth } from './firebase'
import PageNotFound from './page not found/PageNotFound'

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
      <Route path="/" element={<><Header /><Home /><Footer /></>} />
      <Route path="/login" element={<><Login /></>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

