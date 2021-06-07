import * as actionTypes from './actionTypes';
import axios from '../../axios-common';

export const fetchFavouriteStart = () => {
    return {
        type: actionTypes.FETCH_FAVOURITE_LIST_START,
    
    }
}

export const fetchFavouriteSuccess = (data) => {
    return {
        type: actionTypes.FETCH_FAVOURITE_LIST_SUCCESS,
        favouriteList:data,
    }
}


export const fetchFavouriteFail = (error) => {
    return {
        type: actionTypes.FETCH_FAVOURITE_LIST_FAIL,
        error: error
    }
}

export const fetchFavourite = () => {
    return dispatch => {
        dispatch(fetchFavouriteStart)
        return axios.get('favorites')
            .then(res => {
                return dispatch(fetchFavouriteSuccess(res.data))
            })
            .catch(error => {
                return dispatch(fetchFavouriteFail(error))
            })
    }
}


/**---------------------------Toggle favorite list-------------------------**/

export const toggleFavouriteStart = () => {
    return {
        type: actionTypes.TOGGLE_FAVOURITE_START,
    
    }
}

export const toggleFavouriteSuccess = (favouriteList,totalFavouriteListCount) => {
    return {
        type: actionTypes.TOGGLE_FAVOURITE_SUCCESS,
        favouriteList: favouriteList,
        totalFavouriteListCount: totalFavouriteListCount
        
    }
}


export const toggleFavouriteFail = (error) => {
    return {
        type: actionTypes.TOGGLE_FAVOURITE_FAIL,
        error: error
    }
}


export const toggleFavourite = (id)=>{
    return dispatch => {
        dispatch(toggleFavouriteStart())
        return axios.post(`memes/${id}/toggle_favorite`,id)
            .then(res => {
                // console.log(res.data)
                // res = JSON.parse(res)
                return dispatch(toggleFavouriteSuccess(res.data,res.data.favouriteCount))
            })
            .catch(error => {
                return dispatch(toggleFavouriteFail(error))
            })

    }
}