import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {Angry} from 'lucide-react';
import { useState } from "react";
import { addNewSong as addNewSongApi } from "../api/music-api";
export const AddSong = ()=>{
    const {register, handleSubmit, formState:{errors}} = useForm({
            
            defaultValues:{
                title : '',
                desc: '',
                audio:'',
                image:''
            }
        });

        const addNewSong = (songObject)=>{
            console.log('Song Data is *****  ', songObject);
             const songFormData = new FormData();
        
        // Append text fields
        songFormData.append('title', songObject.title);
        songFormData.append('desc', songObject.desc);
        songFormData.append('image', songObject.image);
        
        // Append file - formData.audio is a FileList, so we take the first file
        if (songObject.audio && songObject.audio[0]) {
            songFormData.append('file', songObject.audio[0]); // 'file' matches your backend req.files.file
        }
            addNewSongApi(songObject);
        }
        const checkSize = (event)=>{
            console.log('Check Size call');
            const currentFile = event.target.files[0];
            if(currentFile.size>(5 * 1024 * 1024)){
                console.log('File size too Big....');
                return;
            }
           
        }
    return (<>
        <Card className="w-full max-w-md mx-auto">
        <CardHeader>
            <CardTitle className="space-y-1 text-center">Add New Song</CardTitle>
            <CardDescription className="text-center">Music App Form</CardDescription>
        </CardHeader>
        
        <CardContent>
          
           <form onSubmit={handleSubmit(addNewSong)}  method="post" >
        <div className="grid w-full max-w-sm items-center gap-3">
             <Label htmlFor="email">Title</Label>
             <Input {...register('title')}  type="title" id="title" placeholder="Song Title" />
           
    </div>
     <div className="grid w-full max-w-sm items-center gap-3">
             <Label htmlFor="Desc">Desc</Label>
             <Input  {...register('desc')} type="text" id="desc" placeholder="Desc" />
             
    </div>
     <div className="grid w-full max-w-sm items-center gap-3">
             <Label htmlFor="name">Image</Label>
             <Input  {...register('image')} type="text" id="image" placeholder="Image URL" />
        
    </div>
    <div className="grid w-full max-w-sm items-center gap-3">
             <Label htmlFor="name">Song File to Upload</Label>
             <Input   {...register('audio')} onChange={checkSize} type="file" id="audio" name="audio" accept=".mp3,audio/*" placeholder="Mp3 File Upload" />
        
    </div>
    <br />
    <div className="grid w-full max-w-sm items-center gap-3">
            <Button>Add New Song</Button>
    </div>

           </form>
        </CardContent>
        
    </Card>
    </>)
}