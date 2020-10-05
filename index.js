const express = require('express');
const restaurantRouter = require('./router/restaurant');
const router = require('./router/index');
const hbs = require('express-handlebars');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');


app.use('/',router);


app.listen(3000, ()=>{
    console.log('Listening to port 3000');
});