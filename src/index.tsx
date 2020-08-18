import React from 'react';
import ReactDOM from 'react-dom';
import {StoreProvider} from './Store'
import './index.css';
import App from './App';
import {Router,RouteComponentProps} from '@reach/router'
import Home from './Home'
import Favorites from './Favorites';

const RouterPage=(props:{pageComponent:JSX.Element} & RouteComponentProps)=>props.pageComponent
ReactDOM.render(
  <StoreProvider>
    <Router>
    <App path="/">
<RouterPage pageComponent={<Home/>} path="/"/>
<RouterPage pageComponent={<Favorites/>} path="/faves"/>
    </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);

