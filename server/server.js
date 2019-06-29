// server.js
// =============================
// Author: Zeb
// =============================


// --- IMPORTS ---
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { RootRouter } from './routers'


// --- IMPORT SETUPS ---
const app = express()
dotenv.config()


// --- SERVER SETUP ---
app.set('views', path.join(__dirname, 'views/'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '../public/')))
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))
app.use(cookieParser())


// --- ROUTER NAMESPACES ---
app.use('/', RootRouter);


// --- SERVER LISTENER ---
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});