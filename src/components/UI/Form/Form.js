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
                onChange={(e,data)=>props.changedCategory(data)}
            />
            <h6>Add meme</h6>
            <div className="position-relative" >
                <input type="file" className="file-upload" onChange={props.changedImage}/>
                <Image src={props.imgSrc}  size="large" alt="meme" />
            </div>

            <Button 
                style={{ marginTop: "20px" }}
                className="Btn_save" 
                as={Link} to="/upload/new" 
                onClick={props.submit}
                fluid 
                >Save</Button>
        </div>
    </div>

)

export default form;
