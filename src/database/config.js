import mongoose from "mongoose";

export const dbConnection = async()=>{
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log("DB connected successfully!!!");
    } catch (error) {
        console.log(error);
        throw new Error("Error connecting to DB");
    }
}