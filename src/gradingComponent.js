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
    }

    render() {
        const data = fetchData(this.props.rubricId).payload;

        if ((this.props.rubricId !== undefined) && (this.props.rubricId !== "") ) {
            const create = createScore(data);
            const build = buildScore(data);
            return (
                <Provider store={createStoreWithMiddleware(reducers)}>
                    <GradeRubricContainer buildScore={build} score={create} loadData={data}/>
                </Provider>
            );
        } else {
            return (
               <div> Sorry no data</div>
            );
        }
    }
}
