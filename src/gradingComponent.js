import './style/main.scss';
import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
import reducers from './reducers';
import GradeRubricContainer from './containers/GradeRubricContainer';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
import { fetchData } from './actions/fetchData';
import {createScore} from './actions/manageScore';
import {buildScore} from './actions/buildScore';

export default class GradingComponent extends Component {
    constructor(props) {
        super(props);
        this.values = {
            data: fetchData(this.props.rubricId).payload,
            score: createScore(fetchData(this.props.rubricId).payload.criterias),
            buildScore: buildScore(fetchData(this.props.rubricId).payload)
        }
    }
    render() {
        const score = this.values.score;
        const buildScore = this.values.buildScore;
        return (
           <Provider store={createStoreWithMiddleware(reducers)}>
                <GradeRubricContainer buildScore={buildScore} score={score} loadData={this.values.data}/>
           </Provider>
        );
    }
}
