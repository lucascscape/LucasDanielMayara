import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Mascaras from '../../assets/images/theater.png';
import lixo from '../../assets/images/trash.png';
import atual from '../../assets/images/refresh.png';
import Input from '../../components/input/index';
import Button from '../../components/button/index';
import '../../assets/styles/global.css';
import './style.css';

function Filmes() {
    //prop string genero {get; set;} = "";
    const [idfilme, setIdFilme] = useState(0);
    const [filme, setFilme] = useState('');
   
    const [filmes, setFilmes] = useState([]);
    
    //useEffect te permite executar efeitos colaterais em componentes funcionais
    //Buscar dados é um exemplo de efeito colateral
    //usando o useEffect informo ao React que o componente somente depois da renderização
    //é executado depois da renderização do componente, quando ele já estiver montado na DOM
    useEffect(() => {
      listar();
    }, []);
   
    const listar = () => {
      fetch('http://localhost:5000/api/filmes', {
        method: 'GET',
        headers: {
          //Bearer authentication é o token authentication, um Schema para autenticação HTTP 
          //O Bearer identifica recursos protegidos por um OAuth2.
          authorization: 'Bearer ' + localStorage.getItem('token-filmes')
        }
      })
        .then(response => response.json())
        .then(dados => {
          setFilmes(dados);
        })
        .catch(err => console.error(err));
    }
   
   
    const salvar = () => {
      const form = {
        nome: filme
      };
   
      const method = (idfilme === 0 ? 'POST' : 'PUT');
      const urlRequest = (idfilme === 0 ? 'http://localhost:5000/api/filmes' : 'http://localhost:5000/api/filmes/' + idfilme);
   
      fetch(urlRequest, {
        method: method,
        body: JSON.stringify(form),
        headers: {
          'content-type': 'application/json',
          authorization: 'Bearer ' + localStorage.getItem('token-filmes')
        }
      })
        .then(() => {
          alert('Genero cadastrado');
          setIdFilme(0);
          setFilme('');
          listar();
        })
        .catch(err => console.error(err));
    }
   
    return (
      <div>
        <Header description="Lista de filmes da nossa coletanea" />
   
      <main>
        <h1>Lista de Filmes</h1>
        <div className="imgTitulo">
        <img className="theater" src={Mascaras} alt=""/>
        </div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>titulo</th>
            </tr>
          </thead>
          <tbody>
            {
              filmes.map((item: any) => {
                return (
                  <tr key={item.idfilme}>
                    <td>{item.idFilme}</td>
                    <td>{item.titulo}</td>
                   
                  </tr>
                )
              })
            }
          </tbody>
        </table>
   
        <form onSubmit={event => {
          event.preventDefault();
          salvar();
        }}>
         
        </form>
        </main>
        <Footer/>
        
      </div>
   
    );
  }
   
  export default Filmes;
  
  