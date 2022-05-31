import './Produto.css';

import perspirex from './midia/perspirex.png'
import arrow_back from './midia/arrow_back.svg'
import check from './midia/check.svg'
import delivery from './midia/delivery.svg'
import payment_method from './midia/payment.webp'
import star from './midia/star.svg'
import verificado from './midia/verificado.svg'

function Produto() {
    return (
      <div className="margin-7vw" >

        <div className='inicio-produto'>

         <div className='inicio-produto-one'>

          {/* INICIO SLIDE INICIAL */}
          <div className='content-product'>
            <div className='slides'>
              <input type='checkbox' name='produto-slide' id='produto-slide1' className='input-slide'/>
              <input type='checkbox' name='produto-slide' id='produto-slide2' className='input-slide'/>
              <input type='checkbox' name='produto-slide' id='produto-slide3' className='input-slide'/>
              <input type='checkbox' name='produto-slide' id='produto-slide4' className='input-slide'/>

              <div className='slide s1'>
                <img src={perspirex} alt=''/>
              </div>
              <div className='slide'>
                <img src={perspirex} alt=''/>
              </div>
              <div className='slide'>
                <img src={perspirex} alt=''/>
              </div>
              <div className='slide'>
                <img src={perspirex} alt=''/>
              </div>

              <div className='navigation'>
                <label className='bar' for='produto-slide1'/>
                <label className='bar' for='produto-slide2'/>
                <label className='bar' for='produto-slide3'/>
                <label className='bar' for='produto-slide4'/>
              </div>
            </div>
          </div>
          {/* FIM SLIDE INICIAL */}


            {/* <img alt="logo loja cliente feliz" src={perspirex} width='75%' className='foto'/> */}
            <p className='sub-text'>© Vendido e entregue pela Rede VFarma.</p>

            <div className='rate-stars'>
              <img alt='star' src={star} width='14px'/>
              <img alt='star' src={star} width='14px'/>
              <img alt='star' src={star} width='14px'/>
              <img alt='star' src={star} width='14px'/>
              <img alt='star' src={star} width='14px'/>
              <p className='sub-text'>(+500 Avaliações positivas.)</p>
            </div>

          </div>
          <div className='inicio-produto-two'>

            <div className='product-title'>
              <p className='titulo-produto'>
                <span className='titulo-produto bold'>Unto-Pencil™</span>Pincel Siliconado com dispenser <img className='verificado' alt='produto exclusivo da loja cliente feliz' src={verificado} width='20px' />
              </p>
            </div>

            <div className='price'>
            <p className='price-min'>R$ 176,00</p> 
            <p className='price-max'>&nbsp;R$ 116,00</p>
            </div>

            <p className='sub-text'>foto     foto     foto</p>
            <button className='btn-product'>QUERO O MEU AGORA</button>

            <div className='disclaimer-product'>

              <div className='disclaimer-two'>
                <img alt="logo cliente feliz" src={delivery} width='20px' className='disclaimer-icon'/>
                <p className='disclaimer-text verde-ml'>Chegará grátis <span className='disclaimer-text bold verde-ml'> entre 9 à 15 dias úteis.</span></p>     
              </div>

              <div className='disclaimer-two'>
                <img alt="logo cliente feliz" src={check} width='20px' className='disclaimer-icon'/>
                <p className='disclaimer-text'><span className='disclaimer-text bold'>Compra Garantida,</span> receba o produto que está esperando ou devolvemos o dinheiro.</p>    
              </div>

              <div className='disclaimer-two'>
                <img alt="logo cliente feliz" src={arrow_back} width='20px' className='disclaimer-icon'/>
                <p className='disclaimer-text'><span className='disclaimer-text bold'>Devolução Grátis.</span> você tem 7 dias a partir da data de recebimento.</p>   
              </div>
              
            </div>

            <div className='payment-method'>
              <img alt='metodo de pagamento seguro' src={payment_method} width='280px'  className='max-w-300 bot-20'  ></img>
              <a href='./contato' className='disclaimer-text azul-link'>Dificuldades com o pagamento?</a>
            </div>

          </div>

        </div>

      </div>
    );
  }
  
  export default Produto;