import mongoose from "mongoose";

const database = async () => {
  try {
    console.log("Melakukan koneksi ke MongoDB...");

    await mongoose.connect("mongodb://127.0.0.1:27017/Tugas?directConnection=true");

    console.log(`Koneksi ke MongoDB berhasil di host: ${mongoose.connection.host}`);
    console.log(`Database: ${mongoose.connection.name}`);
  } catch (error) {
    console.error("Gagal terkoneksi dengan MongoDB:", error.message);
    process.exit(1);
  }
};

export default database;
