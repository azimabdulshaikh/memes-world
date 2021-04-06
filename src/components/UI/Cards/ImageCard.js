import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "./ImageCard.css";
import memeImg from "../../assets/meme-1.jpg";

const ImageContainer = () => (
   <div>
      <div className="ImageCard">
         <Card>
            <Image src={memeImg} wrapped ui={false} />
            <Card.Content className="card-content" extra>
               <Icon className="Icons heartIcon" fitted name="heart outline" />
               <Icon className="Icons" fitted name="share alternate" />
               {/* <Icon className="Icons" fitted name="trash" /> */}
            </Card.Content>
         </Card>
      </div>
   </div>
);

export default ImageContainer;