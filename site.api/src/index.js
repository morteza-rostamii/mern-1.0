
import express from 'express'
import cors from 'cors'

import { fileURLToPath } from 'url';
import * as path from 'path'
import config from '#root/src/config/default.js'

// database: setup
import * as db from '#root/src/config/db.js'

// *** variables ***
//====================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = config.PORT || 4001;
const api = '/api';
const app = express();

// *** static files ***
//====================

//http://localhost:4000/test.txt
app.use(express.static('public'));

// routes
import blogRouter from '#root/src/modules/blog/blog.route.js'
import { errorMiddleware } from './middlewares/error.middleware.js';

// *** middlewares ***
//====================

// parse json
app.use(express.json());
// parse formData
app.use(express.urlencoded({extended: true}));

app.use(cors({
  origin: '*',
}));

// *** routes ***
//====================

app.use(`${api}/blogs`, blogRouter);

// catch all 
app.use('*', (req, res, next) => {

  const err = new Error(`${req.originalUrl} does not exist!`);
  err.status = 'fail';
  err.statusCode = 404;

  // if: pass anything into next() =: express calls for error handling middleware (skip other middlewares)
  return next(err);
});

// *** error middleware ***
//====================

app.use(errorMiddleware);

// *** process ***
//====================

app.listen(PORT, () => {
  console.log(`node is running on http://localhost:${PORT}`)
})
