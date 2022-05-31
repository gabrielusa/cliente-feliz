import './Footer.css';

// importação de imagens
import logoFooter from './midia/logo.webp';
import logoFooterRedondo from './midia/logo-redonda.webp'
import meios from './midia/meios-pagamentos.webp';
import insta from './midia/insta.svg';
import zap from './midia/zap.svg';
import tiktok from './midia/tiktok.svg';
import selo_footer from './midia/selo-deguranca.webp'


function Footer() {
  function showOrHide(nome){
    if(document.querySelector(nome).style.display === 'block'){
      document.querySelector(nome).style.display = 'none';
    }
    else {
      document.querySelector(nome).style.display = 'block';
      if(  nome !== '.subtext1-tres' ){
        document.querySelector('.subtext1-tres').style.display = 'none';}
      if(  nome !== '.subtext2-tres' ){
        document.querySelector('.subtext2-tres').style.display = 'none';}
      if(  nome !== '.subtext3-tres' ){
        document.querySelector('.subtext3-tres').style.display = 'none';}
    }
  }

  return ( 
    <div className='main'>

      <img alt='Selo de segurança e garantia da loja cliente feliz' src={selo_footer} className='logo-footer'></img>


      <div className="footer-cima"> 
        <div className="tres-div ">
          <p className='titulo-tres' onClick={() => showOrHide('.subtext1-tres')}>
              Links Úteis
          </p>
        </div>

        <div className="tres-div">
          <p className='titulo-tres' onClick={() => showOrHide('.subtext2-tres')}>
                Você Feliz, Sempre.
          </p>
        </div>

        <div className="tres-div">
          <p className='titulo-tres' onClick={() => showOrHide('.subtext3-tres')}>
            Receba Presentes
          </p>          
        </div>
      </div>
      
      <ul className='subtext1-tres borda-clicada'>
        <li><a href='./contato' className='redirect'>Entre em Contato</a></li>
        <li><a href='./rastreio' className='redirect'>Rastreamento de Pedidos</a></li>
        <li><a href='./trocas-devolucoes' className='redirect'>Trocas e Devoluções</a></li>
        <li><a href='./envios-prazo' className='redirect'>Envio e Prazo de Entrega</a></li>
        <li><a href='./politica-privacidade' className='redirect'>Política de Privacidade</a></li>
        <li><a href='./quem-somos' className='redirect'>Quem Somos</a></li>
        <li><a href='./contato-whatsapp' className='redirect'>Contate um especialista por WhatsApp</a></li>
        <li><a href='./contato-email' className='redirect'>Contate um especialista por Email</a></li>
        {/* <li><a href='./perguntas-frequentes' className='redirect'>Dúvidas Frequentes</a></li> */}
      </ul>

      <div className='subtext2-tres borda-clicada'>
        <img alt="logo loja cliente feliz" src={logoFooterRedondo} width='120px' className='img-redondo'/>
        <p>A nossa maior preocupação é com a sua satisfação. Entre em contato caso tenha alguma dúvida a respeito de nossos serviços ou interaja com nossas redes sociais.</p>
        <p>-</p><p>Queremos você feliz, sempre.</p>
      </div>

      <div className='subtext3-tres borda-clicada'>
        <p>Digite o seu melhor e-mail e aguarde a surpresa que temos para você</p>
        <p>confira também a sua caixa de spam caso não receba nada.</p>
        <p>-</p>
        <p>*input do Whatsapp da pessoa*</p>
        <p>Enviar</p>
      </div>  
      
      {/* <div className='footer-baixo'> */}
        <div className='tres'>
          <img alt="logo cliente feliz" src={meios} className='payments-footer' />
          <img alt="logo cliente feliz" src={logoFooter}  className='logo-footer'/>
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
  );
}
  
export default Footer;
  