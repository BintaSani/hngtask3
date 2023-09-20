import React, { useState } from 'react';

import Preview from '../../components/preview/preview';
import IMAGE_DATA from '../../context/images/image.data';
import {ReactComponent as Search} from '../../assets/search.svg' 
import LoadingSpinner from '../../components/spinner/spinner';
import './homepage.scss';

const HomePage = ( ) => {
    const [loading, setLoading] = useState(true);

   const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    setTimeout(() => setLoading(false), 6000);
    const news =IMAGE_DATA;
   
    const searchImages = async (event) => {
        event.preventDefault();
        setData(news);
        
    }    
   
    const filteredImages = data.filter(img=>
        img.tag.toLowerCase().includes(search.toLowerCase()));
        console.log(filteredImages);

    return(
    <div className='home'>
        
        <div className='image' style={{
            backgroundImage: `url(${"https://i.ibb.co/7QRc4tC/mybg.png"})`}}>
            <div className='search-box'>
                <h1>Explore Images</h1>
                <form className='form' >
                    <input type='search' value={search} onChange={(event) => setSearch(event.target.value)} name='search'  className='search' placeholder='Search for photos' />
                    <Search onClick={searchImages}/>
                </form>
            </div>
        </div>
        {loading === false ?   (
        <>{ search ?
        <div className='results'>
            {/* {
                filteredImages
                .map(item => (
                    <Card key={item.id} item={item}/>
                ))
                <Preview datas={filteredImages}/>
            } */}
            <Preview datas={filteredImages} />
        </div>
        : <Preview/>
        }</>) : (<LoadingSpinner/>)}
    </div>
    )
}


export default HomePage;