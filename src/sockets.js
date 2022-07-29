//-----------//*  Contiene la conexion de web sockets y los eventos que los puede responder y recibir//---------
import Note from "./models/Note.js";
 //io.on  o emit<- 'Cuando escucha un evento' //console.log(socket.handshake.url);donde se esta conectando
export default (io) => {
 
  io.on("connection", (socket) => {
   
    // Send all messages to the client
    const emitNotes = async () => {
      const notes = await Note.find();
      socket.emit("server:loadnotes", notes);
    };
    emitNotes();

    socket.on("client:newnote", async (data) => {
      const newNote = new Note(data);
      const savedNote = await newNote.save();
      io.emit("server:newnote", savedNote);
    });

    socket.on("client:deletenote", async (noteId) => {
      await Note.findByIdAndDelete(noteId);
      emitNotes();
    });

    socket.on("client:getnote", async (noteId) => {
      const note = await Note.findById(noteId);
      socket.emit("server:selectednote", note);
    });

    socket.on("client:updatenote", async (updatedNote) => {
      await Note.findByIdAndUpdate(updatedNote._id, {
        title: updatedNote.title,
        description: updatedNote.description,
      });
      emitNotes();
    });

    socket.on("disconnect", () => {
      console.log(socket.id, "disconnected");
    });
  });
};
