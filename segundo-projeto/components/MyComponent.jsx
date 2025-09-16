import React from 'react'

// Importação do css externo , para utilização

import "./MyComponent.css"
const MyComponent = () => {
  return (
    <div>
      <h1>Meu incrível componente</h1>
      <p>Parágrafo muito top d aqui não vai vazar </p>
      
      {/* Css utilizando classe */}

      <p className="azul">Este aqui não vai vazar</p>
       <h2 style={{color :"blue", backgroundColor:"pink", fontSize:"100px"}}>
   Texto top,com Estilo top também
     </h2>
    </div>
  )
}

export default MyComponent
