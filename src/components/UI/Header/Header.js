import React from "react";
import { Icon,Header } from "semantic-ui-react";

const header = (props) => {
   const home =<div>Memes World <Icon name="search" size="big" /></div>
   const favorites = <div>  <Icon name="arrow left" size="big" /> Favorites</div>
   const uploads =  <Header fixed='top' as='h2'  icon='arrow back' content='My Uploads'/>

   const header =
      props.content === "Home"  ? home
       : props.content === "Favorite" ? favorites
       : props.content === "Uploads"? uploads
       :null;

   return (
      <div>
         {header}
      </div>
   );
};
export default header;
