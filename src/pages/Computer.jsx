//import React from 'react'
import ProductHeader from '../components/ProductHeader'
import Footer from '../components/Footer'

export default function Computer() {
  return (
    <>
      <a href="/product" style={{ color: 'white', textDecoration: 'none' }}>
        <ProductHeader />
      </a>
      <h2 style={{textAlign: 'center', color: '#0a088e',}}>Computer Page</h2>
      <p style={{textAlign: 'center',}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </p>
      <Footer />
    </>
  )
}
