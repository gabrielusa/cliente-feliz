import './Produto.css';

import perspirex from './midia/perspirex.png'
import arrow_back from './midia/arrow_back.svg'
import check from './midia/check.svg'
import delivery from './midia/delivery.svg'

function Produto() {
    return (
      <div className="produto" >
        <img alt="logo loja cliente feliz" src={perspirex} width='75%'></img>
        <p className='sub-text'>© Vendido e entregue pela Rede VFarma.</p>
        <p className='sub-text'>+500 Avaliações positivas.</p>
        <p className='titulo-produto'><spam className='titulo-produto bold'>Unto-Pencil™</spam>Pincel Siliconado com dispenser perfeito para completar a sua cozinha!</p>

        <p className='sub-text'>foto     foto     foto</p>
        <button className='btn-product'>QUERO O MEU AGORA</button>

        <div className='disclaimer-product'>

          <div className='disclaimer-two'>
            <img alt="logo cliente feliz" src={delivery} width='20px' className='disclaimer-icon'/>
            <p className='disclaimer-text verde-ml'>Chegará grátis <spam className='disclaimer-text bold verde-ml'> entre 9 à 15 dias úteis.</spam></p>     
          </div>

          <div className='disclaimer-two'>
            <img alt="logo cliente feliz" src={check} width='20px' className='disclaimer-icon'/>
            <p className='disclaimer-text'><spam className='disclaimer-text bold'>Compra Garantida,</spam> receba o produto que está esperando ou devolvemos o dinheiro.</p>    
          </div>

          <div className='disclaimer-two'>
            <img alt="logo cliente feliz" src={arrow_back} width='20px' className='disclaimer-icon'/>
            <p className='disclaimer-text'><spam className='disclaimer-text bold'>Devolução Grátis.</spam> você tem 7 dias a partir da data de recebimento.</p>   
          </div>
          
        </div>
      </div>
    );
  }
  
  export default Produto;