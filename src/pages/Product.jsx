import Header from '../components/Header'
import Footer from '../components/Footer'
import NavbarMain from '../components/NavbarMain'
import ProductLink from '../components/ProductLink'

export default function Product() {
  return (
    <>
      <NavbarMain />
      <Header />
      <h2 style={{textAlign: 'center', color: '#0a088e',}}>Product Page</h2>
      <div style={{display: 'flex', justifyContent:'center',gap:'10px'}}>
        <ProductLink url="/smartphone" title="SMARTPHONE" bgcolor="#05d1ff" />
        <ProductLink url="/computer" title="COMPUTER" bgcolor="#008f37" />
      </div>
      <p style={{textAlign: 'center',}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum pariatur, eum, magni quidem sapiente eaque ipsa laborum aspernatur, fuga magnam suscipit eveniet et autem dignissimos alias soluta? Quam, enim placeat.
      </p>
      <Footer />
    </>
  )
}
