import React, { Component } from "react";
import { Input, Icon, Menu } from "semantic-ui-react";
import "./NavBar.css";

export default class NavBar extends Component {
   state = { activeItem: "home" };
   handleItemClick = (e, { name }) => this.setState({ activeItem: name });

   render() {
      return (
         <Menu secondary className="NavBar">
            <Menu.Item name="Memes World" onClick={this.handleItemClick} />
            <Menu.Menu position="right">
               <Menu.Item>
                  {/* <Input /> */}
                  <Icon className="Icons heartIcon" fitted name="search" />
               </Menu.Item>
            </Menu.Menu>
         </Menu>
      );
   }
}
