import './Header.css';
import React from 'react'

import logo from './logo-cliente-feliz.png'


function Header() {

  // Evento de scroll dispara a seguinte função:
  // const target = document.querySelector('.header-logo')
  // const target2 = document.querySelector('.tab2')
  // window.addEventListener('scroll', function(){
  //   if(window.pageYOffset > 30){
  //     target.classList.toggle("header-animate", true)
  //     target2.classList.toggle("top-40", true)
  //   } else{
  //     target.classList.toggle("header-animate", false)
  //     target2.classList.toggle("top-40", false) }
  // })

    return (
      <div className='header' >
        {/* input serve para validar se o announcemente aparece ou n */}
        <input type='checkbox' name='announcement-close' id='check-announcement' className='input-slide' />
        <label className='close-announcement' htmlFor='check-announcement'>x</label>
        <div className='announcement'>
          <span className='announcement-text'><b>Parabéns!</b> Você ganhou frete grátis para o seu pedido!</span>
          
        </div>

        <div  className='tab header-logo' >
          <a href='./' >
            <img alt="logo cliente feliz" src={logo}  className='center-top-logo' />
          </a>
        </div>
          
        <div  className='tab2' >
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
  