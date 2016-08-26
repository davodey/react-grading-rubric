import { combineReducers} from 'redux';
import DescriptionReducer from './_reducer-description';

const rootReducer = combineReducers({
    rubricDescriptions: DescriptionReducer
});

export default rootReducer;
