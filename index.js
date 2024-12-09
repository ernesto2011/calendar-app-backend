import express from 'express';
import 'dotenv/config'
import cors from 'cors'
import auth from './src/routes/auth.js'
import events from './src/routes/events.js'
import { dbConnection } from './src/database/config.js';
import { validateJWT } from './src/middlewares/validate-jwt.js';

const PORT = process.env.PORT

const app = express();

//connect to db
dbConnection();

//cors
app.use(cors())

app.use(express.static('public'));

app.use(express.json());
app.use('/api/v1/auth', auth)
app.use('/api/v1/events',validateJWT, events)
app.listen(process.env.PORT,()=>{
console.log(`listening on ${PORT}`);
})

app.use(express.json());

