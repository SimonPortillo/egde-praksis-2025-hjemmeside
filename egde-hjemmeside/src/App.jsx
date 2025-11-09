import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Status1 from './pages/Status1'
import Status2 from './pages/Status2'
import Refleksjon from './pages/Refleksjon'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        {/* Home / Hero & Intro */}
        <section id="home">
          <Home />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Status Sections */}
        <section id="status1">
          <Status1 />
        </section>
        <section id="status2">
          <Status2 />
        </section>

        {/* Refleksjon Section */}
        <section id="refleksjon">
          <Refleksjon />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
