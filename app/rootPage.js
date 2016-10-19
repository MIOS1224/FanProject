import React, {Component} from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import App from './components/appMain.js';
import rootReducer from './reducers/rootReducer';

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let store = createStoreWithMiddleware(rootReducer);


export default class rootApp extends Component{

  render(){

    return(
        <Provider store={store}>
           <App />
        </Provider>
    )
  }
}
