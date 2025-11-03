import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Brands from './components/Brands/Brands'
import Features from './components/Features/Features'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './styles/globals.css'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Services />
          <Brands />
          <Features />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
