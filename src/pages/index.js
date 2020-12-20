import React from 'react'
import { Home, Navbar, AboutMe, Footer } from '../components'
import '../styles.css'
import ContactContextProvider from '../contexts/ContactContext'

const Index = () => {
  return (
    <ContactContextProvider>
      <Navbar />
      <Home />
      <AboutMe />
      <Footer />
    </ContactContextProvider>
  )
}

export default Index