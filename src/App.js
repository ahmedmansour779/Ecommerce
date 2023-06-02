import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer/Footer'
import CheckOut from './components/CheckOut'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Orders from './components/Orders'
import Payment from './components/Payment'
import { useAuth } from './context/GlobalState'
import { auth } from './firebase'
import PageNotFound from './pageNotFound/PageNotFound'

export default function App() {
  const { dispatch } = useAuth()
  const stripePromise = loadStripe("pk_test_51NDCZpFA8kdwqnhrMBIeGs1ldtfwcOk2yVdwhaJ0cvmQeC4GIsEtns7zLYNMOxZsNCfij0R25yKCHZN0oItOenUT000yPHXLvO")
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
      <Route path="/checkout" element={<><Header /> <CheckOut /></>} />
      <Route path="/payment"
        element={<>
          <Header />
          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
          <Footer />
        </>} />
      <Route path="/orders" element={<><Header /> <Orders /><Footer /></>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

