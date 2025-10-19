import express from "express"
import * as noteController from  "../controllers/noteController.js"
import Note from "../models/noteModel.js"

const api = express.Router()


api.post("/note", noteController.buatNote);         
api.get("/note", noteController.listNotes);         
api.get("/note/:id", noteController.getNoteById);      
api.put("/note/:id", noteController.updateNote);       
api.delete("/note/:id", noteController.deleteNote);    


export default api