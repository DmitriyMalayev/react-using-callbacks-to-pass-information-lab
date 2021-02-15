import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import learnSymbol from './data.js'
import Matrix from './Matrix.js'

ReactDOM.render(<Matrix values={learnSymbol} />, document.getElementById('root'));


//The Matrix component is the only thing rendered, and is passed a values prop. 
//If you run npm install && npm start, you should see this data. 

