import './index.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/NavBar'
import { Home } from './components/sections/Home'

function App() {
  return (
    <>
      <div className={`min-h-screen bg-black text-gray-100`}>
          <Navbar />
          <Home />
        </div>
    </>
  )
}

export default App
