import { BrowserRouter, Routes, Route } from "react-router-dom"
import Admin from './pages/Admin'
import DashBoard from './pages/DashBoard'
import Project from './pages/Project'
import Team from './pages/Team'
import Analytic from './pages/Analytic'
import Message from './pages/Message'
import Integration from './pages/Integration'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="/project" element={<Project />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/analytic" element={<Analytic />} />
          <Route path="/message" element={<Message />} />
          <Route path="/integration" element={<Integration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
