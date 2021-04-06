import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'semantic-ui-react';

    const addbutton = (props)  => ({
        render() {const style = {
            position : 'sticky',
            color : 'white',
            borderRadius:'50%',
            backgroundColor:'#000',
            padding: '15px',
            width:'40px',
            height:'40px',
            float : 'right',
            marginTop:'-100px'
            
        }; 
        
          return (
            
            <Link to ='/uploads/new'>
              <Icon name='plus' size ='small' style={style}  ></Icon>
            </Link>
            
             
          );
     }
    })
   


export default addbutton;