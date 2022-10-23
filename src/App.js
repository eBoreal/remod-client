import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'

export default function App() {
  return ( <Home />
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route element={<Profile />} path="/:userId" />
    //   </Routes>
    // </Router>
  )
}