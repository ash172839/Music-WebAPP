import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_MUSIC_BASE_URL;
 //axios.defaults.baseURL =  API_BASE_URL;
 export const addNewSong = (songData:unknown)=>{
    axios.defaults.headers['Authorization'] = localStorage.token;
    console.log('API_BASE_URL ', API_BASE_URL, 'User Data is ', songData);
   
   
    return axios.post(API_BASE_URL+'add-song', songData,{
        headers: {
            'Content-Type': 'multipart/form-data', // Important for file uploads
        }
    }); // Promise
}

export const getAllSongs = ()=>{
    console.log('Get All Songs ');
     axios.defaults.headers['Authorization'] = localStorage.token;
    return axios.get(API_BASE_URL+'all-songs');
}