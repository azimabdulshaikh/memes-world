import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'semantic-ui-react';

    const addbutton = (props)  => {
      const style = {
            position : 'fixed',
            top:"42rem",
            right:"2rem",
            color : 'white',
            borderRadius:'50%',
            backgroundColor:'#000',
            padding: '15px',
            width:'40px',
            height:'40px',
            marginTop:'-100px'
      } 
         
        
          return (
            
            <Link to ='/uploads/new'>
              <Icon name='plus' size ='small' style={style} ></Icon>
            </Link>
            
             
          );
     
    }
   


export default addbutton;