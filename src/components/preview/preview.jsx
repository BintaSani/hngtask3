import React, { useState } from 'react';
//import ImageContext from '../../context/images/image.context'; 
import Card from '../card/card';
import IMAGE_DATA from '../../context/images/image.data';

import './preview.scss';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, rectSwappingStrategy } from '@dnd-kit/sortable';

const Preview = () => {
    const [data, setData] = useState(IMAGE_DATA)
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

    return(
        <div className='preview'>
            <h3>tags: bags, shoes, jewelries and hats</h3>
            <div className='preview-div'>
            <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={data} strategy={rectSwappingStrategy}>
            {
                data
                .map(item => (
                    <Card key={item.id} item={item}/>
                ))
            }
            </SortableContext>
            </DndContext>
            </div>
        </div>

    )

}

export default Preview;