import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    return (
        <div>
            <p>{title}</p>
            <img src={url} alt="gif" />
        </div>
    )
}
