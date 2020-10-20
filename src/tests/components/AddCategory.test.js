import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas eb <AddCategory />', () => {

    const setCategories = () => { };
    const wrapper = shallow(<AddCategory setCategories={setCategories} />)

    test('Debe de mostrar correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'hola mundo';
        input.simulate('change', { target: { value } });
        const p = wrapper.find('p').text();
        expect(p.trim()).toBe(value);
    });


});
