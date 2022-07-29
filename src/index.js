//-----------//  *Permite iniciar la aplicacion//---------

// Para usar import y expor  en lugar de require  babel para convertir codigo
// npm i -D nodemon @babel/corel @babel/cli @babel/node @babel/preset-env todas las dependencias de nmp 
//DEPLOY ?npm install --save-dev @babel/plugin-transform-runtime npm install --save @babel/runtime
//si no usamos expres no podemos ejecutar siguiente linea
//como condigurar un servidor de web socket  y a su vez necesita un servidor de http
//?-----import express from "express";
import { PORT } from "./config.js";
import { Server as WebSocketServer } from "socket.io";//el servidor de socket io
import http from "http";
//como express tiene su propia logica  tengo que crear el servidor htpp sin logica para poder pasarselo al webserver
import app from "./app.js";//servidor https express
import Sockets from "./sockets.js";
import { connectDB } from "./db.js";//conexion  a DATABASE


const server = http.createServer(app);//-----como cambie a server por el socket en vez de app cambio a server en lugar de app
connectDB();
const httpServer = server.listen(PORT);
const io = new WebSocketServer(httpServer);
Sockets(io);//? al ejecutar los sockets le voy pasando el io



//conexion con mis clientes se conectan mediante mi objeto ios y como las conecto, pasandole el app //*servidor web sockets
console.log(`
∵*.•´¸.•*´✶´♡
° ☆ °˛*˛☆_Π______*˚☆*
˚ ˛★˛•˚*/______/ ~⧹。˚˚
˚ ˛•˛•˚ ｜ 田田 ｜門｜ ˚*
🌷╬╬🌷╬╬🌷╬╬🌷╬╬🌷

listening at 3001`);
//* el front se conecta con http://localhost:3001/socket.io/socket.io.js que nuestro servidor sirve
