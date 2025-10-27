import express from "express"
import * as noteController from  "../controllers/noteController.js"
import * as authController from "../controllers/authController.js"
import Note from "../models/noteModel.js"
import { protect } from "../middleware/authMiddleware.js"
const api = express.Router()


api.post("/note", protect ,noteController.buatNote);         
api.get("/note", protect ,noteController.listNotes);         
api.get("/note/:id", protect ,noteController.getNoteById);      
api.put("/note/:id", protect ,noteController.updateNote);       
api.delete("/note/:id", protect ,noteController.deleteNote);    

api.post('/register', authController.register)
api.post('/login', authController.login)
export default api