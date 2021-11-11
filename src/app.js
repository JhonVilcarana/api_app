const express = require ('express')
const morgan = require ('morgan')

const studentRoutes = require('./routes/student.routes')

const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/', function(req, res, next) {
    res.send('SERVER SUCCESFULLY...!');
});

app.use('/student', studentRoutes);

module.exports = app;
