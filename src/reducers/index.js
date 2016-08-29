import { combineReducers} from 'redux';
import DescriptionReducer from './_reducer-description';
import DataReducer from './_reducer-data';
import PointReducer from './_reducer-point-select';

const rootReducer = combineReducers({
    rubricDescriptions: DescriptionReducer,
    rubricData: DataReducer,
    rubricPoints: PointReducer
});

export default rootReducer;
