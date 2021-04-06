import React from 'react'
import { Dropdown, Button,Icon,Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import  './Form.css'

const form = (props) =>(
     <div className="form">
      <h3><Link to="/"><Icon link name='arrow left' /></Link>Add New Memes</h3>
        <div className="form-content">
            <Dropdown
                fluid
                placeholder='Select Category'
                selection
                options={props.options}
                value={props.value}
                onClick={props.changedCategory}
            />
            <h6>Add meme</h6>
            <div className="position-relative" >
                <input type="file" className="file-upload" onChange={props.changedImage}/>
                <Image src={props.imgSrc}  size="large" alt="meme" />
            </div>
            <Button  as={Link} to="/upload/new" fluid >Save</Button>
        </div>
    </div>

)

export default form;