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
                    desc={this.props.desc}
                />

                {/*Load the point scale*/}
                <PointScale score={this.props.score} gcTitle={this.props.title} pointSelect={this.props.pointSelect} pointData={this.props.pointData} pointDesc={this.props.pointDescriptions} col={this.props.numberOfCol}/>
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

