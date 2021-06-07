import * as actionTypes from './actionTypes';
import axios from '../../axios-common';


export const deletePostStart = (id) => {
    return {
        type: actionTypes.DELETE_POST_START,
        id: id
    }
}

export const deletePostSuccess = (postDetails) => {
    return {
        type: actionTypes.DELETE_POST_SUCCESS,
        postDetails: postDetails
    }
}


export const deletePostFail = (error) => {
    return {
        type: actionTypes.DELETE_POST_FAIL,
        error: error
    }
}

export const deletePost = (post) => {
    return dispatch => {
        dispatch(deletePostStart(post.postId))

        return axios.post('/api/v1/carts/remove_from_cart', post)
            .then(res => {
                return dispatch(deletePostSuccess(res.data))
            })
            .catch(error => {
                return dispatch(deletePostFail(error))
            })
    }
}