import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Profile />} path="/:userId" />
      </Routes>
    </Router>
  )
}