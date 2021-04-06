// // <<<<<<< HEAD
// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.css';
// // import App from '../src/App';
// // import reportWebVitals from './reportWebVitals';
// // import 'semantic-ui-css/semantic.min.css'
// =======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import rootreducer from './store/reducers/index';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";
// >>>>>>> 22561c6e4855ccbd7be797b3bc4f822bf0d09eff

import { BrowserRouter} from "react-router-dom";
import thunk from 'redux-thunk';


const store = createStore(rootreducer,applyMiddleware(thunk));
ReactDOM.render(

   <Provider store={store} id="root">   
      <BrowserRouter>
         <React.StrictMode>
            <App />
         </React.StrictMode>
      </BrowserRouter>
   </Provider>

   ,document.getElementById("root")
);

reportWebVitals();
