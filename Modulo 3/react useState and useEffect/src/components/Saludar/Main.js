import React, { useState, useEffect } from 'react';
import './main.css';
import Card from '../Card/Card';

export default function Main() {
const [personajes, setPersonajes] = useState();
const [isLoading, setIsLoading] = useState(false);
const [searchTxt, setSearchTxt] = useState("");
const [personajesAux, setPersonajesAux] = useState([personajes]);

  const getData = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(response => {
      setPersonajes(response.results);
      setPersonajesAux(response.results);
      setIsLoading(true);
    })
  };
  
  useEffect(() => {
    getData();
  },[]);
  
  const handleChange = (e) => {
    setSearchTxt(e)
    if (searchTxt.length > 1) {
      const personajesFiltrados = personajesAux.filter((personaje) => {
        if (personaje.name.toLowerCase().indexOf(searchTxt.toLowerCase()) !== -1) {
          return personaje
        }
      });
      setPersonajesAux(personajesFiltrados)
    } else {
      setPersonajesAux(personajes)
    }
  }

  return (    
    <div className='container'>
      <button className='btn btn-primary' onClick={() => getData()}>Traer Data</button>
      <input type="text" placeholder='buscar' onChange={(e) => handleChange(e.target.value)}/>
      <div className='row mt-5 justify-content-center shadow'>
        {
          isLoading
        ?
          personajesAux.map( person => <Card personajes={person} />)
        :
          <h1>loading</h1>
        }
      </div>
    </div>
 )
};
