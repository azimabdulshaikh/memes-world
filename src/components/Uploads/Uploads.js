import React from 'react'
import Card from '../UI/Card/Card'
const Uploads = (props) => {
let lists = []
if(props.data){
lists = props.data.map(list => {
    // console.log(list.id)
        return (
            <Card
                key={list.id}
                id={list.id}
                imgSrc={list.image}
                category={list.description}
                clickedLikeButton={()=> props.clickedLikeButton(list.id)}
                clickedEditButton={()=>props.clickedEditButton(list.id)}
                clickedDeleteButton={()=>props.clickedDeleteButton(list.id)}
                is_favorite={props.is_favorite} />
        );
    });
}
return  <div style={{ paddingTop: "120px" }}>{lists}</div>;
}

export default Uploads
