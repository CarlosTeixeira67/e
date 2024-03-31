import React from "react";
import Nav from "./Nav";
import logo from "./assets/corinthians.png"; // Importe a imagem corretamente
import Branca from "./assets/branca.png";
import Preto from "./assets/preta.png";
import Azul from './assets/azul.png'
import Blusa1 from './assets/BLUSA1.png'
import Blusa2 from './assets/BLUSA2.png'
import Blusa3 from './assets/BLUSA3.png'
const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <div style={{ textAlign: "center" }}>
        <figure>
        <img 
  src={logo} 
  alt="Logo" 
  style={{ 
    marginRight: "2px", 
    height: "auto",  /* Altura automática para manter a proporção */
    maxWidth: "100%", /* Largura máxima de 100% do contêiner */
    maxHeight: "100vh" /* Altura máxima de 100% da altura da viewport */
  }}
/>

        </figure>
      </div>

      <h1 className="img-furia" id="story">História</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
          padding: "0 20px",
        }}
      >
        <div style={{ maxWidth: "800px", width: "100%" }}>
          <h4 style={{ textAlign: "center" }}>
            O Sport Club Corinthians Paulista, comumente conhecido como
            Corinthians, foi fundado em 1º de setembro de 1910 por um grupo de
            operários do bairro Bom Retiro, em São Paulo. O nome do clube foi
            inspirado no Corinthian Football Club de Londres, que estava fazendo
            uma turnê pelo Brasil na época. O primeiro presidente escolhido foi
            o alfaiate Miguel Battaglia, que afirmou: “O Corinthians vai ser o
            time do povo e o povo é quem vai fazer o time”. A primeira partida
            do Corinthians fora da cidade de São Paulo ocorreu em 17 de setembro
            de 1911, com uma vitória sobre a Ponte Preta em Campinas por 1 a 0.
            O primeiro título do Sport Club Corinthians Paulista veio em 1914.
            Com 10 vitórias em 10 jogos disputados, o Timão marcou 37 gols e
            venceu a última partida por 3 a 0, contra o Lusitano, no Parque
            Antártica. O atacante Neco foi o artilheiro do torneio com 12 gols.
            Ao longo dos anos, o Corinthians conquistou diversos títulos,
            incluindo o Campeonato Paulista, o Campeonato Brasileiro, a Copa do
            Brasil, a Copa Libertadores da América e o Mundial de Clubes da
            FIFA. O clube é um dos mais bem-sucedidos do Brasil e das Américas
            nos últimos anos. Desde 2014, o Corinthians manda suas partidas de
            futebol na Neo Química Arena. Seus rivais históricos são o
            Palmeiras, com quem disputa o Derby Paulista; o São Paulo, com quem
            disputa o Majestoso; e o Santos, com quem disputa o Clássico
            Alvinegro.
          </h4>
        </div>
      </div>
      <h1 id="camisas" className="img-furia">
        Camisas
      </h1>

      <div className="camisas-container">
  <div className="camisa-item">
    <img src={Branca} alt="" style={{ height: "400px", width: "400px" }} />
    <p>
      <a href="https://www.nike.com.br/camisa-nike-corinthians-i-2023-24-torcedor-pro-masculina-026111.html?cor=51&gad_source=1&gclid=Cj0KCQjwzZmwBhD8ARIsAH4v1gWQp9ZQRS4q1dizIoNa11KZeptyOcGzRoYTdi7G3BLKAluTdF8tGEgaAg9wEALw_wcB">
        <button>Comprar por Preço: R$600</button>
      </a>
    </p>
  </div>
  <div className="camisa-item">
    <img src={Preto} alt="" style={{ height: "400px", width: "400px" }} />
    <p>
      <a href="https://www.centauro.com.br/camisa-nike-corinthians-ii-2023-24-torcedor-pro-masculina-m0xfyj-mktp.html?cor=02&gad_source=1&gclid=Cj0KCQjwzZmwBhD8ARIsAH4v1gUW0RtDO5B9UcimZfRcHt6yWhLQezNVW6LAlg9yUCDRvSHZhp_h8xAaAi37EALw_wcB">
        <button>Comprar por Preço: R$190</button>
      </a>
    </p>
  </div>
  <div className="camisa-item">
    <img src={Azul} alt="" style={{ height: "400px", width: "400px" }} />
    <p>
      <a href="https://www.nike.com.br/camisa-de-goleiro-nike-corinthians-2023-24-torcedor-po-masculina-026124.html">
        <button>Comprar por Preço: R$285</button>
      </a>
    </p>
  </div>
</div>
<h1 className="img-furia" id="moletons">Moletons</h1>
<div className="camisas-container">
  <div className="camisa-item">
    <img src={Blusa1} alt="" style={{ height: "400px", width: "400px" }} />
    <p>
      <a href="https://www.nike.com.br/blusao-nike-corinthians-feminino-025938.html">
        <button>Comprar por Preço: R$494</button>
      </a>
    </p>
  </div>
  <div className="camisa-item">
    <img src={Blusa2} alt="" style={{ height: "400px", width: "400px" }} />
    <p>
      <a href="https://www.nike.com.br/blusao-nike-corinthians-essential-feminino-021937.html">
        <button>PRODUTO INDISPONÍVEL</button>
      </a>
    </p>
  </div>
  <div className="camisa-item">
    <img src={Blusa3} alt="" style={{ height: "400px", width: "400px" }} />
    <p>
      <a href="https://www.nike.com.br/blusao-nike-corinthians-club-iii-masculino-027107.html?cor=0L">
        <button>Comprar por Preço: R$332,50</button>
      </a>
    </p>
  </div>
</div>


    </div>
  );
};

export default App;
