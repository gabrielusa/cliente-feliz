import './pop.css';

function Pop1() {

    return (
        <div className='pop-up'>
            <div className='pop-up-margin'>
                <div className='pop-up-close'>
                    <p>x</p>
                </div>

                <div className='pop-up-data'>
                    <p className='pop-up-title'>Seja Feliz com 10% OFF</p>
                    <p className='pop-up-text'>Deixe o seu Whatsapp agora e ganhe 10% de desconto para completar a sua cozinha com o seu primeiro Unto-Pencil.</p>
                    <p className='pop-up-input'>Número celular</p>
                    <button className='pop-up-btn'>EU QUERO AGORA</button>
                    <p className='pop-up-text'>Não gosto de desconto</p>
                    <p className='pop-up-subtext'>Eu concordo com a Política de Privacidade e os Termos de Serviço da Loja Cliente Feliz.</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default Pop1;