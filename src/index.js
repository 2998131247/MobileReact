import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd-mobile/dist/antd-mobile.css';
import YouBase from './base/main'
import { Provider } from 'react-redux'
import {store , persistor} from "./redux/store"
//持久化redux 数据
import { PersistGate } from 'redux-persist/integration/react';
const pages=require.context('./pages', true, /.router.js$/)
const routes= YouBase.getRoute(pages);
window.store=store;

ReactDOM.render(
<Provider  store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App routes={routes} />
    </PersistGate>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
