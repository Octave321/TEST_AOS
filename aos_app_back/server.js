const app = require('express')();
const server = require('http').createServer(app);
require('dotenv').config()

const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')


const { sequelize, Task } = require('./database')
 


app.use(bodyParser.json())
app.use(methodOverride())
app.use(cors())


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
const authRoute = require('./route/auth')(app)

server.listen(3002);
 