import { SongModel } from "../models/song-model.js";

export const addNewSong = async (songObject)=>{
    try{
       songObject.audiourl = process.env.AUDIO_URL_BASE+songObject.title+".mp3";
       console.log('Song Object is ****** ', songObject);
    const doc = await SongModel.create(songObject);
    
    if(doc && doc._id){
        return {message:"Song Added SuccessFully"};
    }
}
catch(err){
    throw err;
}
}


export const getAllSongs = async ()=>{
   try{
    const docs =  await SongModel.find().exec();
   if(docs){
        return {songs : docs};
   }
   else{
         return null;
   }
}
catch(err){
    console.log(err);
    throw new Error("Error During Song ");
}
}