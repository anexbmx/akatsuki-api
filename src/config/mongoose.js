import mongoose from "mongoose";

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(
        () => {
            console.log("connected Succeffully");
        },
        (error) => console.log(error.message)
    );

export default mongoose;
