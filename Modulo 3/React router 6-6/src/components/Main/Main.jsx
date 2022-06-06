import React , { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';

function Main() {
const [ products, setProducts ] = useState();
const [ isLoading, setIsLoading ] = useState(false);
  
  const getData = () => {
    fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(response => {
      setProducts(response);
      setIsLoading(true);
    })
  }

  useEffect(() => {
    getData()
  }, [])
  
 
  return (
    <div className='container'>
      <h1 className='text-center'>Bienvenidos a Software Store</h1>
      <div className='row mt-5 justify-content-center shadow'>
        {
          isLoading 
            ?
              products.map((prod) => <Card prod={prod} />)
            :
              <Loader />
        }
      </div>
    </div>
  )
};

export default Main;
