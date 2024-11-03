import { useState, useEffect } from "react"
import FirstComponent from "./Componentes/FirstComponent"

function App() {

  useEffect(()=>{
    console.log("Ejecutandose")
  }, [])

  return (
    <>
    <FirstComponent></FirstComponent>
    <FirstComponent /> 
    <FirstComponent /> 
    </>
  );
}

export default App;
