import './style/main.scss';
import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
// import reducers from './reducers';
import { fetchData } from './data/fetchData';
import GradeRubricContainer from './containers/GradeRubricContainer';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default class GradingComponent extends Component {
    constructor(props) {
        super(props);
        this.values = {
            rubricData: fetchData(),
        }
    }
    render() {
        return (
            // <Provider store={createStoreWithMiddleware(reducers)}>
                <GradeRubricContainer />
            // </Provider>
        );
    }
}