import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas eb <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

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
    test('No debe de postear la informacion on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).not.toHaveBeenCalled();
    });



});
