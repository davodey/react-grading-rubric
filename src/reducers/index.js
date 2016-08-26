import { combineReducers} from 'redux';
import DescriptionReducer from './_reducer-description';
import DataReducer from './_reducer-data';

const rootReducer = combineReducers({
    rubricDescriptions: DescriptionReducer,
    rubricData: DataReducer
});

export default rootReducer;
