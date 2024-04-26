const express = require("express");
const app = express();
const port = 3000;

var fs = require('fs');
var https = require('https');
const cors = require("cors");

app.use(cors());
app.use(express.json());

const activoRoute = require('./routes/activoRoute');
const responsableRoute = require('./routes/responsableRoute');
const ubicacionRoute = require('./routes/ubicacionRoute');

app.get("/", (req, res) => {
    res.send("Backend meta 3.3.1")
})

app.use("/activos", activoRoute);
app.use("/responsables", responsableRoute);
app.use("/ubicaciones", ubicacionRoute);

const llavePrivada = fs.readFileSync("server.key");
const certificado = fs.readFileSync("server.crt");
const credenciales = {
key: llavePrivada,
cert: certificado,
passphrase: "password"
};
const httpsServer = https.createServer(credenciales, app);

httpsServer.listen(port, () => {
    console.log('Servidor escuchando el puerto:', port)
}).on('error', err => {
    console.log('Error al iniciar el servidor:', err)
});