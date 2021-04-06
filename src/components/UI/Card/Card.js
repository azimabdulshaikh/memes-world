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

