import React from 'react'

const TemplateExpressions = () => {
 //Aqui vai codigos javascript
 let nome = "Victor"
    let vilao = {

    magia: "Infernal",
    inteligencia:"posso criar universos",
    ameaça:"Multiversal"
 
 }
    return (
  //Aqui vai html  
    <div>
      <h2>Olá , meu nome é  {nome}</h2>
      <p>Eu tenhos magia {vilao.magia}</p>
      <p>Eu tenho inteligencia o suficiente para {vilao.inteligencia}</p>
      <p>Nivel de ameaça{vilao.ameaça}</p>
    </div>
  )
}


export default TemplateExpressions

