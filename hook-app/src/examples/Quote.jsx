import { useLayoutEffect, useRef, useState } from "react"


export const Quote = ( { quote, author } ) => {

  const pRef = useRef();
  const [ boxSize, setBozSize ] =useState( { width: 0, heigth: 0 } );

  useLayoutEffect(() => {
    const { width, heigth } = pRef.current.getBoundingClientRect();
    setBozSize( { heigth, width } );
  }, [ quote ])

    
  return (
    
            <blockquote 
            className="blockquote text-end"
            style={ {display: 'flex'} }
            >
              <p ref={ pRef } className="mb-1">{ quote }</p>
              <footer className="blockquote-footer">{ author }</footer>
            </blockquote>
  )
}


