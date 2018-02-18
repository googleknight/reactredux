import React, { Component } from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import store from '../src/redux/store';
import increment from '../src/redux/actions';

const App = props => <div> <p>{props.state}</p><button onClick={() => store.dispatch(increment)}>Click Me</button></div>;


const render = () => {
  ReactDOM.render(<App state={store.getState().count} />, document.getElementById('root'));
};
store.subscribe(render);
render();
