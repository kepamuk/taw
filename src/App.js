import React, {Component} from 'react';
import {Provider} from 'react-redux';

import './App.css';
import store from './store';
import AddStation from './components/AddStation/AddStation';
import setAuthToken from './utils/setAuthToken';

setAuthToken('Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI0ZjAyOWJiLTQ5YmMtNGNkMS1hZjUwLTFmYTIwNDQ5MWQzMiIsImVtYWlsIjoiZ3V3ZWpqZUBsdXZpZGEuYmQiLCJwaG9uZSI6IjAyNjk3NzM5MDkiLCJpYXQiOjE1NTU2MjAyNzMsImV4cCI6MTU2MDgwNDI3M30.TIODcqz1UBj0d7vKzZ4GyDMkZD3YyG9kDNugIdD8bao');

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AddStation/>
      </Provider>
    );
  }
}

export default App;
