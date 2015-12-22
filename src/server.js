'use strict';

import express from 'express';
import http from 'http';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';

let app = express();
let server = http.createServer(app);

const port = parseInt(process.env.PORT || 3000);

app.set('port', port);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(methodOverride());

app.get('/', (req, res) => {
  res.json({hello: 'Hello World!'});
});

server.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
