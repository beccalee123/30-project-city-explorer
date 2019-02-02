import React, { Component } from 'react';
import Header from './components/header';
import Search from './components/search';
import './stylesheet/styles.scss';


class App extends Component {
  render() {
    return (
      <React.Fragment>

      <Header />
      <Search />

      </React.Fragment>
    );
  }
}

export default App;
