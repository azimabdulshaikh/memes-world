import * as actionTypes from './actionTypes';
import axios from '../../axios-common';

export const fetchCategoryStart = () => {
    return {
        type: actionTypes.FETCH_CATEGORY_START,
    
    }
}

export const fetchCategorySuccess = (category) => {
    return {
        type: actionTypes.FETCH_CATEGORY_SUCCESS,
        category:category
    }
}


export const fetchCategoryFail = (error) => {
    return {
        type: actionTypes.FETCH_CATEGORY_FAIL,
        error: error
    }
}

export const fetchCategories = () => {
    return dispatch => {
        dispatch(fetchCategoryStart())
        return axios.get('categories' )
            .then(res => {
                console.log(res)
                return dispatch(fetchCategorySuccess(res))
            })
            .catch(error => {
                return dispatch(fetchCategoryFail(error))
            })
    }
}
