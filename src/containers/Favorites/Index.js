import React, { Component } from "react";
import addbutton from "../../components/AddButton/AddButton";
import MyAux from '../../hoc/MyAux/MyAux';


   class Favourites extends Component {
      render () {
         return (
            <MyAux>
               <div>header</div>
               <div>post</div>
               <div>caption and buttons</div>
            </MyAux>
         );
      }
   }
   

export default Favourites;