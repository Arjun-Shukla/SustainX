import './App.css'
import './index.css'
import Header from './components/header'
import Navbar from './components/Navbar-aside'
import Hero from './components/hero'
import Servicebar from './components/service-bar'
import Achievements from './components/Achievements'
import Footer from './components/footer'
import { Link } from 'react-router-dom'
import OurTeams from './pages/teams'
import Join from './pages/join'
import TeamSelection from './pages/select'
import Login from './pages/login'
import Signup from './pages/signup'

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

        {/* <OurTeams /> */}



        <main className="ml-[330px] w-[calc(100%-330px)] min-h-[calc(100vh-104px)] overflow-x-hidden overflow-y-hidden">

          <Join />

          <TeamSelection />

          <Login />

          <Signup />

        </main>







      </div>

    </>
  )
}

export default App
