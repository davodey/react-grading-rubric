import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GradingComponent from './gradingComponent';

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
           <div>
               <GradingComponent />
           </div>
        );
    }
}

ReactDOM.render(<AppContainer />, document.querySelector('.container'));
