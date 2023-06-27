import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    { 
        name: {
            type: String,
            required: [true, 'Name is required'],
            maxLength: [50, "Name should be less than 50 character"]
        }, 
        email: {
            type: String,
            unique: true
        },
        username: {
            type: String,
            unique: true
        },
        password: String,
        age: Number,
    }
    );


export default mongoose.model("User", userSchema)

//users