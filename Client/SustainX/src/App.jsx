import './App.css'
import './index.css'
import Header from './components/header'
import Navbar from './components/Navbar-aside'
import Hero from './components/hero'
import Servicebar from './components/service-bar'
import Achievements from './components/Achievements'
import Footer from './components/footer'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="min-h-screen bg-[#080B0B] text-white">

        <Header />

        <Navbar />

        <Hero />

        <Servicebar />

        <Achievements />

        <Footer />

      </div>

    </>
  )
}

export default App
