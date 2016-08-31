import React, { Component } from 'react';
import {connect} from 'react-redux';
import ShowDescription from './ShowDescription';
import GradingCriteria from '../components/GradingCriteria';
import TotalScore from './TotalRubricScore';

class GradingComponentContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="grading-component fixed">
                <div className="grading-headline">
                    <div className="pe-label pe-label--bold">Rubric</div>

                    {/*load show description component*/}
                    <ShowDescription checked={this.props.descriptions}/>
                </div>
                <div className="grading-criteria-header">

                    {/*load the grading critera*/}
                    <GradingCriteria score={this.props.score} descriptionToggle={this.props.descriptions} loadData={this.props.loadData}/>
                </div>
                <div className="total-score margin-bottom">
                    <div className="pe-label pe-label--bold">Rubric Score</div>

                    {/*load the total score*/}
                     <TotalScore score={this.props.score}/>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        descriptions: state.rubricDescriptions,
    }
}

export default connect(mapStateToProps)(GradingComponentContainer);