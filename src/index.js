import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GradingComponent from './gradingComponent';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.values = {
            rubricId: '811416d2-9341-4a02-8c67-eabd5af5f9ea',
            assignmentId:'1234',
            sectionId: '5678',
            userId: 'davodey',
            disabled: false,
            userRole: 'teacher',
            gradeRelease: true
        }
    }

    render () {
        return (
           <div>
               <GradingComponent rubricId={this.values.rubricId}
                     assignmentId={this.values.assignmentId}
                     sectionId={this.values.sectionId}
                     userId={this.values.userId}
                     disabled={this.values.disabled}
                     userRole={this.values.userRole}
                     gradeRelease={this.values.gradeRelease}
               />
           </div>
        );
    }
}

ReactDOM.render(<AppContainer />, document.querySelector('.container'));
