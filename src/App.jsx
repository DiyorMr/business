import './App.css'
import About from './components/About'
import Business from './components/Business'
import Hero from './components/Hero'
import CardInfo from './components/pages/CardInfo'
import Contact from './components/pages/Contact'

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Business />
      <CardInfo />
      <Contact />
    </div>
  )
}

export default App