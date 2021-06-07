import * as actionTypes from './actionTypes';
import axios from '../../axios-common';

export const fetchCategoryStart = () => {
    return {
        type: actionTypes.FETCH_CATEGORY_START,
    
    }
}

export const fetchCategorySuccess = (categoriesList) => {
    return {
        type: actionTypes.FETCH_CATEGORY_SUCCESS,
        categoriesList:categoriesList,
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
        return axios.get('categories')
            .then(res => {
                return dispatch(fetchCategorySuccess(res.data))
            })
            .catch(error => {
                return dispatch(fetchCategoryFail(error))
            })
    }
}
