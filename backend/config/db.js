import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://bapidev:bapidasdev18@cluster0.0iesl.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}