//*--------------Traemos las funciones de javaQue interactuan con el back 
const socket = io()//traigo el socket


export const updateNote = (_id, title, description) => {
  socket.emit("client:updatenote", {
    _id,
    title,
    description,
  });
};

/**
 * Load an Array of Notes
 @param {function} callback A function to render Notes
 */
export const loadNotes = (callback) => {
  socket.on("server:loadnotes", callback);
};

export const onNewNote = (callback) => {
  socket.on("server:newnote", callback);
};

export const onSelected = (callback) => {
  socket.on("server:selectednote", callback);
};  

export const getNoteById = (noteId) => { //?Para updatear la nota envia la id al back
  socket.emit("client:getnote", noteId);
};
export const deleteNote = (id) => {
  socket.emit("client:deletenote", id);
};
export const saveNote = (title, description) => {
  socket.emit("client:newnote", {
    title,
    description,
  });
};
