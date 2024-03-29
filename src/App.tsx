import React from "react";
import Nav from "./Nav";
import logo from "./assets/corinthians.png"; // Importe a imagem corretamente
import Branca from './assets/BRANCA.avif'
const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <div style={{ textAlign: 'center' }}>
  <figure>
    <img src={logo} alt="Logo" />
  </figure>
</div>




      <h1 className="img-furia" id="story" >História</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', padding: '0 20px' }}>
  <div style={{ maxWidth: '800px', width: '100%' }}>

    <h4 style={{ textAlign: 'center' }} >
      O Sport Club Corinthians Paulista, comumente conhecido como Corinthians,
      foi fundado em 1º de setembro de 1910 por um grupo de operários do
      bairro Bom Retiro, em São Paulo. O nome do clube foi inspirado no
      Corinthian Football Club de Londres, que estava fazendo uma turnê pelo
      Brasil na época. O primeiro presidente escolhido foi o alfaiate Miguel
      Battaglia, que afirmou: “O Corinthians vai ser o time do povo e o povo é
      quem vai fazer o time”. A primeira partida do Corinthians fora da
      cidade de São Paulo ocorreu em 17 de setembro de 1911, com uma vitória
      sobre a Ponte Preta em Campinas por 1 a 0. O primeiro título do Sport
      Club Corinthians Paulista veio em 1914. Com 10 vitórias em 10 jogos
      disputados, o Timão marcou 37 gols e venceu a última partida por 3 a 0,
      contra o Lusitano, no Parque Antártica. O atacante Neco foi o
      artilheiro do torneio com 12 gols. Ao longo dos anos, o Corinthians
      conquistou diversos títulos, incluindo o Campeonato Paulista, o
      Campeonato Brasileiro, a Copa do Brasil, a Copa Libertadores da América
      e o Mundial de Clubes da FIFA. O clube é um dos mais bem-sucedidos do
      Brasil e das Américas nos últimos anos. Desde 2014, o Corinthians manda
      suas partidas de futebol na Neo Química Arena. Seus rivais históricos
      são o Palmeiras, com quem disputa o Derby Paulista; o São Paulo, com
      quem disputa o Majestoso; e o Santos, com quem disputa o Clássico
      Alvinegro. 
    </h4>
  </div>




</div>
<h1 id="camisas" className="img-furia">Camisas</h1>

<img src={Branca} alt=""  style={{ height: "400px", width: "400px" }} />
    </div>
  );
};

export default App;
