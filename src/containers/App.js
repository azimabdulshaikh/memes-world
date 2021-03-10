import "./App.css";
import { React, Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../containers/Home/Index";
import Favourite from "../containers/Favorites/Index";
import Uploads from "../containers/Uploads/Index";
import UploadsEdit from "../containers/Uploads/Edit";
import UploadsNew from "../containers/Uploads/New";
import AddButton from "../components/AddButton/AddButton";

class App extends Component {
   render() {
      return (
         <div className="App">
            <BrowserRouter>
               <Route path="/" exact component={Home} />
               <Route path="/favourites" component={Favourite} />
               <Route path="/uploads" exact component={Uploads} />
               <Route path="/uploads/new" component={UploadsNew} />
               <Route path="/uploads/id/edit" component={UploadsEdit} />
               <AddButton />
            </BrowserRouter>
         </div>
      );
   }
}

export default App;
