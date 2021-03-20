import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import './Card.css'

const card = (props) => {
    return (
        <div>
           <Card.Group itemsPerRow={1}>
                <Card key={props.key}>
                    <Image src={props.imgSrc} wrapped ui={false} />
                    <Card.Content>
                        <Card.Description>
                            <div className="category">#{props.category}</div>
                            <Icon className="icon-delete" name='trash alternate outline'/>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
export default card;




        //     <center>
        //     <div class="ui card" className="card">
        //         <div class="image">
        //             <img className="imgcard" src={props.imgSrc} />
        //         </div>
        //         <div class="content" className="border">
        //             <div class="left floated">
        //                 <h4 className="txt"> # {props.category}</h4>
        //             </div>
        //             <span class="right floated">
        //                 <button className="buttons">
        //                     <i class="heart icon" ></i> 12
        //                 </button>
        //                 <i class="trash alternate outline"></i>
        //             </span>
        //         </div>
        //     </div>
        // </center>