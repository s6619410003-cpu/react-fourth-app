//import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavbarMain from '../components/NavbarMain'

export default function NotFound() {
  return (
    <>
      <NavbarMain />
      <Header />
      <h2 style={{textAlign: 'center', color: '#0a088e',}}>
        404 Page Not Found 😭
      </h2>
      <Footer />
    </>
  )
}
