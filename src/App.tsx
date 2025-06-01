import './App.css'
import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Schedule from "./components/Schedule"

function App() {

  return (
    <div className="relative h-full bg-brand-white overflow-x-hidden">
      <Header />
      <Hero />
      <div className="flex flex-col items-center justify-center">
      <About />  
      <Schedule />
      <Menu />
      </div>
    </div>
  )
}

export default App
