import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header-comun';
import Mascaras from '../../assets/images/cinema.png';
import '../../assets/styles/global.css';
import './style.css';

function Filmes() {

    const [filmes, setFilmes] = useState([]);
   
    useEffect(() => {
      listar();
    }, []);
   
    const listar = () => {
      fetch('http://localhost:5000/api/filmes', {
        method: 'GET',
        headers: {
      
          authorization: 'Bearer ' + localStorage.getItem('token-filmes')
        }
      })
        .then(response => response.json())
        .then(dados => {
          setFilmes(dados);
         
        })
        .catch(err => console.error(err));
    }
   
    return (
      <div>
        <Header description="Lista de filmes da nossa coletanea" />
   
      <main>
        <h1 className='h1'>Lista de Filmes</h1>
        <img className='img'  src={Mascaras} alt=""/>
        <table className='table'>
          <thead>
            <tr>
              <th>Titulo dos Filmes</th>
              <th>Genero</th>
            </tr>
          </thead>
          <tbody>
           
            {
              filmes.map((item: any) => {
                return (
                  <tr key={item.idfilme}>
                    <td>{item.titulo}</td>
                    <td>{item.genero.nome}</td>
                   
                  </tr>
                )
              })
            }
            
          </tbody>
        </table>
   
        </main>
        <br>
        </br>
        <Footer/>
        
      </div>
   
    );
  }
   
  export default Filmes;
  
  