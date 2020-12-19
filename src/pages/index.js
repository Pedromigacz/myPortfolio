import React from 'react'
import { Home, Navbar, AboutMe } from '../components'
import '../styles.css'
import ContactContextProvider from '../contexts/ContactContext'

const Index = () => {
  return (
    <ContactContextProvider>
      <Navbar />
      <Home />
      <AboutMe />
    </ContactContextProvider>
  )
}

export default Index