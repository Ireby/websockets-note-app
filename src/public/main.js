//*----------------*archivo ppal frontend*----------------
//const socket = io(); //la forma en que le digo al servidor que puede emitir eventos Conexion bidirectional
//console.log(socket);
// socket.on("server:cargarNotas", (data)=>{
//     console.log(data);
// })//recibe los datos la llevamos a socket porque es request del server
import { appendNote, renderNotes, fillForm, onHandleSubmit } from "./ui.js";
import { loadNotes, onNewNote, onSelected } from "./sockets.js";
//---------------------------------

window.addEventListener("DOMContentLoaded", () => {
  loadNotes(renderNotes);
  onNewNote(appendNote);
  onSelected(fillForm);
  });

const noteForm = document.querySelector("#noteForm");
noteForm.addEventListener("submit", onHandleSubmit);


// noteForm.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     console.log(
//         noteForm['title'].value,
//         noteForm['description'].value
//         )
// });