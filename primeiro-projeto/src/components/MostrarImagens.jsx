import React from 'react';

import ImgAnjo from "../assets/Anjo.webp"

const MostrarImagens = () => {
    return (
    <div>
      
      {/* Imagensvia link externo */}
      <h3> Coringa </h3>
      <img src="https://rollingstone.com.br/wp-content/uploads/killing-joke_ajustada_brianbollanddccomics.jpg" alt="" width={900} height={500} />
      {/* Imagensvia link assets */}
      <h3>Anjo</h3>
      <img src={ImgAnjo} alt=""  width={900} height={500}/>
      {/* Imagensvia link pública */}
      <h3>Dio</h3>
      <img src="../Dio.jpg" alt=""  width={900} height={500}/>
    </div>
  )
}

export default MostrarImagens
