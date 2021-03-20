import React from 'react';
import { Icon, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Header.css';




const topHeader = (user) => {



            
        return (  
            
            <center>
                 <div className='header'>
                <h3>Memes World</h3>
                
                <div className='icon_search'>
            <Icon name ='search' className='search' />
             {/* <input type="text" className="seachBox" placeholder="Search" onClick={expandNavbar}/>   */}
            </div>
            
            </div>
            </center>
        );
        }    

export default topHeader;