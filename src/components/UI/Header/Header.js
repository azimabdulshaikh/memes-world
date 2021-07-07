import React from "react";
import { Icon } from "semantic-ui-react";
import './Header.css';
import { Link } from 'react-router-dom';


const header = (props) => {
   const home = <div className="header"> <h3 className="header-h3">Memes World </h3> <Icon name="search" size="large" className="search" /></div>
   const favorites = <div className="header">  <Link to="/">
      <Icon name="arrow left" size="big" className="text" />
   </Link><h3> Favourites</h3></div>
   const uploads = <div className="header">  <Link to="/">
      <Icon name="arrow left" size="big" className="text" />
   </Link><h3> My Uploads</h3></div>

   const header =
      props.content === "Home" ? home
         : props.content === "Favorite" ? favorites
            : props.content === "Uploads" ? uploads
               : null;

   return (
      <div>
         {header}
      </div>
   );
};
export default header;
