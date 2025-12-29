import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import LoginScreen from './pages/loginScreen'
import Register from './pages/register'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loginScreen" element={<LoginScreen />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
