import { React, Component } from "react";
import { Route,Switch } from "react-router-dom";
import Home from "./containers/Home/Index";
import Favourite from "./containers/Favorites/Index";
import Uploads from "./containers/Uploads/Index";
import Edit from "./containers/Uploads/Edit";
import Footer from './components/UI/Footer/Footer';
import classes from './App.css';
import New from "./containers/Uploads/New";

class App extends Component {
   render() {
      
      return (

         <div className={classes.App}>
                  <Switch>
                     <Route exact path="/favourites" component={Favourite} />
                     <Route exact path="/uploads"  component={Uploads} />
                     <Route exact path="/uploads/new" component={New} />
                     <Route exact path="/uploads/edit/:id" component={Edit} />
                     <Route  path="/" exact component={Home} />
                  </Switch>
                  <Footer /> 
              
         </div>
      );
   }
}

export default App;
