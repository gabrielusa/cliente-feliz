import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Header from './header/Header';
import Footer from './footer/Footer';

import Home from './pages/Home/Home';
import Produto from './pages/Produto/Produto';

import '../src/css/reset.css';

function App() {
  return (
    <div >
      {/* Parte de cima do site */}
      <Header/>

      {/* Rotas entre as páginas do site */}
      <Router>
          <ul>
            <li>
              <Link to="/home">Home-Page</Link>
            </li>
            <li>
              <Link to="/produto">Produto-Page</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/home" element={<Home/>}></Route>
            <Route path="/produto" element={<Produto/>}></Route>
          </Routes>
      </Router>

      {/* Parte baixa do site */}
      <Footer/>
    </div>
  );
}

export default App;
