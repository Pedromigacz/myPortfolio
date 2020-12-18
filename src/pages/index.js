import React from 'react'
import { Home, Navbar } from '../components'
import '../styles.css'
import ContactContextProvider from '../contexts/ContactContext'

const Index = () => {
  return (
    <ContactContextProvider>
      <Navbar />
      <Home />
    </ContactContextProvider>
  )
}

export default Index