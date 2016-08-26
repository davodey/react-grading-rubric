import './style/main.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class TestContainer extends Component {
    constructor(props) {
        super(props);
    }

    // IMPORTANT NOTE LINES 21 - 35 ///
    // These functions must be included in the root application
    // for proper communication

    ////////////////////////////////////////////

    // sets the rubric ID
    _setRubricId(rubricId) {
        console.log('index.js','setRubricIdFired');
        return (rubricId)
    }

    //gets the rubric ID
    // this should just reference the object, no need to return.
    _getRubricId() {
        return  //'0ebbb4bd-eb93-488b-b21d-79e3a2ea78e3';  //this.props.rubricObj.rubricId;
        console.log('index.js','getRubricIdFired');
    }

    // sets the assignmentId ID
    _setAssignmentId() {
        return 10;
    }

    // saves the assignment to application
    _saveAssignment() {
        this.props.actions.saveAssignmentToAPI();
    }

    //////////////////////////////////////////////

    render () {
        return (
            // TODO change the below value for getRubricId to: {this.props.rubricObj.rubricId}

            <div>
                <p>Test</p>
            </div>
        );
    }
}

ReactDOM.render(<TestContainer />, document.querySelector('.container'));
