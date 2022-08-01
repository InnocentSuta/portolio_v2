import React from 'react'
import { About, Footer, Experience, Header, Projects, Skills } from './containers'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App