import React, { Component } from 'react';
import Header from './components/header';
import Search from './components/search';
import './stylesheet/styles.scss';


/**
 *
 *
 * @class App - renders Header and Search components.
 * @extends {Component}
 */
class App extends Component {
  /**
   *
   *
   * @returns - Header and Search components.
   * @memberof App
   */
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
