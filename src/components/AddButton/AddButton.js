import React from 'react'
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './AddButton.css';


    const addbutton = () => ({
        render() {const style = {
            position: 'relative',
            position : 'sticky',
            marginLeft:'180px',
            bottom : '90px',
            color : 'white',
        }; 
        
          return (
            
              // <button as={Link} to = '/Favourites'>
            <Link to ='/New.js'>
              <Icon name='add circle' size ='huge' style={style}  ></Icon>
            </Link>
            //  </button>
             
          );
     }
    })
   


export default addbutton;