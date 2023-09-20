import React from 'react';
import './card.scss'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Card = ({item}) => {
    
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: item.id});
    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }
    return(
        <div className='container' ref={setNodeRef} {...attributes} {...listeners} style={style}>
            { <div className='image' style={{
                backgroundImage: `url(${item.imageUrl})`}}/> }

                
            <div>
                <h3 className='tag'>{item.name}</h3>
            </div>
        </div>
    )
}

export default Card;