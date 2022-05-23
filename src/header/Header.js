import './Header.css';
import React from 'react'

import logo from './logo-cliente-feliz.png'


function Header() {
    return (
      <div className='header' >
        <div className='announcement'>
          <b>Parabéns!</b> Você ganhou frete grátis para o seu pedido!
        </div>

        <div  className='tab' >
        <img alt="logo cliente feliz" src={logo} width='130px' className='img-logo'/>
          <div className='center-top'>
            Inicio
            Rastreio
            Ofertas
          </div>
        </div>

      </div>
    );
  }
  
  export default Header;
  