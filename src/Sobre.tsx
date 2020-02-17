import React from "react";
import './Sobre.css';


const Sobre: React.FC = () => (
  
  <div className="container">
    <h2><p className="text-center">Sobre</p></h2>
  
<div className="container section">
            <div className="row">
            <div className="col-md-6">
                    <img src="https://miro.medium.com/max/3676/1*6EwWSBknlxfk-zErn-d8DQ.png" alt=""/>
                </div>
                <div className="col-md-6">
                    <h3>
                        Netlify
                    </h3>
                    <p>
                       Utilizado Netlify para Hospedagem do front-end desenvolvido em React.
                    </p>
                    <a href="https://www.netlify.com/" className="btn btn-info" role="button">Mais informações</a>
                </div>
                
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://miro.medium.com/max/1200/0*MZMl76wKo2FQLqG0.png" alt=""/>
                </div>
                <div className="col-md-6">
                    <h3>
                        GitHub
                    </h3>
                    <p>
                       Código hospedado código-fonte no GitGub.
                    </p>
                    <a href="https://github.com/keiti2/PwaReact" className="btn btn-info" role="button">Link Código Fonte</a>
                </div>
            </div>
        </div>
        </div>

);

export default Sobre;