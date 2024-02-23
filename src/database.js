import mongoose from "mongoose";

mongoose.connect(process.env.CONNECTION_STRING_DB)
    .then(db=> console.log("Database clothes connected"))
    .catch(err=>console.log(err))

export default mongoose;