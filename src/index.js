import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GradingComponent from './gradingComponent';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.values = {
            rubricId: '811416d2-9341-4a02-8c67-eabd5af5f9ea'
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
