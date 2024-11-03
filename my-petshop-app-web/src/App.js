import { useState, useEffect } from "react"
import FirstComponent from "./Componentes/FirstComponent"
import { response } from "express"

function App() {

  useEffect(()=>{
    console.log("Ejecutandose") 
  fetch('https://telematica-nodejs.onrender.com', {
    method: "GET"
  }).then(response => response.jason()
  .then(data => console.log(data))
  .catch(err = console.log(err))
)
  .catch(errorResponse => console.log(errorResponse))
}, [])
  return (
    <>
    <FirstComponent></FirstComponent>
    <FirstComponent />
    </>
  );
}

export default App;
