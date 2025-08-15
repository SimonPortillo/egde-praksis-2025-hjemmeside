import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Status1 from './pages/Status1'
import Status2 from './pages/Status2'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/status_1" element={<Status1 />} />
          <Route path="/status_2" element={<Status2 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
