import "./App.css";

import landingPageImg from "../src/img/landing-page.png";
import eCommerceImg from "../src/img/e-commerce.png";
import loginImg from "../src/img/login.png";
import conversorImg from "../src/img/conversor.png";

import Header from "./Header";
import Card from "./Card";

function App() {
  return (
    <div id="App" className="App">
      <Header className="App-header" title="Projetos Mock-Ups"></Header>
      <div id="main">
        <Card
          id="card-landing-page"
          className="center card"
          titulo="Página Institucional"
          src={landingPageImg}
          alt="Página Institucional"
          textContent="Reprehenderit aliquip ut sint occaecat ut excepteur culpa consectetur nulla officia aliquip ut sint occaecat ut excepteur culpa consectetur nulla officia."
        ></Card>
        <Card
          id="card-ecommerce"
          className="center card"
          titulo="E-Commerce"
          src={eCommerceImg}
          alt="E-Commerce"
          textContent="Reprehenderit aliquip ut sint occaecat ut excepteur culpa consectetur nulla officia aliquip ut sint occaecat ut excepteur culpa consectetur nulla officia."
        ></Card>
        <Card
          id="card-login"
          className="center card"
          titulo="Página de Autenticação"
          src={loginImg}
          alt="Login"
          textContent="Reprehenderit aliquip ut sint occaecat ut excepteur culpa consectetur nulla officia aliquip ut sint occaecat ut excepteur culpa consectetur nulla officia."
        ></Card>
        <Card
          id="card-conversores"
          className="center card"
          titulo="Conversores"
          src={conversorImg}
          alt="Conversor"
          textContent="Reprehenderit aliquip ut sint occaecat ut excepteur culpa consectetur nulla officia aliquip ut sint occaecat ut excepteur culpa consectetur nulla officia."
        ></Card>
      </div>
    </div>
  );
}

export default App;
