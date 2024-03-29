import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"



export const CallBackHook = () => {
  
  const [counter, setcounter] = useState(10);

  const incrementFather = useCallback(
    ( value ) => {
        setcounter( ( counter ) => counter + value );
    },
    [],
  )
  
    useEffect(() => {
        // incrementFather();
    }, [incrementFather ])
    
  /* const incrementFather = () => {
    setcounter( counter + 1);
  }; */
  
    return (
    <>
        <h1>UseCallback Hook: { counter } </h1>
        <hr/>
        <ShowIncrement increment={ incrementFather } />

    </>
  )
}
