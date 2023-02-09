import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('Pruebas en GitItem', () => { 

    const title = 'Sakuragi';
    const url = 'https://slamdunk.com/sakuragi.jpg';

    test('Debe de hacer match con el snapshot', () => {

        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();

    });





});