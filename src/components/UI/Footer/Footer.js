import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
import './Footer.css';

const Footer = () => (
    <div  className="Footer">
        <div  className="colom">
            <Link to="/">
                <Icon name='home' size='large' className="icon_footer" />
                <br />Home
        </Link>
        </div>
        <div  className="colom">
            <Link to="/favourites">
                <Icon name='star outline' size='large' className="icon_footer" /><br />Favourites
        </Link>
        </div>
        <div  className="colom">
            <Link to="/uploads">
                <Icon name='upload' size='large' className="icon_footer" /><br />MyUploads
        </Link>
        </div>
    </div>



);


export default Footer;
