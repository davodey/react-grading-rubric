import React, { Component } from 'react';
import {connect} from 'react-redux';

class TotalScore extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="oval light-green-bg green bold"> {this.props.score.total.value} pts</div>
        )
    }
};

function mapStateToProps(state) {
    return {
        totalScore: state.rubricPoints,
    }
}

export default connect(mapStateToProps)(TotalScore);