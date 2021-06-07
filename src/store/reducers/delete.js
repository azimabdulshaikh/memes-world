import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility';

const initialState  ={
    lists:[],
    deletePostloading:false
}
const deletePostStart = (state, action) => {
    return updateObject(state, { deletePostloading: action.id })
}

const deletePostSuccess = (state, action) => {
    
    let id = action.id;
    let existingPost = [...state.lists];
    // let removePostId = _.findIndex(existingPost, { "id": id});
    let removePostId = ''
    if (existingPost[removePostId]) {
        existingPost.splice(removePostId, 1);
       
    }
     return updateObject(state, {deletePostloading: false,   lists:existingPost})
}

const deletePostFail = (state, action) => {
    return updateObject(state, { deletePostloading: null, error: action.error });
}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.DELETE_POST_START: return deletePostStart(state, action)
        case actionTypes.DELETE_POST_SUCCESS: return deletePostSuccess(state, action)
        case actionTypes.DELETE_POST_FAIL: return deletePostFail(state, action)

        default: return state
    }
}

export default reducer;