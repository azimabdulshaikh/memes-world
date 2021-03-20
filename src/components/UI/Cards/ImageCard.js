import React, { useState } from 'react';
import { Card, Icon, Image , Button } from 'semantic-ui-react';
import './ImageCard.css';


const ImageCard = () => {

  return (
    <center>
      <div class="ui card" className="card">
    <div class="image">
      <img className="imgcard"  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c3R1ZGVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
    </div>
    <div class="content" className="border">
        <div class ="left floated">
            <h4 className = "txt"> # hello</h4>
        </div>
       
      <span class="right floated">
      <button className="buttons">
      <i class="heart icon" ></i> 12
      </button>
        <i class="share alternate icon"></i>
      </span>
      
    </div>
  </div>
  </center>
 

    );

  }

export default ImageCard;