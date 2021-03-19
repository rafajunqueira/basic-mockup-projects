import './App.css'
import landingPageImg from '../src/img/landing-page.png'
import eCommerceImg from '../src/img/e-commerce.png'
import loginImg from '../src/img/login.png'
import conversorImg from '../src/img/conversor.png'


function App() {
  return (
    <div id="App" className="App">
      <header className="App-header">
        <h1>Projetos Mock-Ups</h1>
      </header>
      <div id="main">
        <div id="card-landing-page" className="card row-one">
          <h1>Página Institucional</h1>
          <img src={landingPageImg} className="center" alt='Landing-Page'></img>
          <p>Reprehenderit aliquip ut sint occaecat ut excepteur culpa consectetur nulla officia aliquip ut sint occaecat ut excepteur culpa consectetur nulla officia.</p>
        </div>
        <div id="card-ecommerce" className="card row-one">
          <h1>E-Commerce</h1>
          <img src={eCommerceImg} className="center" alt='E-Commerce'></img>
          <p>Reprehenderit aliquip ut sint occaecat ut excepteur culpa consectetur nulla officia aliquip ut sint occaecat ut excepteur culpa consectetur nulla officia.</p>
        </div>
        <div id="card-login" className="card row-two">
          <h1>Página de Autenticação</h1>
          <img src={loginImg} className="center" alt='Login'></img>
          <p>Reprehenderit aliquip ut sint occaecat ut excepteur culpa consectetur nulla officia aliquip ut sint occaecat ut excepteur culpa consectetur nulla officia.</p>
        </div>
        <div id="card-conversor" className="card row-two">
          <h1>Conversores</h1>
          <img src={conversorImg} className="center" alt='Conversor'></img>
          <p>Reprehenderit aliquip ut sint occaecat ut excepteur culpa consectetur nulla officia aliquip ut sint occaecat ut excepteur culpa consectetur nulla officia.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
