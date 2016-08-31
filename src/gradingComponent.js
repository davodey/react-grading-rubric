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

export default class GradingComponent extends Component {
    constructor(props) {
        super(props);
        this.values = {
            data: fetchData(this.props.rubricId).payload
        }
    }
    render() {
        const score = createScore(this.values.data.criterias);
        console.log('PARENT', this.props)
        return (
           <Provider store={createStoreWithMiddleware(reducers)}>
                <GradeRubricContainer score={score} loadData={fetchData(this.props.rubricId).payload}/>
           </Provider>
        );
    }
}
