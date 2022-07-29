//-----------//  *define la aplicacion de express//---------

import express from "express"; //como condigurar un servidor de web socket  y a su vez necesita un servidor de http
const app = express();
//me permite crear un servidor de http

import path from "path"; //para decirle aca esta public
import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

export default app;
