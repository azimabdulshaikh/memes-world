import React from 'react'
import { Dropdown, Button,Icon,Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import  './Form.css'

const form = (props) =>(
     <div className="form">
      <div className="header"><Link to="/"> <Icon link name='arrow left' size="large" className="text"/></Link> <h3>Add New Memes</h3></div>
        <div className="form-content">
            <Dropdown
                fluid
                placeholder='Select Category'
                selection
                options={props.options}
                value={props.value}
                onChange={props.changedInput}
            />
            <h6>Add meme</h6>
            <div className="position-relative">
            <input type="file" className="file-upload" ref={props.reference} onChange={props.changedImage} />
            <Image src={props.imgSrc} onClick={props.clicked} size="large" alt="meme" />
            </div>
            <Button className="Btn_save" as={Link} to="/upload/new" fluid >Save</Button>
        </div>
    </div>

)

export default form;
