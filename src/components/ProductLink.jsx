//import React from 'react'

export default function ProductLink({url, title, bgcolor}) { //เป็นการรับ props url และ title
  const a_link ={
     color: 'white', 
     textDecoration: 'none',
     padding:'6px 10px',
     backgroundColor: bgcolor, 
     borderRadius: '5px',
  };
  return (
    <>
        <a href={url} style={a_link}>
            {title}
        </a>
    </>
  )
}
