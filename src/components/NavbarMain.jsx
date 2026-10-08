//import React from 'react'

export default function NavbarMain() {
    const a_Style = {
        color: 'White',
        textDecoration: 'none',
    };

    const div_Style = {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '15px', 
        backgroundColor: '#150575',
        marginBottom: '50px',
        gap: '5px',
    };

    return (
        <>
            <div style={div_Style}>
                <a href="/" style={a_Style}>HOME</a>
                <a href="/about" style={a_Style}>ABOUT</a>
                <a href="/Product" style={a_Style}>PRODUCT</a>
                <a href="/contact" style={{ color: 'white', textDecoration: 'none'}}>CONTACT</a>
            </div>
        </>
    )
}
