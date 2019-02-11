import React, { Component } from 'React';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from '@firebase/app';
//import { Header } from 'react-native-elements';
import reducers from './src/reducers';
//import LoginForm from './src/components/LoginForm';
import Main from './src/components/Main';
//import MainMenu from './src/components/MainMenu';

class App extends Component {
  
  componentDidMount() {
      // Initialize Firebase
      var config = {
        apiKey: 'AIzaSyDQAAsYiGiVGnbue3eBimw_jAeKHsIQMA0',
        authDomain: 'managerapp-84816.firebaseapp.com',
        databaseURL: 'https://managerapp-84816.firebaseio.com',
        projectId: 'managerapp-84816',
        storageBucket: 'managerapp-84816.appspot.com',
        messagingSenderId: '369346300985'
      };
      firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    console.disableYellowBox = true;
    return(
      <Provider store={store}>
          <Main />
      </Provider>
    );
  }
}

export default App;