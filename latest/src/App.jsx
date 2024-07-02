import { BrowserRouter } from 'react-router-dom'

import { About, Hero, Navbar, Projects, Contact } from './components'

function App() {

  return (
   <BrowserRouter>
   <div className='relative z-0 bg-blue'>
    <div className='bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <Hero />
    </div>
    <Projects />
    <About />
    <Contact />
   </div>
   </BrowserRouter>
  )
}

export default App
