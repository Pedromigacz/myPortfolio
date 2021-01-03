import React from 'react'
import { Home, Navbar, AboutMe, Footer, SEO } from '../components'
import '../styles.css'
import ContactContextProvider from '../contexts/ContactContext'

const Index = () => {
  return (
    <ContactContextProvider>
      <SEO />
      <Navbar />
      <Home />
      <AboutMe />
      <Footer />
    </ContactContextProvider>
  )
}

export default Index