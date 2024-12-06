import express from 'express';
require('dotenv').config()
const PORT = process.env.PORT

const app = express();

app.use(express.static('public'));
// app.get('/', (req, res) => {
//     res.send('Hello World');
// })
app.listen(process.env.PORT,()=>{
console.log(`listening on ${PORT}`);
})

app.use(express.json());

