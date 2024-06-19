import { BrowserRouter } from 'react-router-dom'

import { About, Hero, Navbar, Projects, Contact } from './components'

function App() {

  return (
   <BrowserRouter>
   <div className=''>
    <div className=''>
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
