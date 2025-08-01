import {create} from 'zustand';
import { getAllSongs } from '../api/music-api';
type Song = {
    title : string,
    desc: string,
    image:string,
    audiourl:string
}
type SongStore = {
    songs : Song[],
    loadSong:()=>void; // backend all songs store by this
   // getAll:()=>Song[]; // give all songs to the component
}

export const useMusic = create<SongStore>()((set)=>({
    songs : [], 
    loadSong :async ()=>{
        const response = await getAllSongs();
        console.log('Response is ', response);
        set((state)=>({songs:  response.data.songs}))
    }
    

}));


