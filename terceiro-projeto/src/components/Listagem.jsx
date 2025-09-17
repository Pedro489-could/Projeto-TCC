import React from 'react'

import { useState } from 'react'
const Listagem = () => {
  const[lista,setLista] = useState(["Lanterna Verde", "Caçador de Marte"," Flash" , "Aquemen"])

  const [personagens] = useState([
    {id :1, nome:"Sleyer",Jogo:"Doom",Ano:"2025"},
    {id :2, nome:"Gereld",Jogo:"The white",Ano:"2015"},
     {id :3, nome:"Arthur",Jogo:"Red Dead",Ano:"2018"},
  ])
  const [numero,setNumero] = useState(1)
  return (
    <div>
        <h1>Liga da justiça</h1>
        <img src="https://pm1.aminoapps.com/6806/11be58f89e38599cdea39ab830f6deea2d9d908av2_hq.jpg" alt="" width={900} height={500}/>
         
         <button onClick={() =>{
            setNumero(numero + 1)
            console.log([...lista]);
            setLista([...lista,numero])
            
        }}>
            Adicionar na lista
        </button>

      <ul>
        <li>Superman</li>
        <li>Batman</li>
        <li>Mulher Maravilha</li>
        {
            lista.map((valor, index) => (<li key={index}>{valor}</li>))
        }
        
      </ul>
      <h2>Personagens</h2>
      {personagens.map( (personagens) => (
        <h3 key ={personagens.id}>O personagem {personagens.nome} faz parte do jogo {personagens.Jogo} que lançou em {personagens.Ano}</h3>
      ))}
      
    </div>
  )
}

export default Listagem
