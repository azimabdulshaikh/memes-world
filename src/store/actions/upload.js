import * as actionTypes from './actionTypes';
import axios from '../../axios-common';

export const uploadPostStart = ()=>{
    return{
        type: actionTypes.UPLOAD_POST_START
    }
}

export const uploadPostSuccess = ()=>{
    return{
        type: actionTypes.UPLOAD_POST_SUCCESS
    }
}

export const uploadPostFail = (error)=>{
    return{
        type: actionTypes.UPLOAD_POST_FAIL,
        error:error
    }
}



export const uploadPost = (userData) => {
    console.log(userData.meme.category_id)
    const id = userData.meme.category_id
    return dispatch => {
        dispatch(uploadPostStart())
        return axios.post(`categories/${id}/memes`, userData)
            .then((res) => {
                window.history.back()
                console.log(res)
                return  dispatch(uploadPostSuccess());
            })
            .catch((error) => {
                return dispatch(uploadPostFail(error.response.data.errors))
            })
    }
}


/*-----------------Edit Post--------------------*/

export const editPostStart = () => {
    return {
        type: actionTypes.EDIT_POST_START
    }
}

export const editPostSuccess = (updatedProfile, headers) => {
    return {
        type: actionTypes.EDIT_POST_SUCCESS,
        updatedProfile: updatedProfile,
        headers: headers
    }
}

export const editPostFail = (error) => {
    return {
        type: actionTypes.EDIT_POST_FAIL,
        error: error
    }
}

// export const editPost = (userid, profileData) => {
//     return dispatch => {
//         dispatch(editPostStart());
//         let url = `categories/${category_id}/memes/${id}/`;
//         return axios.put(url, { "user": profileData })
//             .then((res) => {
//                 return dispatch(editPostSuccess(res.data.user))
//             })
//             .catch((error) => {
//                 return dispatch(editPostFail(error))
//             })

//     }
// }
