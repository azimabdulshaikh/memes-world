import './App.css';
import { React ,Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from '../containers/Home/Index';
import MemeBuilder from '../containers/MemeBuilder/MemeBuilder';
import Upload from '../containers/Uploads/Index';
class App extends Component {
  
  render (){
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact  path="/" component={Home}/>
          <Route path="/addmeme" component={MemeBuilder}/>
          <Route exact  path="/uploads" component={Upload}/>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
