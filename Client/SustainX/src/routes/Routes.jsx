import { createBrowserRouter } from 'react-router-dom'
import Hero from '../components/hero'
import Servicebar from '../components/service-bar'
import NetworkStats from '../components/NetworkStats'
import Achievements from '../components/achievements'
import Join from '../pages/join'
import TeamSelection from '../pages/select'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Teams from '../pages/teams'

const Router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Hero />
        <Servicebar />
        <NetworkStats />
        <Achievements />
        {/* <Join />
        <TeamSelection />
        <Login />
        <Signup /> */}
      </>
    )
  },
  {
    path: '/teams',
    element: <Teams />
  }
])

export default Router;