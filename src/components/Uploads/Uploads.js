import React from 'react'
import Card from '../UI/Card/Card'
const Uploads = (props) => {
    return (
        <div>
            <Card
             key={props.key}
             imgSrc={props.imgSrc}
             category={props.category}/>
        </div>
    )
}

export default Uploads
