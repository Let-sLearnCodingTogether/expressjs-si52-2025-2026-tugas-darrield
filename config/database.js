import mongoose from "mongoose";

export const database = async () => {
try {
    console.log("Starting connection to mongodb...");

    const response = await mongoose.connect("mongodb://127.0.0.1:27017/Tugas?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8")

    console.log(`Connected successfully to mongodb at : ${response.connection.host}`);
} catch (error) {
    console.log("Mongodb connection failed");

    process.exit(1)
}

}
