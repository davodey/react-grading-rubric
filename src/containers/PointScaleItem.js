import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import { pointSelect } from '../actions/pointSelect';

class PointScaleItem extends Component {


    render() {
        console.log('pointscaleitem', this.props)
        return (
            <div tabIndex="0" onClick={() => { pointSelect(this.props.points, this.props.colNum, this.props.colLen) }} className="points-available disabled">
                <span className="score">{this.props.colNum}</span>
                <div className="visual-marker rectangle"></div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        pointSelected: state.rubricPoints,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({pointSelect: pointSelect}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PointScaleItem);


