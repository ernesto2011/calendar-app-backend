import { Schema, model } from "mongoose";

const EventSchema= Schema({
    title:{
        type:String,
        required:true
    },
    notes:{
        type:String,
    },
    start:{
        type:Date,
        required:true
    },
    end:{
        type:Date,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},
{
    timestamps:true,
    versionKey: false

});
export const Event = model('Event', EventSchema);