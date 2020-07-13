import React from 'react'

export const GifGridItem = ({img}) => {

    return (

        <div class="col mb-4">
            <div class="card animate__animated animate__fadeIn">
                <img src={img.url} class="card-img-top" alt={img.title}/>
                <div class="card-body">
                    <h5 class="card-title">{img.title}</h5>
                </div>
            </div>
        </div>
    )
}
