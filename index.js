import express from 'express';
import 'dotenv/config'
import auth from './src/routes/auth.js'

const PORT = process.env.PORT

const app = express();

app.use(express.static('public'));

app.use('/api/auth', auth)
app.listen(process.env.PORT,()=>{
console.log(`listening on ${PORT}`);
})

app.use(express.json());

