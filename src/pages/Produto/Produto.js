import './Produto.css';
import  Description from './description'
import  Review from './Review'


import perspirex from './midia/perspirex.png'
import arrow_back from './midia/arrow_back.svg'
import check from './midia/check.svg'
import delivery from './midia/delivery.svg'
import payment_method from './midia/payment.webp'
import star from './midia/star.svg'
import verificado from './midia/verificado.svg'
import selo_footer from '../../footer/midia/selo-deguranca.webp'

function Produto() {
    return (
      <div>
        <div className="margin-7vw" >
          <div className='inicio-produto'>
           <div className='inicio-produto-one'>
              <img alt="logo loja cliente feliz" src={perspirex} width='75%' className='foto'/>

          </div>
            <div className='inicio-produto-two'>

              <p className='sub-text'><span className='bold'>© produto exclusivo</span> da Loja Cliente Feliz.</p>

              <div className='rate-stars'>
                <img alt='star' src={star} width='14px'/>
                <img alt='star' src={star} width='14px'/>
                <img alt='star' src={star} width='14px'/>
                <img alt='star' src={star} width='14px'/>
                <img alt='star' src={star} width='14px'/>
                <p className='sub-text'>&nbsp;(20 Avaliações.)</p>
              </div>

              <div className='product-title'>
                <p className='titulo-produto'>
                  <span className='titulo-produto bold'>Unto-Pencil™</span>Pincel Siliconado com dispenser <img className='verificado' alt='produto exclusivo da loja cliente feliz' src={verificado} width='16px' />
                </p>
              </div>

              <div className='price'>
              <p className='price-min'>R$ 176,00</p> 
              <p className='price-max'>&nbsp;R$ 116,00</p>
              </div>

              <p className='sub-text'>Cor: Marrom</p>
              <div className='lateral'>
                <div className='redondo marrom'>a</div>
                <div className='redondo azul'>b</div>
                <div className='redondo verde'>c</div>
              </div>

              
              <div className='produto-inicio-btn'>
                <button className='btn-product'>COMPRAR AGORA</button>
              </div>
            
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

              {Description()}
              
              {Review()}
              <img alt='Selo de segurança e garantia da loja cliente feliz' src={selo_footer} className='selo-footer'/>
              <div className='produto-inicio-btn'>
                <button className='btn-description'>compra garantida</button>
              </div>
              
      </div>
    );
  }
  
  export default Produto;