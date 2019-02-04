import React from 'react'

const GifList = (props) => {
    return props.gifs.map((gif, index) => Gif(gif, index))
}

const Gif = (gif, index) => {
    return (
        <div key={index}>
            <img src={gif.images.original.url} alt={gif.type}/>
        </div>
    )
}

export default GifList