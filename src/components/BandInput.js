import React, { Component } from 'react';

class BandInput extends Component {

  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" onkeydown={this.handleChange}/>
      </div>
    );
  }
};

export default BandInput;
