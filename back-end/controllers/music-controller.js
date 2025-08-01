import fs from 'fs';
import { addNewSong, getAllSongs as allSongs } from '../services/song-service.js';

export const getAllSongs = async (req, res)=>{
    try{
   const songs = await allSongs();
   res.status(200).json(songs);
    }
    catch(err){
        console.log('Get All Songs Error ', err);
        res.status(500).json({message:'Error During Song Fetch'});
    }
   // res.json({message:'Get All Songs '});
}
export const searchSongs = (req, res)=>{
    res.json({message:'Search Songs '});
}
export const addSong = async (req, res)=>{
    console.log('I am in Add Song ', req.body); // data 
     console.log('####### Add songs ' , req.files); // file 
     const audioFile = req.files['audio[]'] || req.files.audio;
    try{
    if (!audioFile) {
        return res.status(400).json({ error: 'No audio file uploaded' });
    }
    const fileName = req.body.title+".mp3";
    const data = audioFile.data;
     fs.writeFileSync('/Users/amitsrivastava/Documents/music-app/back-end/upload/'+fileName, data)
     // bytes of stream and then write in a file
        // call db
    const result = await addNewSong(req.body); 
    res.status(200).json(result);
}   
catch(err){
    console.log(err);
    res.status(500).json({message:'Problem in Song Add'});
}
}

export const updateSong = (req, res)=>{
    res.json({message:'Update Song '});
}