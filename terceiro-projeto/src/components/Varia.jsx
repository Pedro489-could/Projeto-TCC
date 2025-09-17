import React from 'react'

import { useState } from 'react'
const Varia = () => {
// Variável padrão
let itgo = "Sono"
let numero = 11

// Variável com look useState

const [number, setNumber] = useState(9)
const [hero, setHero] = useState("Capuz vermelho")
  return (
    <div>
      {/* Uso de variáveis */}
      <p>A palavra sorteda foi :{itgo}</p>
      <h1>{numero}</h1>
      <button onClick={() => {numero++}}>
        Aumentar contagem
      </button>

      {/* Uso de variaveís a parti de agora  */}
      <h1>{number}</h1>
      <button onClick={() => {setNumber(number + 2)}}>+</button>
        <button onClick={() => {setNumber(9)}}>Resetar</button>
          <button onClick={() => {setNumber(number - 2)}}>/</button>
          {/* Botão que revela  */}
          <h1>Capuz vermelho </h1>
          <button onClick={() => {setHero("Jeshon ")}}>Revelar a indentidade</button>
 
    </div>
  )
}

export default Varia

