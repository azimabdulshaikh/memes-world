import React from 'react'
import { Dropdown, Button,Icon,Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import  './NewMeme.css'
const newMeme = (props) =>(
  
     <div className="NewMeme">
      <h2><Link to="/"><Icon link name='arrow left' /></Link>Add New Memes</h2>
        <Dropdown
            fluid
            placeholder='Select Category'
            selection
            options={props.options}
            value={props.value}
            onChange={props.changedInput}
        />
        <input type="file" onChange={props.changedImage} />
        <h6>Add meme</h6>
        <Image src={props.imgSrc} size="large" alt="meme" />
        <Button as={Link} to="/upload/pending" fluid >Save</Button>
    </div>

)

export default newMeme;