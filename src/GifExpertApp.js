import React, {useState} from 'react'
import { AddCategorias } from './components/AddCategorias';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categorys, setCategorys] = useState([]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategorias setCategorys={setCategorys} />
            <hr />
            <div>
                {
                    categorys.map( (category) => <GifGrid category={category} key={category} />)
                }
            </div>
        </>
    )
}
