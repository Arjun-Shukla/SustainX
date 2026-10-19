import './App.css'
import './index.css'
import Header from './components/header'
import Navbar from './components/Navbar-aside'
import Hero from './components/hero'
import Servicebar from './components/service-bar'

function App() {

  return (
    <>
      <div className="min-h-screen bg-[#080B0B] text-white">

        <Header />

        <Navbar />

        <Hero />

        <Servicebar />

      </div>

    </>
  )
}

export default App
