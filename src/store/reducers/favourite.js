import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

let initialState = {
    favouriteList:[],
    fetchFavouriteListLoading:false,
    is_favorite:true,
    toggleFavouriteListLoading:false,
    toggleFavouriteListError:null
}

const fetchFavouriteStart = (state, action) => {
    return updateObject(state, { fetchFavouriteListLoading: true })
}

const fetchFavouriteSuccess = (state, action) => {
    return updateObject(state, { fetchFavouriteListLoading: false, favouriteList:action.favouriteList})
}

const fetchFavouriteFail = (state, action) => {
    return updateObject(state, { fetchFavouriteListLoading: false, fetchFavouriteListError: action.error });
}

/****Toggle favourite list****/

const toggleFavouriteStart = (state, action) => {
    return updateObject(state, { toggleFavouriteListLoading: true })
}

const toggleFavouriteSuccess = (state, action) => {
    console.log(action.favouriteList)
    // console.log(state)
    let items = [...state.favouriteList]
    let id = action.favouriteList.id;
    // let index = _.findIndex(items, { "id": id});
    // if (index > -1 && items[index]) {
    //     items.splice(index, 1);
    // }else{
    //     items.push({...action.favouriteList});
    // }
    // stoageSetter('wishlistCount',  action.totalWishListCount);

    return updateObject(state, { toggleFavouriteListLoading: false,is_favorite:!state.is_favorite, favouriteList: items})
}

const toggleFavouriteFail = (state, action) => {
    return updateObject(state, { toggleFavouriteListLoading: false, toggleFavouriteListError: action.error });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FETCH_FAVOURITE_LIST_START: return fetchFavouriteStart(state, action)
        case actionTypes.FETCH_FAVOURITE_LIST_SUCCESS: return fetchFavouriteSuccess(state, action)
        case actionTypes.FETCH_FAVOURITE_LIST_FAIL: return fetchFavouriteFail(state, action)
        
        case actionTypes.TOGGLE_FAVOURITE_START: return toggleFavouriteStart(state, action)
        case actionTypes.TOGGLE_FAVOURITE_SUCCESS: return toggleFavouriteSuccess(state, action)
        case actionTypes.TOGGLE_FAVOURITE_FAIL: return toggleFavouriteFail(state, action)


        default: return state
    
    }
}

export default reducer;