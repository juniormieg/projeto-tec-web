import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import LoginScreen from './pages/loginScreen'
import Register from './pages/register'
import Header from './components/header'
import WellnessCheck from './pages/wellnessCheck'
import Footer from './components/footer'
import EventProfile from './pages/eventProfile'

function App() {
  return (
    <div>
   <Header/>
   <EventProfile/>
   <WellnessCheck/>
   <Footer/>
   </div>
  )
}

export default App
