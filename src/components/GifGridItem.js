import React from 'react'

export const GifGridItem = ({ title, url }) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p> { title } </p>
            <div className="divA">
                <a href={url} target="_blank" rel='noreferrer noopener'>Link</a>
            </div>
        </div>
    )
}
