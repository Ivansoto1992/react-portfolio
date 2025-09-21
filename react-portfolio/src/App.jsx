import { Routes, Route, useLocation} from 'react-router-dom'
import NavBar from './Components/NavBar.jsx'
import Home from '../../main.jsx/Pages/Home.jsx'
import About from '../../main.jsx/Pages/About.jsx'
import Projects from '../../main.jsx/Pages/Projects.jsx'
import Services from '../../main.jsx/Pages/Services.jsx'
import Contact from '../../main.jsx/Pages/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const location = useLocation()
  
  const flash = location.state?.flash || null

  return (
    <>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home flash={flash} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}