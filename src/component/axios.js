import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://amazoncloneapinodejs.herokuapp.com' // The API (cloud function) URL
});

export default instance;