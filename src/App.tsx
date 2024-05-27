import axios from 'axios';
import { useState } from 'react';
import Tempo from './tempo.tsx';




export default function App(){
  const [tempo,setTempo] = useState(false);

  const clique = () =>{
    setTempo(!tempo);
  }
  const [data,setData] = useState({});
  const [localizacao,setLocalizacao] = useState('')
  const API_KEY = '9a06055b4bb9bb5795f8f99ac815bc38'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=${API_KEY}`;


  const procurarLocalizacao = () => {
    axios.get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    setLocalizacao("");
  }

  return (
    <>
    <div className="Cabecalho">
      <h1>Veja como está o tempo em qualquer cidade</h1>
    </div>
      <div className="Pesquisa">
        <input
          type="text"
          className="Barra-de-pesquisa"
          placeholder="Digite o nome da cidade"
          value={localizacao}
          onChange={(e) => setLocalizacao(e.target.value)}
          onKeyDownCapture={(e) => {
            if (e.key === "Enter") {
              procurarLocalizacao();
              clique();
            }
          }}
        />
        <button
          className="Botao-de-pesquisa"
          onClick={() => {
            procurarLocalizacao();
            clique();
          }}
        >
          Procurar
        </button>
      </div>
    { tempo && <Tempo weatherData={data}/>}
    
    <h6 className="Referencia">Dados de{''}    
    <a href="https://openweathermap.org" target="_blank" rel="noopener noreferrer">
       OpenWeatherMap
    </a>
    </h6>
    </>
  )
}