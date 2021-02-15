import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {
  constructor() {
    super();
    this.state = { //We set this state so we can keep track of the selected color 
      selectedColor: "#FFF" 
    }
  }


  setSelectedColor = (newColor) => { //This method updates selectedColor with whatever is passed into it as an argument 
    this.setState({
      selectedColor: newColor
    })
  }

  /*
  This function returns a collection of Cell components
  The Cell component itself just renders a div. 
  The color value is stored in the data is passed into Cell as color={val}

  Cell needs to know the currently selected color, not change it. 
  */ 
  genRow = (vals) => vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />);

  genMatrix = () =>
    //this.props.values is used to return a map of JSX divs
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

  render() {
    //renders a div containing the ColorSelector component and another div
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />  {/* Provide access to setSelectedColor so it could change color  */}
        <div id="matrix">
          {this.genMatrix()} 
        </div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}