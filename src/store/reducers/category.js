import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

let initialState = {
    categoriesList:[],
    fetchCategoryLoading:false,
    fetchCategoryError:null
}

const fetchCategoryStart = (state, action) => {
    return updateObject(state, { fetchCategoryLoading: true })
}

const fetchCategorySuccess = (state, action) => {
    return updateObject(state, { fetchCategoryLoading: false, categoriesList:action.categoriesList})
}

const fetchCategoryFail = (state, action) => {
    return updateObject(state, { fetchCategoryLoading: false, fetchCategoryError: action.error });
}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.FETCH_CATEGORY_START: return fetchCategoryStart(state, action)
        case actionTypes.FETCH_CATEGORY_SUCCESS: return fetchCategorySuccess(state, action)
        case actionTypes.FETCH_CATEGORY_FAIL: return fetchCategoryFail(state, action)
        
        default: return state
    
    }
}


export default reducer;