import img_one from "./img/rey_atanagildo.png";
import img_dos from "./img/rey_ataulfo.png";
import './App.css';
import { useRef } from "react";

function App() {
  const cambio = 4.130;
  const refCaja = useRef();

  const incrementar = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML)+1;
  }

  const convertir = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML)*cambio;
  }

  const change = (e) => {
    e.target.src = img_dos ;
  }

  const lectura = (e) => {
    refCaja.current.innerHTML = e.target.value;
  }

  return (
    <>
      <div ref={ refCaja } onClick={incrementar} className="caja">1</div>
        <button onClick={ convertir } >Aceptar</button>
        <div><img  onClick={ change } src={ img_one } /></div>
        
        <input  onChange={ lectura } className='campo'/> 
      
    </>
      
  );
}

export default App;
