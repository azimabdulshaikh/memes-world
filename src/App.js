import "./containers/App.css";
import { React, Component } from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Home from "./containers/Home/Index";
import Favourite from "./containers/Favorites/Index";
import Uploads from "./containers/Uploads/Index";
import UploadsEdit from "./containers/Uploads/Edit";
import New from "./containers/Uploads/New";

class App extends Component {
   render() {
      return (
         <div className="App">
               <BrowserRouter>
                  <Switch>
                     <Route exact path="/favourites" component={Favourite} />
                     <Route exact path="/uploads"  component={Uploads} />
                     <Route exact path="/uploads/new" component={New} />
                     <Route exact path="/uploads/id/edit" component={UploadsEdit} />
                     <Route  path="/" exact component={Home} />
                  </Switch>
               </BrowserRouter>
         </div>
      );
   }
}

export default App;
