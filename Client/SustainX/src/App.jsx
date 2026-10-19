import { useState } from 'react'
import './App.css'
import './index.css'
import Header from './components/header'
import Navbar from './components/Navbar-aside'

function App() {

  return (
    <>
      <div className="min-h-screen bg-[#080B0B] text-white">

        <Header />

        <Navbar />

      </div>

    </>
  )
}

export default App
