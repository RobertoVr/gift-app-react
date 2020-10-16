import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    return (
        <div>
            <h2>GifExpert</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>
            <ol>
                {
                    categories.map(cat => (
                        <GifGrid key={cat} category={cat} />
                    ))
                }
            </ol>
        </div>
    )
}
