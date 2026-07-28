import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import ChatFab from './components/ChatFab'
import Home from './pages/Home'
import Experience from './pages/Experience'
import ProjectsPage from './pages/ProjectsPage'
import Contact from './pages/Contact'
import './App.css'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
        <BottomNav />
        <ChatFab />
      </div>
    </Router>
  )
}
