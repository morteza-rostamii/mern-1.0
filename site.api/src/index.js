
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
const app = express();

// routes
import blogRouter from '#root/src/modules/blog/blog.route.js'

// *** middlewares ***
//====================

// parse json
express.json();

app.use(cors({
  origin: '*',
}));

// *** routes ***
//====================
app.use('/blogs', blogRouter)

// catch all 
app.use('*', (req, res) => {
  return res.status(404).json({
    meg: 'not found!!'
  })
})

// *** process ***
//====================

app.listen(PORT, () => {
  console.log(`node is running on http://localhost:${PORT}`)
})
