import React, { Component } from 'react';

class BandInput extends Component {

  render() {
    return (
      <div>
        <input type="text" onkeydown={this.handleChange}/>
      </div>
    );
  }
};

export default BandInput;
