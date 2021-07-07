import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    postLoading:false,
    category: ''
}
const uploadPostStart = (state, action) => {
    return updateObject(state, { postUploading: true })
}

const uploadPostSuccess = (state, action) => {
    // console.log((action.data))
    return updateObject(state, { postLoading: false})
}

const uploadPostFail = (state, action) => {
    return updateObject(state, { postLoading: false, fetchCategoryError: action.error });
}


const editPostStart = (state, action) => {
    return updateObject(state, { editPostLoading: true })
}

const editPostSuccess = (state, action) => {
    
    return updateObject(state, { editPostLoading: false, profile: action.updatedPost})
}

const editPostFail = (state, action) => {
    return updateObject(state, { editPostLoading: false, editPostError: action.error });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FETCH_POSTS_START: return uploadPostStart(state, action)
        case actionTypes.FETCH_POSTS_SUCCESS: return uploadPostSuccess(state, action)
        case actionTypes.FETCH_POSTS_FAIL: return uploadPostFail(state, action)
        
        case actionTypes.EDIT_POST_START: return editPostStart(state, action);
        case actionTypes.EDIT_POST_SUCCESS: return editPostSuccess(state, action);
        case actionTypes.EDIT_POST_FAIL: return editPostFail(state, action);

        default: return state
    
    }
}


export default reducer;