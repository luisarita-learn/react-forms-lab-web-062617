import React from 'react';


class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };
  }
  handleTextChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.text} onChange={this.handleTextChange} />
        <p>{this.props.maxChars - this.state.text.length}</p>
      </div>
    );

  }
}

export default TwitterMessage;