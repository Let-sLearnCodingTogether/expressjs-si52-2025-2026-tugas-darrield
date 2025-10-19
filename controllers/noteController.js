import Note from "../models/noteModel.js";


export const buatNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.create({ title, content });
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ message: "Gagal membuat catatan", error });
  }
};


export const listNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil catatan", error });
  }
};


export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Catatan tidak ditemukan" });
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil catatan", error });
  }
};


export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!note) return res.status(404).json({ message: "Catatan tidak ditemukan" });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ message: "Gagal memperbarui catatan", error });
  }
};


export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ message: "Catatan tidak ditemukan" });
    res.status(200).json({ message: "Catatan berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Gagal menghapus catatan", error });
  }
};