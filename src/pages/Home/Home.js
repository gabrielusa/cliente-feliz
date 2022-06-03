import './home.css';

import slide1 from './midia/mobile_600x.webp'
import slide2 from './midia/mobile1_600x.webp'
import slide3 from './midia/mobile3_600x.webp'
import slide4 from './midia/mobile_4_600x.webp'
import bannershome1 from './midia/banners-home1.webp'
import bannershome2 from './midia/banners-home2.webp'
import bannershome3 from './midia/banners-home3.webp'
import bannershome4 from './midia/banners-home4.webp'


import wallet from './midia/wallet.webp'
import fly from './midia/fly.webp'
import security from './midia/security.webp'

function Home() {
    return (
      <div className="home-page margin-7vw">

        {/* INICIO SLIDE INICIAL */}
        <div className='content'>
          <div className='slides'>
            <input type='radio' name='slide' id='slide1' className='input-slide'/>
            <input type='radio' name='slide' id='slide2' className='input-slide'/>
            <input type='radio' name='slide' id='slide3' className='input-slide'/>
            <input type='radio' name='slide' id='slide4' className='input-slide'/>

            <div className='slide s1'>
              <img src={slide1} alt=''/>
            </div>
            <div className='slide'>
              <img src={slide2} alt=''/>
            </div>
            <div className='slide'>
              <img src={slide3} alt=''/>
            </div>
            <div className='slide'>
              <img src={slide4} alt=''/>
            </div>

            <div className='navigation'>
              <label className='bar' htmlFor='slide1'/>
              <label className='bar' htmlFor='slide2'/>
              <label className='bar' htmlFor='slide3'/>
              <label className='bar' htmlFor='slide4'/>
            </div>
          </div>
        </div>
        {/* FIM SLIDE INICIAL */}

        {/* INICIO TEXTOS SUB SLIDE */}
        <div className='disclaimer-home'>

          <div className='disclaimer-home-two'>
            <img alt="logo cliente feliz" src={wallet} width='25px' className='disclaimer-home-icon'/>
            <div className='disclaimer-home-two-text'>
              <p className=' bold'>Pague com Cartão de Crédito, Boleto ou PIX.</p>
              <p >Aqui você escolhe pagar no cartão de crédito parcelado em até 12 vezes, ou à vista no boleto ou PIX. Com o Mercado Pago você sempre está seguro!</p> 
              <p className='disclaimer-home-two-link' >Estou tendo problemas com pagamentos.</p>
            </div>
          </div>

          <div className='disclaimer-home-two'>
            <img alt="logo cliente feliz" src={fly} width='25px' className='disclaimer-home-icon'/>
            <div className='disclaimer-home-two-text'>
              <p className='bold'>Frete grátis com Rastreamento.</p>  
              <p>Escolha a melhor opção de envio para você, e aproveite para rastrear sua compra em tempo real até recebê-la. Todos os seus pacotes estão sempre protegidos.</p>
              <p className='disclaimer-home-two-link' >Rastreie o seu pedido aqui</p> 
            </div>
  
          </div>

          <div className='disclaimer-home-two'>
            <img alt="logo cliente feliz" src={security} width='25px' className='disclaimer-home-icon'/>
            <div className='disclaimer-home-two-text'>
              <p className='bold'>Segurança, do Início ao Fim.</p>   
              <p >Acompanhamos você até que você receba o produto que comprou. E se não receber o que esperava, devolveremos o seu dinheiro sem complicações.</p> 
              <p className='disclaimer-home-two-link' >Nossas políticas de Trocas e Devoluções.</p>
            </div>

          </div>
          
        </div>
        {/* fim TEXTOS SUB SLIDE */}

        {/* INICIO BANNERS */}  
        <span className='home-title'>Confira:</span>
        <div className='home-banners'>
          <div className='home-banners-solo' id="home-banners-solo1">
            <img alt="Ofertas com até 70% de desconto" src={bannershome1} width='260px' className='home-banners-img'/> 
            <span className='home-text'>Saúde e Beleza</span>
          </div>
          <div className='home-banners-solo' id="home-banners-solo2">
            <img alt="Produtos para casa e cozinha" src={bannershome2} width='260px' className='home-banners-img'/> 
            <span className='home-text'>Casa e Cozinha</span> 
          </div>
          <div className='home-banners-solo' id="home-banners-solo3">
            <img alt="Produtos para o seu melhor amigo cão e gato" src={bannershome3} width='260px' className='home-banners-img'/>  
            <span className='home-text'>PetLove: cães e gatos</span>
          </div>
          <div className='home-banners-solo' id="home-banners-solo4">
            <img alt="Produtos únicos que você precisa" src={bannershome4} width='260px' className='home-banners-img'/>
            <span className='home-text'>Soluções Criativas</span>  
          </div>
        </div>
        {/* FIM BANNERS */}  



        INICIO VIDEO PLAYER  
        {/* <span className='home-title'>Assista:</span>
        <div className='video' align='center'>
          <iframe loading="lazy"
                  // className=video-youtube 
                  align="center"
                  src="https://www.youtube-nocookie.com/embed/nYjVgclZ6ww?controls=0" 
                  title="Conheça a loja mais feliz do Brasil" 
                  frameBorder="0">
          </iframe>
        </div> */}
        {/* FIM VIDEO PLAYER */}  

      </div>
    );
  }
  
  export default Home;
  