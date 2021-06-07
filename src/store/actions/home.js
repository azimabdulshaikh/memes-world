import * as actionTypes from './actionTypes';
import axios from '../../axios-common';

export const fetchPostsStart = () => {
    return {
        type: actionTypes.FETCH_POSTS_START,
    
    }
}

export const fetchPostsSuccess = (data) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        data:data
    }

}


export const fetchPostsFail = (error) => {
    return {
        type: actionTypes.FETCH_POSTS_FAIL,
        error: error
    }
}

export const fetchPosts = (id) => {
    return dispatch => {
        dispatch(fetchPostsStart())
        return axios.get(`categories/${id}/memes`)
            .then(res =>   {
                return dispatch(fetchPostsSuccess(res.data))
            })
            .catch(error => {
                return dispatch(fetchPostsFail(error))
            })
    }
}