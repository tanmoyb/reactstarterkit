import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';


class ResturantsApp extends Component {
  constructor(){
    super();
    this.state={
      filterText: ''
    };
  }

  handleUserInput(searchTerm){
    this.setState({filterText:searchTerm})
  }

  render(){
    return(
      <div>
      <span>foo</span>
      {' '}
      bar
      {' '}
      <span>baz</span>
      <button disabled ={true}>this a simple button</button>
      </div>
    )
  }
}




render(<ResturantsApp  />, document.getElementById('root'));
