import { AddCategory } from "../../src/components/AddCategory";
import PropTypes from 'prop-types';
import { fireEvent, render, screen } from "@testing-library/react";

describe('Pruebas en AddCategory', () => {

    test('Debe de cambiar el valor de la caja de texto', () => { 

        render( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole( 'textbox' );

        fireEvent.input( input, {target: { value: 'Slam Dunk' } } );
        
        expect( input.value ).toBe('Slam Dunk');
        screen.debug();


    });


})


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}


