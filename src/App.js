import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Header from './header/Header';
import Footer from './footer/Footer';

// importando páginas
import Home from './pages/Home/Home';
import Produto from './pages/Produto/Produto';
import Rastreio from './pages/institucional/rastreio';
import Contato from './pages/institucional/contato';
import Email from './pages/institucional/e-mail';
import Envio from './pages/institucional/envio';
import Faq from './pages/institucional/faq';
import Privacidade from './pages/institucional/privacidade';
import QuemSomos from './pages/institucional/quem somos';
import Trocas from './pages/institucional/trocas-e-devolucao';
import Wpp from './pages/institucional/whatsapp';
import Pop1 from './pages/pop-up/pop1';
import Review from './pages/Produto/Review';
import Description from './pages/Produto/description';




import '../src/css/reset.css';

function App() {
  return (
    <div >
      
      {/* Parte de cima do site */}
      <Header/>

      {/* Conteúdo do site */}
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/produto" element={<Produto/>}></Route>
            <Route path="/rastreio" element={<Rastreio/>}></Route>
            <Route path="/contato" element={<Contato/>}></Route>
            <Route path="/contato-whatsapp" element={<Wpp/>}></Route>
            <Route path="/contato-email" element={<Email/>}></Route>
            <Route path="/envios-prazo" element={<Envio/>}></Route>
            <Route path="/perguntas-frequentes" element={<Faq/>}></Route>
            <Route path="/politica-privacidade" element={<Privacidade/>}></Route>
            <Route path="/quem-somos" element={<QuemSomos/>}></Route>
            <Route path="/trocas-devolucoes" element={<Trocas/>}></Route>
            <Route path="/pop-up" element={<Pop1/>}></Route>
            <Route path="/Description" element={<Description/>}></Route>
            <Route path="/Review" element={<Review/>}></Route>

            
          </Routes>
      </Router>

      {/* Parte baixa do site */}
      <Footer/>
    </div>
  );
}

export default App;
