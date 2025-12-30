import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import WellnessCheck from './pages/wellnessCheck'
import Register from './pages/register'
import EventProfile from './pages/eventProfile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wellnessCheck" element={<WellnessCheck />} />
      <Route path="/register" element={<Register />} />
      <Route path="/eventProfile" element={<EventProfile />} />
    </Routes>
  )
}

export default App
