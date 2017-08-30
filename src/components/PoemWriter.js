import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
      isValid: true
    };
  }

  countWords = (line) => {
    return line.split(' ').filter(l => l).length
  }

  validatePoem = (text) => {
    if (!text) {
      return false
    } 
    
    let lines = text.split('\n')
    if (lines.length !== 3){
      return false
    } else if (this.countWords(lines[0]) !== 5 || this.countWords(lines[1]) !== 3 || this.countWords(lines[2]) !== 5){
      return false
    } else {
      return true
    }
  }

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value,
      isValid: this.validatePoem(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea 
          rows="3" 
          cols="60" onChange={this.handleTextChange}
        >{this.state.text}</textarea>
        {!this.state.isValid &&
          <div 
          id="poem-validation-error" 
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
        }
      </div>
    );
  }
}

export default PoemWriter;