//import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavbarMain from '../components/NavbarMain'

export default function About() {
  return (
    <>
      
      <>
        <NavbarMain />
        <Header />
        <h2 style={{textAlign: 'center', color: '#0a088e',}}>About Page</h2>
        <p style={{textAlign: 'center',}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eveniet assumenda iure non nulla ipsa blanditiis voluptatum exercitationem dolorem reiciendis. Odio quod, alias officiis temporibus sequi ipsa eum iste beatae.
        </p>
        <Footer/>
      </>
    </>
  )
}
