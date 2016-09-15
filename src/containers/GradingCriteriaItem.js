import React, { Component } from 'react';
import GradingCriteriaInfo from '../components/GradiingCriteriaInfo';
import PointScale from '../components/PointScale';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import { pointSelect } from '../actions/pointSelect';


class GradingCriteriaItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="grading-criteria">

                {/*Load the title and descripton of the Item*/}
                <GradingCriteriaInfo
                    descriptionToggle={this.props.descriptionToggle}
                    title={this.props.title}
                    desc={this.props.description}
                />

                {/*Load the point scale*/}
                <PointScale
                    cat={this.props.title}
                    stateScore={this.props.pointSelected.stateScore}
                    score={this.props.score}
                    pointSelect={this.props.pointSelect}
                    pointData={this.props.pointData}
                    rowNum={this.props.rowNum}
                    options={this.props.options}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        pointSelected: state.rubricPoints,

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({pointSelect: pointSelect}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GradingCriteriaItem);

