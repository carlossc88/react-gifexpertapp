import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategorias = ( {setCategorys} ) => {
    const [inputValue, setInputValue] = useState('');
    
    const handSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategorys(c => [inputValue, ...c]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handSubmit}>
            {/* <h2>{inputValue}</h2> */}
            <input 
                type="text"
                className="form-control"
                value= {inputValue}
                onChange= {(e)=> setInputValue(e.target.value)}
                // placeholder="hola mundo"
            />
        </form>
    )
}


AddCategorias.propTypes = {
    setCategorys: PropTypes.func.isRequired
}