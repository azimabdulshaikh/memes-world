import './App.css';
import { React ,Component } from 'react';
import AddButton from '../containers/Uploads/Index';
class App extends Component {
  
  render (){
    return (
      <div className="App">
        Memes World
        <AddButton/>
      </div>
    );
  }
  
}

export default App;
