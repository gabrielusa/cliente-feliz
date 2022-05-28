import './Header.css';
import React from 'react'

import logo from './logo-cliente-feliz.png'


function Header() {
    return (
      <div className='header' >
        {/* input serve para validar se o announcemente aparece ou n */}
        <input type='checkbox' name='announcement-close' id='check-announcement' className='input-slide' />
        <div className='announcement'>
          <span className='announcement-text'><b>Parabéns!</b> Você ganhou frete grátis para o seu pedido!</span>
          <label className='close-announcement' for='check-announcement'>x</label>
        </div>

        <div  className='tab' >
          <a href='./'>
            <img alt="logo cliente feliz" src={logo}  className='center-top-logo' />
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
  