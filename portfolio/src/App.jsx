import React from 'react'
import Header from './components/Header/header'
import Nav from './components/Nav/nav'
import About from './components/About/About'
import Experience from './components/Experience/experience'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/portfolio'
import Testemonial from './components/Testemonial/testemonial'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testemonial />
        <Contact />
        <Footer />
    </>
  )
}

export default App