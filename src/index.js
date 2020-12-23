require('dotenv').config();
const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');

const routes = require('./routes')

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(express.json());

const PORT = process.env.PORT;


//"get,post,put,delete"

//app.get('/', (req, res) => {
    //res.send('oi halkye')
//})

mongoose.connect(process.env.MONGOURL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
});

mongoose.connection.on('error', (err) => { 
    console.log('Erro na conexão com o banco de dados: ' + err) 
})

mongoose.connection.on('disconnected', () => { 
    console.log('Aplicação desconectada do banco de dados!') 
})

mongoose.connection.on('connected', () => { 
    console.log('Aplicação conectada ao banco de dados!') 
})

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
    });

