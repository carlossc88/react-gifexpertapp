import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category);

    return (
            <>
                

                {loading ? 
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>:
                    <h3 className="animate__animated animate__fadeIn">{category}</h3>
                }

                <div className="card-columns">
                        {
                            images.map((image) => (
                            <GifGridItem img={image} key={image.id}/> 
                            ))
                        }
                </div>
            </>
    )
}
