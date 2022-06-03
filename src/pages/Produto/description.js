import './Produto.css';

import perspirex from './midia/perspirex.png'
import desc1 from './midia/desc1.webp'
import desc2 from './midia/desc2.webp'
import desc3 from './midia/desc3.webp'
import desc4 from './midia/desc4.webp'
import desc5 from './midia/desc5.webp'
import desc6 from './midia/desc6.webp'
import desc7 from './midia/desc7.webp'
import desc8 from './midia/desc8.webp'
import desc9 from './midia/desc9.webp'
import desc10 from './midia/desc10.webp'


export default function Description() {
    return (
            <div className='description'>
                <div className='description-white'>
                    <div className='mw-600'>
                        <div className='description-title'>Agora suas receitas ficarão incrivelmente práticas!</div>
                        <img src={desc1}  alt='' className='description-img'/>
                        <div className='description-text'>Com um Design Super moderno, um Bocal que ajuda a não fazer sujeira o Unto-Pencil™ é produzido com materiais de alta qualidade que são antibacterianos e antifúngicos.</div>
                    </div>
                </div>

                <div className='description-grey'>
                    <div className='mw-600'>
                        <div className='description-title'>Materiais da melhor qualidade e resistência.</div>
                        <img src={desc2} alt='' className='description-img'/>
                        <div className='description-text'>Já chega de fazer sujeira na cozinha enquanto prepara aquela receita deliciosa. A loja cliente feliz apresenta o Unto-Pencil™, um produto Feito com o exclusivo Silicone-Inteligente, que irá deixar suas receitas muito mais práticas e fáceis, atuando como um pincel e dispensador de óleo tudo em um só...</div>
                        <img src={desc3} alt='' className='description-img'/>
                        <button className='btn-description'>COMPRAR AGORA</button>
                    </div>
                </div>

                <div className='description-white'>
                    <div className='mw-600'>
                        <div className='description-title'>Suporta grandes temperaturas sem derreter!</div>
                        <img src={desc4} alt='' className='description-img'/>
                        <img src={desc5} alt='' className='description-img'/>
                    </div>
                </div>

                <div className='description-grey'>
                    <div className='mw-600'>
                        <div className='description-title'> ferramenta de cozinha completa.</div>
                        <img src={desc6} alt='' className='description-img'/>
                        <div className='description-text'>Unto-Pencil™ é uma ferramenta de cozinha completa para assar, cozinhar e também fazer aquele churrasco. Com um design super moderno, um bocal projetado para não fazer sujeira.</div>    
                        <img src={desc7} alt='' className='description-img'/>
                        <button className='btn-description'>COMPRAR AGORA</button>
                    </div>
                </div>

                <div className='description-white'>
                    <div className='mw-600'>
                        <div className='description-title'>Tampa selada à prova de poeira.</div>
                        <img src={desc8} alt='' className='description-img'/>
                        <div className='description-text'>Todas as peças são encaixadas e removíveis para facilitar o uso e tornar sua limpeza muito fácil e evitar vazamentos.</div>
                        <img src={desc9} alt='' className='description-img'/>
                    </div>
                </div>

                <div className='description-grey '>
                    <div className='mw-600'>
                        <div className='description-title'>Para todo tipo de Receitas!</div>
                        <img src={desc10} alt='' className='description-img'/>
                        <div className='description-text '>Prefeito para fazer bolos ou pizza em casa, cozinhar peixe ou bife e muito mais!</div>    
                    </div>
                </div>

            </div>
    ) }