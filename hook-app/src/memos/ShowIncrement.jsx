

import React from 'react'

export const ShowIncrement = ( {increment}) => {
  
  console.log( 'me volvì a generar' );
    return (
        <button
            className="btn btn-primary"
            onClick={ () => {
                increment();
            } }
            >
            Incrementar
        
        </button>
  )
}
