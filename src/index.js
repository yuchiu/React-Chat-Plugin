import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import {Provider} from 'react-redux'
import store from './store'


const app = (
    <Provider store={store.createStore()}>
    <Layout/>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))