import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas sobre el componente <GifGrid />', () => {
    const category = 'goku';

    test('Debe de hacer correctamente el render', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar items cuando cargan imagenes', () => {
        const imgs = [
            {
                id: 'BASHJG',
                title: 'Imagen prueba',
                url: 'https://localhost/123.png'
            },
            {
                id: '12BASHJG',
                title: 'Imagen prueba',
                url: 'https://localhost/123.png'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(imgs.length);
    })


})
