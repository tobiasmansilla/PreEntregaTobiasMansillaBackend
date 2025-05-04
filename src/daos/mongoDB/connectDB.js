import mongoose from "mongoose";

// Mongoose config
export function connectDB() {
    mongoose
    .connect("mongodb://127.0.0.1:27017/entregaFinalAdrianCisneros")
    .then(() => {
        console.log("Base de datos conectada a MongoDB", mongoose.connection.host, mongoose.connection.name);
    })
    .catch((error) => {
        console.log(error);
    });

}
