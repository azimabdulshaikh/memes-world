import axios from 'axios'; 
const url = `https://private-361bb9-memeworld.apiary-mock.com/`
export const baseURL = `${url}`;
let defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json' ,

}

const instance = axios.create({
    baseURL: baseURL,
    headers: defaultHeaders,
});

export default instance;
