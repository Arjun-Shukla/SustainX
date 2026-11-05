import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/header'
import Navbar from './components/Navbar-aside'
import Hero from './components/hero'
import Servicebar from './components/service-bar'
import Achievements from './components/Achievements'
import Footer from './components/footer'
import Teams from './pages/teams'
import Join from './pages/join'
import Select from './pages/select'
import Login from './pages/login'
import Signup from './pages/signup'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [pathname])

  return null
}

function AppContent() {

  const location = useLocation()

  return (
    <div className="min-h-screen bg-[#080B0B] text-white">

      <Header />

      <Navbar />

      <main className="min-h-[calc(100vh-104px)] overflow-x-hidden overflow-y-hidden lg:pl-64">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Routes location={location} key={location.pathname}>

            <Route path="/" element={

              <>
                <Hero />

                <Servicebar />

                <Achievements />

              </>

            } />
            <Route path="/teams" element={<Teams />} />

            <Route path="/join" element={<Join />} />

            <Route path="/select" element={<Select />} />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Signup />} />

          </Routes>

        </div>
      </main>

      <Footer />
    </div>
  )
}
function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <AppContent />

    </BrowserRouter>
  )
}

export default App
