import React from "react";
import Header from "../../components/UI/Header/Header";
import Footer from "../../components/UI/Footer/Footer";

const Wrapper = (props) => {
   return (
      <div>
         <Header content={props.content} />
         <Footer />
      </div>
   );
};
export default Wrapper;
