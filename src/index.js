import React from 'react';
import ReactDOM from 'react-dom';
import './styles/scss/styles.scss'
import Widget from './components/containers/Widget';
import {Provider} from 'react-redux'
import store from './store'


const app = (
    <Provider store={store.createStore()}>
    <Widget/>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))