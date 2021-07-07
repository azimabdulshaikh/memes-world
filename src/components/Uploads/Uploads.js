import React from 'react'
import Card from '../UI/Card/Card'
const Uploads = (props) => {
let lists = []
if(props.data){
lists = props.data.map(list => {
        return (
            <Card
                key={list.id}
                id={list.id}
                imgSrc={list.image}
                category={list.description}
                clickedLikeButton={()=> props.clickedLikeButton(list.id)}
                clickedEditButton={()=>props.clickedEditButton(list.id)}
                clickedDeleteButton={()=>props.clickedDeleteButton(list.id)}
                clickedShareButton={()=>props.clickedShareButton(list.id)}
                open={props.open}
                is_favorite={props.is_favorite} />
        );
    });
}
 return((props.container=="Favorite") ?  <div style={{paddingTop: "75px",paddingBottom: "60px", marginLeft:"-2px"}}>{lists}</div>:
//  (props.container=="uploads")?<div style={{ paddingTop: "60px", paddingBottom: "60px", marginLeft:"-2px"}}>{lists}</div>:
 <div style={{ paddingTop: "120px", paddingBottom: "60px", marginLeft:"-2px"}}>{lists}</div>)
}

export default Uploads
