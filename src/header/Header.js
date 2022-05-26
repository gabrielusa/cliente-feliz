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
          <a href='./home'>
            <img alt="logo cliente feliz" src={logo} width='160px' className='center-top-logo' />
          </a>
          
          <div className='center-top'>
            <a className='tres-top' href='./contato'>Contato</a> 
            <a className='tres-top' href='./rastreio'>Rastreio</a>
            <a className='tres-top' href='./produto'>Oferta</a>
          </div>
        </div>

      </div>
    );
  }
  
  export default Header;
  