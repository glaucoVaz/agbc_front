const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('./dist/sgm'));
app.use('*', (req, res) => 
    {
        res.sendFile(__dirname +'/dist/sgm/index.html');
    }
);

const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));