import { useState } from "react"



export const AddCategory = () => {
  
  const [inputValue, setInputValue] = useState('Ranma 1/2')
  
  const onInputChange = ({target}) => {
    setInputValue( target.value );
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log( inputValue );
  };
  
    return (
    
    <form onSubmit={ onSubmit } >
        <input
          type="text"
          placeholder="Buscar Gifs"
          value={ inputValue }
          onChange={ onInputChange }
        />
    </form>

    

  )
}


