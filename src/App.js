import React from 'react'
import { About, Footer, Experience, Header, Projects, Skills } from './containers'
import { Navbar } from './components';
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
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