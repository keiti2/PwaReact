import React from "react";
import './Home.css';

const Home: React.FC = () => (
<div className="container" >
  <br></br>
  <h2><p className="text-center">Exemplo PWA com React</p></h2>
  <div className="text-center">
  <img src="https://miro.medium.com/max/700/1*owd84a_YqEeNjP9frRyzIQ.png" className="img-fluid" alt="Imagem responsiva"></img>
  </div>
  <div className="card" >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTORlgCZdiBGan-MDdnQSmg1f5HUUi2DSYiuf-NEu_KnmDX8-M-" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">+Lighthouse</h5>
    <p className="card-text">Ferramenta automatizada de código aberto que aprimora a qualidade de apps da Web.</p>
  </div>
  <div className="card-body">
  <a href="https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fpwatrab01.netlify.com%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext" className="btn btn-info" role="button">Teste Lighthouse</a>
  </div>
  </div>
  
</div>

);

export default Home;