import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Navbar from './components/Navbar-aside'
import Hero from './components/hero'
import Servicebar from './components/service-bar'
import Achievements from './components/Achievements'
import Footer from './components/footer'
import Join from './pages/join'
import TeamSelection from './pages/select'
import Login from './pages/login'
import Signup from './pages/signup'
import Teams from './pages/teams'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#080B0B] text-white">
        <Header />
        <Navbar />

        <main className="min-h-[calc(100vh-104px)] overflow-x-hidden overflow-y-hidden lg:pl-64">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Servicebar />
                  <Achievements />
                  {/* <Join />
                  <TeamSelection />
                  <Login />
                  <Signup /> */}
                </>
              } />
              <Route path="/teams" element={<Teams />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
