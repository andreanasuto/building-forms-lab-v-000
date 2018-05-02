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
        <form>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
