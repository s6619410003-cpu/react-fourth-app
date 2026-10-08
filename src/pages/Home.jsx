//import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavbarMain from '../components/NavbarMain'
import hero from '../assets/hero.png'

export default function Home() {
  return (
    <>
      <NavbarMain />
      <Header />
      <h2 style={{textAlign: 'center', color: '#0a088e',}}>Home Page</h2>
      <p style={{textAlign: 'center',}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eveniet assumenda iure non nulla ipsa blanditiis voluptatum exercitationem dolorem reiciendis. Odio quod, alias officiis temporibus sequi ipsa eum iste beatae.
        </p>
        {/*การแสดงรูปจาก public */}
        <img src="super.png" alt="super" style={{width: '100px'}} />
        {/*การแสดงรูปจาก assets */}
        <img src={hero} alt="hero" style={{width: '200px'}} />
      <Footer />
    </>
  )
}
