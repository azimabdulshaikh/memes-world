// import * as actionTypes from './actionTypes';

// export const uploadPostStart = ()=>{
//     return{
//         type: actionTypes.UPLOAD_POST_START
//     }
// }

// export const uploadPostSuccess = ()=>{
//     return{
//         type: actionTypes.UPLOAD_POST_SUCCESS
//     }
// }

// export const uploadPostFail = (error)=>{
//     return{
//         type: actionTypes.UPLOAD_POST_FAIL,
//         error:error
//     }
// }

// export const uploadPost = (userData) => {
//     return dispatch => {
//         dispatch(submitPostStart())
//         return axios.post('/api/v1/addresses', userData)
//             .then((res) => {
//                 toastr.success("Post submitted successfully")
//                 window.history.back()
//                 return  dispatch(submitPostSuccess());
//             })
//             .catch((error) => {
//                 return dispatch(submitPostFail(error.response.data.errors))
//             })
//     }
// }