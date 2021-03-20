import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import{ Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
    <center>

        {/* <div class ="ui huge basic icon button">
        <button class="ui button"><i class="home icon"></i>Home</button>
        <button class="ui button"><i class="star outline icon"></i>Favourites</button>
        <button class="ui button"><i class="upload icon"></i>My Uploads</button>
        </div> */}

        <div class="ui large basic buttons" className="footer">
            <Link to='/Home'>
            <div class="ui button" className ="btn"><i class ="home icon"></i><br/>Home</div>
            </Link>
            <Link to ='/Favourites'>
            <div class="ui button" className ="btn"><i   class ="star outline icon"></i><br/>Favourites</div>
            </Link>
            <Link to ='/Uploads'>
            <div class="ui button" className ="btn"><i  class ="upload icon"></i><br/>My Uploads</div>
            </Link>
        </div>

    </center>
);


export default Footer;