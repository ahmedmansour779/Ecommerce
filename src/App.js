import React from 'react'

export default function App() {
  console.log(
    `apiKey: ${process.env.REACT_APP_FIREBASE_API_KEY}`
  )
  return (
    <div className='container'>
      hello
    </div>
  )
}

