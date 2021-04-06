import axios from 'axios'; 
export const baseURL = 'https://polls.apiblueprint.org/';

let defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json' ,
}

const instance = axios.create({
    baseURL: baseURL,
    headers: defaultHeaders
});

export default instance;
