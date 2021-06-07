import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import { SRLWrapper } from "simple-react-lightbox";
import { Link } from 'react-router-dom';
import './Card.css'

const card = (props) => {
    return (
        <div>
            <Card.Group itemsPerRow={1}>
                <SRLWrapper>
                    <Card style={{ width: "350px", marginBottom: "15px" }} key={props.id}>
                        <Image src={props.imgSrc} wrapped ui={false} />
                        <Card.Content>
                            <Card.Description>
                                <div className="category">#{props.category}</div>
                                {props.is_favorite ?
                                    <Icon className="icon-heart" name="heart outline" onClick={props.clickedLikeButton} /> :
                                    <Icon className="icon-heart" name="heart" onClick={props.clickedLikeButton} />
                                }
                                <Icon className="icon-delete" name='trash alternate outline' onClick={props.clickedDeleteButton} />
                                <Link to={`/uploads/edit/${props.id}`}><Icon className="icon-edit" name='edit outline' onClick={props.clickedEditButton} /></Link>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </SRLWrapper>
            </Card.Group>
        </div>
    )
}
export default card;

