import React, { Component } from 'react';
import { store } from './redux/store';
import increment from './redux/actions';

const defaultState = { count: 1 };

const App = (props) => {
  <div> {props.state.count}<button onClick={() => store.dispatch(increment)} /></div>;
};

const render = () => {
  ReactDOM.render(<App state={store.getState()} />, document.getElementById('root'));
};
store.subscribe(render);
render();
