import React from 'react'
import '@testing-library/jest-dom'
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Pruebas sobre gifgrid', () => {

    const title = 'Un titulo';
    const url = 'https://test.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('Renderizar GifGridItem', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })
    test('Debe tener un src y alt la img', () => {
        const img = wrapper.find('img');
        // console.log(img.props().src)
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    test('Debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        const result = div.props().className.includes('animate__fadeIn');
        // console.log(div.props().className)
        expect(result).toBe(true);
    })


});
