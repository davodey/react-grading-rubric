import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GradingComponent from './gradingComponent';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.values = {
            rubricId: '0ebbb4bd-eb93-488b-b21d-79e3a2ea78e3'
        }

    }

    render () {
        return (
           <div>
               <GradingComponent rubricId={this.values.rubricId}/>
           </div>
        );
    }
}

ReactDOM.render(<AppContainer />, document.querySelector('.container'));
