import noteModel from "../models/noteModel.js";


export const buatNote = async (req, res) => {
 try {
        const request = req.body

        const response = await noteModel.create({
            title : request.title,
            content : request.content,
            createdAt : request.createdAt
        })

        res.status(201).json({
            message : "Note berhasil di tambah",
            data : response
        })
    } catch (error) {
        res.status(500).json({
            message : error.message,
            data : null
        })
    }

};


export const listNotes = async (req, res) => {
        try {

        const data = await noteModel.find({
        })

        res.status(201).json({
            message : "list notes",
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
};


export const getNoteById = async (req, res) => {
  try {
        const id = req.params.id
        const request = req.body
        
        const data = await noteModel.findById(id)
        

        res.status(201).json({
            message : "list notes",
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
};


export const updateNote = async (req, res) => {
  try {
        const id = req.params?.id
        const request = req.body

        if(!id) {
            return res.status(500).json({
                message : "Id wajib di isi",
                data : null
            })
        }

        const response = await noteModel.findByIdAndUpdate(id, {
            title : request.title,
            content : request.content,
            createdAt : request.createdAt
        })

        if (!response) {
            return res.status(500).json({
                message : "Notes gagal diupdate",
                data : null
            })
        }

        return res.status(200).json({
            message : "Notes berhasil di update",
            data : null
        })

 
    } catch (error) {
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
};


export const deleteNote = async (req, res) => {
  try {
        const id = req.params.id
        if(!id) {
            return res.status(500).json({
                message : "Id wajib di isi",
                data : null
            })
        }

    const response = await noteModel.findByIdAndDelete(id)

    if(response) {
        return res.status(200).json({
            message: "Note berhasil dihapus",
            data : null
        })
    }
    return res.status(404).json({
        message : "Note tidak ditemukan",
        data : null
    })

    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
    }
};