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
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input type="text" value={props.store.state.text} onChange={this.handleChange} />
      </div>
    );
  }
};

export default BandInput;
