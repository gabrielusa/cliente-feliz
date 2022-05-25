import './Produto.css';

import perspirex from './midia/perspirex.png'

function Produto() {
    return (
      <div className="produto" >
        <img alt="logo loja cliente feliz" src={perspirex} width='75%'></img>
        <p className='sub-text'>© Vendido e entregue pela Rede VFarma.</p>
        <p className='sub-text'>+500 Avaliações positivas.</p>
        <h1 className='titulo'>Unto-Pencil™ Pincel Siliconado com dispenser perfeito para completar a sua cozinha!</h1>
        <p className='sub-text'>foto     foto     foto</p>
        <button className='sub-text'>QUERO O MEU AGORA</button>
        <p className='sub-text'>Chegará grátis entre 9 à 15 dias úteis.</p>
        <p className='sub-text'>Compra Garantida, receba o produto que está esperando ou devolvemos o dinheiro.</p>
        <p className='sub-text'>Devolução Grátis. você tem 7 dias a partir da data de recebimento.</p>

      </div>
    );
  }
  
  export default Produto;
  