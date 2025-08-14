import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <main>
          <Home />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
