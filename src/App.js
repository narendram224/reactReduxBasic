import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstCompoent from './components/firstCompoent';
import { Provider } from 'react-redux';
import store from './redux/store';
import HookRedux from './components/HookRedux';
import IceCreamContainer from './components/iceCreamContainer';
import PayLoadCakeContainer from './components/PayLoadCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/userContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     {/* <FirstCompoent />
     <HookRedux />
     <IceCreamContainer />
     <PayLoadCakeContainer />
     <ItemContainer cake/> 
     <ItemContainer />  */}

     <UserContainer />
    </div>
    </Provider>
  );
}

export default App;
