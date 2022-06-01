import React from 'react';

function Card(props) {
  const { image, name, origin } = props.personajes;

  return (
    <div className="card m-3 col-2 g-0 shadow">
      <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 className="card-title">Nombre: {name}</h3>
        <p className="card-title">Origen: {origin.name}</p>
      </div>
    </div>
  )
};

export default Card;
