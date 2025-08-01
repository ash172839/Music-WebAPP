import mongoose, {Schema, SchemaTypes} from 'mongoose';
const songSchema = new Schema({
    'title':{type:SchemaTypes.String, required:true, unique:true},
    'desc':{type:SchemaTypes.String, minLength: 8, required:true},
    'image':{type:SchemaTypes.String},
    'audiourl':{type:SchemaTypes.String},
    'status':{type:SchemaTypes.String, default:'A'}
    
});
export const SongModel =  mongoose.model('songs', songSchema);

