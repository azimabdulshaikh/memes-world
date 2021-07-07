import React from 'react'
import { Card, Icon, Image, Grid, Segment, Portal } from 'semantic-ui-react';
// import { SRLWrapper } from "simple-react-lightbox";
import ShareModal from '../../UI/ShareModal/ShareModal'
import { Link } from 'react-router-dom';
import './Card.css'

const card = (props) => {
    
    const modal = 
    <Grid columns={1}>
    <Grid.Column>
      <Icon
        className="icon-share"
        name='share alternate'
        disabled={props.open}
        positive
        onClick={props.clickedShareButton}
      />
      <Portal onClose={props.clickedShareButton} open={props.open}>
        <Segment
          style={{
            left: '0%',
            position: 'fixed',
            top: '42%',
            zIndex: 1000,
          }}
        >
          <Grid.Column >
            <p><Icon name='wifi' size='big' />Tap here to turn Wi-fi and Bluetooth on to share files via OPPO Share</p>
            <ShareModal />
          </Grid.Column>
        </Segment>
      </Portal>
    </Grid.Column>
  </Grid>
    return (
        <div>
            <Card.Group itemsPerRow={1}>
                {/* <SRLWrapper> */}
                <Card style={{ width: "350px", marginBottom: "15px" }} key={props.id}>
                    <Image src={props.imgSrc} wrapped ui={false} />
                    <Card.Content>
                        <Card.Description>
                            <div className="category">#{props.category}</div>
                            {props.is_favorite ?
                                <Icon className="icon-heart" name="heart " onClick={props.clickedLikeButton} /> :
                                <Icon className="icon-heart" name="heart outline" onClick={props.clickedLikeButton} />
                            }
                            <Icon className="icon-delete" name='trash alternate outline' onClick={props.clickedDeleteButton} />
                            <Icon className="icon-share" name='share alternate' onClick={props.clickedShareButton} disabled={props.open} position/> 
                             {(props.open)?modal:null}
                            <Link to={`/uploads/edit/${props.id}`}><Icon className="icon-edit" color="grey" name='edit outline' onClick={props.clickedEditButton} /></Link>
                        </Card.Description>
                    </Card.Content>
                </Card>
                {/* </SRLWrapper> */}
            </Card.Group>
        </div>
    )
}
export default card;

