import './home.css';

import slide1 from './midia/mobile_600x.webp'
import slide2 from './midia/mobile1_600x.webp'
import slide3 from './midia/mobile3_600x.webp'
import slide4 from './midia/mobile_4_600x.webp'


function Home() {
    return (
      <div className="home">

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
        <div className='sub-slide'>
          <div className='sub-slide1'>
            <img alt='' src=''  />
            <div className='sub-slide-text'>
              <titulo/>
              <texto/>
              <link/>
            </div>
          </div>

          <div className='sub-slide1'>
            <img alt='' src=''  />
            <div className='sub-slide-text'>
              <titulo/>
              <texto/>
              <link/>
            </div>
          </div>

          <div className='sub-slide1'>
            <img alt='' src=''  />
            <div className='sub-slide-text'>
              <titulo/>
              <texto/>
              <link/>
            </div>
          </div>
        </div>
        {/* INICIO TEXTOS SUB SLIDE */}

      </div>
    );
  }
  
  export default Home;
  