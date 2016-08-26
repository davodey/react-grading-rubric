import React, { Component } from 'react';
import ShowDescription from './ShowDescription';
import GradingCriteria from '../components/GradingCriteria';
import TotalScore from '../components/TotalRubricScore';

export default class GradingComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="grading-component fixed">
                <div className="grading-headline">
                    <div className="pe-label pe-label--bold">Rubric</div>

                    {/*load show description component*/}
                    <ShowDescription/>
                </div>
                <div className="grading-criteria-header">

                    {/*load the grading critera*/}
                    <GradingCriteria/>
                </div>
                <div className="total-score margin-bottom">
                    <div className="pe-label pe-label--bold">Rubric Score</div>

                    {/*load the total score*/}
                     <TotalScore/>
                </div>
            </section>
        );
    }
}