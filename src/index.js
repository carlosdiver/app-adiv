import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //Estado do jogo - entrada, rodando, saída
  const [estado, setEstado] = useState("ENTRADA");

  //Palpite
  const [palpite, setPalpite] = useState(150);
  const [numPalpite, setNumPalpite] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpite(1);
    setPalpite(150);
  };
  if (estado === "ENTRADA") {
    return (
      <div className="Main">
        <h1>Olá, vamos começar?</h1>
        <h2>Pense em um número de 0 a 300.</h2>
        <h3> Vou tentar adivinhar seu pensamento!</h3>
        <button className="Green" onClick={iniciarJogo}>
          Começar a jogar!
        </button>
      </div>
    );
  }

  const menor = () => {
    setNumPalpite(numPalpite + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };
  const maior = () => {
    setNumPalpite(numPalpite + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };
  const acertou = () => {
    setEstado("FIM");
  };
  if (estado === "FIM") {
    return (
      <div className="App">
        <h2>
          {numPalpite <= 5 ? "Que maravilha, " : "Demorou, mas "}acertei na{" "}
          {numPalpite}&#170; tentativa!
        </h2>
        <h3>
          Seu número era o <span className="Smile">{palpite} &#9786;</span>{" "}
        </h3>
        <button className="Green" onClick={iniciarJogo}>
          Iniciar novamente
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <h2>
        {numPalpite === 1 ? "Vamos lá, " : "Então "} o seu número é {palpite}?
      </h2>
      <button className="Red" onClick={menor}>
        - Menor
      </button>
      <button className="Red" onClick={maior}>
        + Maior
      </button>
      <br />
      <button className="Orange" onClick={acertou}>
        &#10004;Acertou!
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
