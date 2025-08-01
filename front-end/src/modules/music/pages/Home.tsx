import { useEffect } from "react";
import { useMusic } from "../store/music-store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Song } from "@/modules/components/Song";


export const Home = () => {
 
  const {songs, loadSong} = useMusic();
  useEffect(()=>{
    loadSong();
    console.log('Mounting Phase');
  },[])
  // useEffect(()=>{
  //   return function(){
  //     // clean up code
  //   }
  // },[]);
  // useEffect(()=>{

  // },[a,b])
  return (
    <div>
        <h1>Music Load Here {songs && songs.length}</h1>
       {songs.map((song,index)=><Song key = {index} song ={song}/>)}
    </div>
  )
}
