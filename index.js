const express = require('express');
const app = express();
const path = require('path');
const slug = require('mongoose-slug-generator');
app.use('/public',express.static(path.join(__dirname,'public')));
const methodOverride = require('method-override')
const route = require('./routes');
const db = require('./config/db/index');
//Dùng với pt PUT
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({
    extended : true 
}));
route(app);
db.connect();
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(3001,()=>console.log('Running successfully on http://localhost:3000'));