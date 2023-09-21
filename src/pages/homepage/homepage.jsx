import React, { useState } from 'react';

import Preview from '../../components/preview/preview';
import IMAGE_DATA from '../../context/images/image.data';
import {ReactComponent as Search} from '../../assets/search.svg';
import Card from '../../components/card/card';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, rectSwappingStrategy } from '@dnd-kit/sortable'; 
import LoadingSpinner from '../../components/spinner/spinner';

import './homepage.scss';
import CustomButton from '../../components/custom-button/custom-button.component';
import { auth } from '../../utils/firebase';


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
    
        const onDragEnd = e=>{
            const {active, over} = e;
            if(active.id === over.id){
                return
            }
            setData(items =>{
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                return arrayMove(items, oldIndex,newIndex)
            });
        }
    

        const signOut = async (e) => {
            e.preventDefault();
      
            await auth.signOut().then(function() {
              console.log("Successfully signed out.")
      
            }).catch(function(error) {
              console.log(error)
              console.log("An error occurred")
            });
      
            
          }

    return(
        
        <div className='home'>
            {loading === false ? (<>
                
                <div className='image' style={{
                    backgroundImage: `url(${"https://i.ibb.co/7QRc4tC/mybg.png"})`}}>
                    <div className='search-box'>
                        <h1>Explore Images</h1>
                        <form className='form' onSubmit={searchImages}>
                            <input type='search' value={search} onChange={(event) => setSearch(event.target.value)} name='search'  className='search' placeholder='Search for photos' />
                            <Search onClick={searchImages}/>
                        </form>
                    </div>
                </div>
                <div className='btn'>
                    <CustomButton onClick={signOut} nav>Sign Out</CustomButton>
                </div>
                {loading === false ? (<>
                <>{ search ? (
                <div className='results'>
                    <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                    <SortableContext items={data} strategy={rectSwappingStrategy}>
                        {
                            filteredImages
                            .map(item => (
                                <Card key={item.id} item={item}/>
                            ))
                            
                        }
                    </SortableContext>
                    </DndContext>
                </div>)
                : (<Preview/>)}</></>) : (<LoadingSpinner/>)}</>)
                : 
            (<LoadingSpinner/>)}
        </div>
    )
}


export default HomePage;