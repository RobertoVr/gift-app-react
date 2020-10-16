import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Goku&limit=10&api_key=PVTSe8E8rAfl36W4IWV3d2GoSMEkLoVh';
        const respuesta = await fetch(url);
        const { data } = await respuesta.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        setImages(gifs);
    }

    return (
        <div>
            {
                images.map((img) => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                ))
            }
        </div>
    )
}
