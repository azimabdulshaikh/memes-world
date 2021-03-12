import React from "react";
import { Icon } from "semantic-ui-react";

const Header = (props) => {
   const headerContent =
      props.content === "Home" ? (
         <Icon name="search" size="big" />
      ) : props.content === "Favorite" ? (
         <Icon name="arrow back" size="big" />
      ) : null;

   return (
      <div>
         <h2>{props.content}</h2>
         {headerContent}
      </div>
   );
};
export default Header;
