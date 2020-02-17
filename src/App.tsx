import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const About = lazy(() => import("./Sobre"));
const Home = lazy(() => import("./Home"));



const App: React.FC = () => (
  
  <Router>
    <Suspense fallback={<div>Carregando...</div>}>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/Home">PWA ++</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      
      <a className="nav-link" href="/Home">Home <span className="sr-only">Página Inicial</span></a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="/Sobre">Sobre <span className="sr-only">Sobre Exemplo</span></a>
      </li>
    </ul>
  </div>
</nav>
      <Switch>
        <Route path="/Sobre">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;