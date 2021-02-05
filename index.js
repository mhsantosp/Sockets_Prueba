const express = require("express");
// para conectar index en la carpeta oublic con la parte de back
const path = require("path");

const app = express();

app.set("port", 4500);

//Concatenar donde tenemos la carpeta public
app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(app.get("port"), () => {
  console.log("en puerto", app.get("port"));
});

//Websockets

//Traemos libreria
const SocketIO = require("socket.io");
const io = SocketIO(server);

//Establecemos la conexion
io.on("connection", (socket) => {
  console.log("Se ha conectado alguien", socket.id);
});
