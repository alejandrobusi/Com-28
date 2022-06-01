import React, { useState } from 'react';
import styles from './saludar.module.css';

export default function Saludar(props) {
let count = 0;

  function sumar() {
    count = count + 1;
    console.log(count)
  }
  
  return(
    <>
      <h1 className={styles.title}>contador: {count}</h1>
      <button onClick={() => sumar()}>sumar</button>
    </>
  )
};
