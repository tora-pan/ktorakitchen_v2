import './App.css'
import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Schedule from "./components/Schedule"

function App() {

  return (
    <div className="relative w-screen h-full bg-brand-white">
      <Header />
      <Hero />
      <div className="flex flex-col items-center justify-center">
      <About />  
      <Schedule />
      </div>
    </div>
  )
}

export default App
