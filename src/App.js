
import { React, Component } from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Home from "./containers/Home/Index";
import Favourite from "./containers/Favorites/Index";
import Uploads from "./containers/Uploads/Index";
import UploadsEdit from "./containers/Uploads/Edit";
import Footer from './components/UI/Footer/Footer';
import  classes from './App.css';
import New from "./containers/Uploads/New";

class App extends Component {
   render() {
      return (
         <div ClassName={classes.App}>
           
               <BrowserRouter>
                  <Switch>
                     <Route exact path="/favourites" component={Favourite} />
                     <Route exact path="/uploads"  component={Uploads} />
                     <Route exact path="/uploads/new" component={New} />
                     <Route exact path="/uploads/id/edit" component={UploadsEdit} />
                     <Route  path="/" exact component={Home} />
                  </Switch>
                  <Footer /> 
               </BrowserRouter>
              
         </div>



         
      );
   }
}

export default App;
// >>>>>>> 22561c6e4855ccbd7be797b3bc4f822bf0d09eff
