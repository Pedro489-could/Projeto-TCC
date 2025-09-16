import React from 'react'

const Events = () => {
    const teste = (e) => {
        console.log("Funcionou sim  👌👌");

        // e = Propriedades diferentes
        console.log(e);
        
            }

  return (
    <div>
        {/* Função interna */}
      <button onClick={() => {console.log("Cliquei");}}>
        Clique aqui</button>

       {/* Função externa ao elemento */}
      <button onClick={teste}>Aqui também</button>
    </div>
  )
}

export default Events
