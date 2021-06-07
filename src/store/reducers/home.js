import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

let initialState = {
    data:[],
    fetchPostsLoading:false
}

const fetchPostsStart = (state, action) => {
    return updateObject(state, { fetchPostsLoading: true })
}

const fetchPostsSuccess = (state, action) => {
    console.log((action.data))
    return updateObject(state, { fetchPostsLoading: false, data:action.data})
}

const fetchPostsFail = (state, action) => {
    return updateObject(state, { fetchPostsLoading: false, fetchCategoryError: action.error });
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FETCH_POSTS_START: return fetchPostsStart(state, action)
        case actionTypes.FETCH_POSTS_SUCCESS: return fetchPostsSuccess(state, action)
        case actionTypes.FETCH_POSTS_FAIL: return fetchPostsFail(state, action)
        
        default: return state
    
    }
}


export default reducer;