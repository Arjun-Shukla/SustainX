import './App.css'
import './index.css'
import { apiUrl } from './api'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/header'
import Navbar from './components/Navbar-aside'
import Hero from './components/hero'
import Servicebar from './components/service-bar'
import NetworkStats from './components/NetworkStats'
import Achievements from './components/achievements'
import Footer from './components/footer'
import Teams from './pages/teams'
import Join from './pages/join'
import Select from './pages/select'
import Login from './pages/login'
import Signup from './pages/signup'
import SustainXLoader from './components/SustainXLoader'

function RequireAuth({ children }) {
  const [status, setStatus] = useState('loading')
  const location = useLocation()

  useEffect(() => {
    const controller = new AbortController()

    fetch(apiUrl('/api/users'), {
      credentials: 'include',
      signal: controller.signal,
    })
      .then((response) => {
        if (response.status === 401 || response.status === 403) {
          setStatus('unauthenticated')
          return
        }

        if (!response.ok) {
          throw new Error('Unable to verify your login. Please try again.')
        }

        return response.json().then((data) => {
          setStatus(data.success ? 'authenticated' : 'unauthenticated')
        })
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.error('Failed to verify login:', error)
          setStatus('error')
        }
      })

    return () => controller.abort()
  }, [])

  return (
    <>
      <SustainXLoader isLoading={status === 'loading'} />
      {status === 'unauthenticated' ? (
        <Navigate to="/login" replace state={{ from: location }} />
      ) : status === 'error' ? (
        <p role="alert" className="py-12 text-center text-red-300">Unable to verify your login. Please reload and try again.</p>
      ) : status === 'authenticated' ? children : null}
    </>
  )
}

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <div className="min-h-screen bg-[#080B0B] text-white">

      <Header
        user={user}
        onUserChange={setUser}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
      />

      <Navbar
        user={user}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="min-h-[calc(100vh-104px)] w-full min-w-0 overflow-x-hidden pt-16 lg:pl-64 lg:pt-0">
        <div className="mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <Routes location={location} key={location.pathname}>

            <Route path="/" element={

              <>
                <Hero user={user} />

                <Servicebar />

                <NetworkStats />

                <Achievements />

              </>

            } />
            <Route path="/teams" element={<Teams />} />

            <Route path="/join" element={<RequireAuth><Join /></RequireAuth>} />

            <Route
              path="/select"
              element={
                <Select
                  onTeamsSelected={(plan, teamsSelected) => setUser((currentUser) => (
                    currentUser ? { ...currentUser, plan, teamsSelected } : currentUser
                  ))}
                />
              }
            />

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
