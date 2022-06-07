import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

function DetaillProduct() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [prod, setProd] = useState();

  const getData = () => {
    fetch(`http://localhost:3000/products/${id}`)
    .then(response => response.json())
    .then(response => {
      setProd(response);
      setIsLoading(true);
    })
  }
  
  useEffect(() => {
    getData();
  }, [])
  
  return (
    <>
      {
        isLoading 
        ?
        <div className='container my-5 shadow'>
          <h1 className='text-center'>Detalle de producto</h1>
          <div className='row'>
            <div className='col-xs-12 col-lg-6'>
              <h2>{prod.title}</h2>
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={prod.img[0]} className="d-block w-100" alt={prod.title}/>
                  </div>
                  <div className="carousel-item">
                    <img src={prod.img[1]} className="d-block w-100" alt={prod.title}/>
                  </div>
                  <div className="carousel-item">
                    <img src={prod.img[2]} className="d-block w-100" alt={prod.title}/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className='col-xs-12 col-lg-6'>
              <h2>Descripción</h2>
              <p>{prod.desc}</p>
              <div className='mt-5 text-end'>
                <h3>${prod.price} USD</h3>
                <h4>Quedan {prod.quantity} UD.</h4>
                <button className='btn btn-primary mb-5'>Comprar</button>
              </div>
            </div>

          </div>
        </div>
        :
        <Loader />
      }
    </>
  )
}

export default DetaillProduct