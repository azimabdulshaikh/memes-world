import { combineReducers } from 'redux';
import categoryReducer from './category';
import uploadReducer from './upload';
import homeReducer from './home';
import favouriteReducer from './favourite';
import deleteReducer from './delete'

const rootReducer = combineReducers({
    category:categoryReducer,
    upload:uploadReducer,
    home:homeReducer,
    favourite:favouriteReducer,
    delete:deleteReducer
});

export default rootReducer;