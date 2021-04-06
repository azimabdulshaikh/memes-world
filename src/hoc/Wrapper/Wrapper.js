import React from "react";
import MyAux from "../MyAux/MyAux"
import Header from "../../components/UI/Header/Header";


const Wrapper = (props) => {
   return (
      <MyAux>
         <Header content={props.content} />
      </MyAux>
   );
};
export default Wrapper;
