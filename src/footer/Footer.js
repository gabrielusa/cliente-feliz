import './Footer.css';

import logoFooter from './midia/logo.webp';
import meios from './midia/meios-pagamentos.webp';
import insta from './midia/insta.svg';
import zap from './midia/zap.svg';
import tiktok from './midia/tiktok.svg';


function Footer() {

    return (
      
      <div className='main'>
       <div className="footer-cima"> 
          <div className="tres">
            <p className='titulo-tres' onClick={()=>{
              if(document.querySelector('.subtext1-tres').style.display === 'block'){
                document.querySelector('.subtext1-tres').style.display = 'none';
              } else {
                  document.querySelector('.subtext1-tres').style.display = 'block';
                  document.querySelector('.subtext2-tres').style.display = 'none';
                  document.querySelector('.subtext3-tres').style.display = 'none';
                }
                }}>
                Links Úteis
            </p>
          </div>

          <div className="tres">
            <p className='titulo-tres' onClick={()=>{
              if(document.querySelector('.subtext2-tres').style.display === 'block'){
                document.querySelector('.subtext2-tres').style.display = 'none';
              } else {document.querySelector('.subtext2-tres').style.display = 'block';
                      document.querySelector('.subtext1-tres').style.display = 'none';
                      document.querySelector('.subtext3-tres').style.display = 'none';
              }
                }}>
                  Você Feliz, Sempre.
            </p>
          </div>

          <div className="tres">
            <p className='titulo-tres' onClick={()=>{
              if(document.querySelector('.subtext3-tres').style.display === 'block'){
                document.querySelector('.subtext3-tres').style.display = 'none';
              } else {document.querySelector('.subtext3-tres').style.display = 'block';
                      document.querySelector('.subtext1-tres').style.display = 'none';
                      document.querySelector('.subtext2-tres').style.display = 'none';
              }
                }}>
              Receba presentes por email
            </p>          
          </div>
       </div>
       
        <ul className='subtext1-tres'>
                <li><a href='./' className='redirect'>Entre em Contato</a></li>
                <li><a href='./' className='redirect'>Rastreamento de Pedidos</a></li>
                <li><a href='./' className='redirect'>Trocas e Devoluções</a></li>
                <li><a href='./' className='redirect'>Envio e Prazo de Entrega</a></li>
                <li><a href='./' className='redirect'>Política de Privacidade</a></li>
                <li><a href='./' className='redirect'>Quem Somos</a></li>
                <li><a href='./' className='redirect'>Contate um especialista por WhatsApp</a></li>
                <li><a href='./' className='redirect'>Contate um especialista por Email</a></li>
                <li><a href='./' className='redirect'>Dúvidas Frequentes</a></li>
        </ul>

        <div className='subtext2-tres'>
          <p >A nossa maior preocupação é com a sua satisfação.</p>
          <p >Entre em contato caso tenha alguma dúvida a respeito de nossos serviços ou interaja com nossas redes sociais.</p>
          <p >Queremos você feliz, sempre.</p>
        </div>

        
        <div className='subtext3-tres'>
          <p>Digite o seu melhor e-mail e aguarde a surpresa que temos para você</p>
          <p>confira também a sua caixa de spam caso não receba nada.</p>
        </div>  
        

        {/* <div className='footer-baixo'> */}
          <div className='tres'>
            <img alt="logo cliente feliz" src={meios} width='240px'/>
            <img alt="logo cliente feliz" src={logoFooter} width='180px' className='logo-footer'/>
          </div>
          <div className='tres'>
            <p className='copy'>Copyright © 2019-2022</p>
            <p className='copy'>lojaclientefeliz.com</p>
            <p className='copy'>CNPJ: 34.345.971/0001-95 / 707, Asa Norte, Brasília/DF 70740-730 - Comércio eletronico de serviços diversos.</p>
          </div>

          <div className='tres-icons'>
            <a className='tres' href='https://www.instagram.com/lojaclientefeliz/'>
              <img alt="logo cliente feliz" src={insta} width='16px' className='tres-icon'/>
            </a>

            <a className='tres' href='https://www.tiktok.com/@lojaclientefeliz'>
              <img alt="logo cliente feliz" src={tiktok} width='16px' className='tres-icon'/>
            </a>

            <a className='tres' href='https://api.whatsapp.com/send?phone=5561982370692&text=Oi%2C%20sou%20um%20cliente%20feliz%20algu%C3%A9m%20pode%20me%20ajudar%3F'>
              <img alt="logo cliente feliz" src={zap} width='16px' className='tres-icon'/>
            </a>
          </div>
        </div>
      // </div>
    );
    
  }
  
  export default Footer;
  