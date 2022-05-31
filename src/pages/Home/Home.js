import './home.css';

import slide1 from './midia/mobile_600x.webp'
import slide2 from './midia/mobile1_600x.webp'
import slide3 from './midia/mobile3_600x.webp'
import slide4 from './midia/mobile_4_600x.webp'

import arrow_back from '../Produto/midia/arrow_back.svg'
import check from '../Produto/midia/check.svg'
import delivery from '../Produto/midia/delivery.svg'

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
              <label className='bar' for='slide1'/>
              <label className='bar' for='slide2'/>
              <label className='bar' for='slide3'/>
              <label className='bar' for='slide4'/>
            </div>
          </div>
        </div>
        {/* FIM SLIDE INICIAL */}

        {/* INICIO TEXTOS SUB SLIDE */}
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
        {/* INICIO TEXTOS SUB SLIDE */}

      </div>
    );
  }
  
  export default Home;
  