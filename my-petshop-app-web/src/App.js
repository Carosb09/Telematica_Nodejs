import { useState, useEffect } from "react";
import FirstComponent from "./Componentes/FirstComponent";
import "./Styles.css"

function App() {
  const[Products, setProducts] = useState([])
  useEffect(() => {
    console.log("Ejecutándose");

    fetch('https://telematica-nodejs.onrender.com/Products/', {
      method: "GET"

    }).then(response => response.json()
      .then(data => setProducts(data))
      .catch(err => console.log(err)) 
    )
      .catch(errorResponse => console.log(errorResponse))
  }, [])

  return (
    <>
      <FirstComponent></FirstComponent>
      <FirstComponent />
      {Products.length === 0 ?
      <h3>No hay productos registrados</h3>:
      Products.map(Products => <div className="fondo">
      <h3>ID: {Products.id}</h3>
      <p>Producto: {Products.Nombre}</p>
      <p>{Products.Color}</p>
      <p>{Products.Cantidad}</p>
      </div>)
      }
    </>
  );
  }

export default App;
