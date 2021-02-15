import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  handleClick = () => {
    this.setState({
      color:this.props.selectedColor
    })
  }
  render() {
    return (
      <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
//We see that the this.props.color prop is used to set the initial state of the component, and that state value is then used to mofidy the background color of the returned div. 