import React, { Component } from 'react';

export default class ColorSelector extends Component {


  //Each div element is rendered from an array of hexadecimal color strings, with it's background set to the value of the current string in the mapping process.  

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      let callback = () => this.props.setSelectedColor(str) //Clicking on a particular div inside ColorSelector should now set state in Matrix
      return <div onClick={callback} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )


  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}


/*
The ColorSelector component provides the user interface to select a specific color. 
When a particular Cell is clicked it's background color becomes whatever the current selected color is. 

We need a way for Cell to know about the currently selected color and we also need a way for ColorSelector to modify the selected color based on user input. To do this, we will have the parent component, Matrix, keep track of the current selected color. 

Implementations: 
!ColorSelector 
has a way to set some "selected color" in Matrix when a user selects a color

!Cell
has a way to know what the current selected color is when it's clicked. 

We can use callbacks as props we can do both of these things. 
*/