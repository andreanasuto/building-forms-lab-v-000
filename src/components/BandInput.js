import React, { Component } from 'react';

class BandInput extends Component {

  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      text: ''
    }
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onkeydown={this.handleChange}/>
      </div>
    );
  }
};

export default BandInput;
