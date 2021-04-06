import React from 'react'
import Card from '../UI/Card/Card'
const Uploads = (props) => {
    const lists = props.data.map(list => {
        return (
            <Card
                key={list.id}
                imgSrc={list.image}
                category={list.category} />
        );
    });
    return (
        <div>
            {lists}
        </div>
    )
}

export default Uploads
