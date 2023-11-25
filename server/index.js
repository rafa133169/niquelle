const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const usuarioRouter = require('./router/ususarioRouter');
const loginRouter = require('./router/loginRouter');
const medicinaRouter = require('./router/medicinaRouter');
const morningRouter = require('./router/morningRouter');
const mediodiaRouter = require('./router/mediodiaRouter');
const nocheRouter = require('./router/nocheRouter');
const tardeRouter = require('./router/tardeRouter');
const cualquieraRouter = require('./router/cualquieraRouter');

app.use('/usuarios', usuarioRouter);
app.use('/login', loginRouter);
app.use('/medicina', medicinaRouter);
app.use('/morning', morningRouter);
app.use('/mediodia',mediodiaRouter);
app.use('/noche',nocheRouter);
app.use('/tarde',tardeRouter);
app.use('/cualquiera',cualquieraRouter);

app.listen(3001, () => {
    console.log("API escuchando por el puerto 3001")
})