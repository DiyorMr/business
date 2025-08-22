import './App.css'
import About from './components/About'
import Business from './components/Business'
import Hero from './components/Hero'
import CardInfo from './components/pages/CardInfo'

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Business />
      <CardInfo />
    </div>
  )
}

export default App