const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

// app.engine('hbs', expressHbs({
//     layoutsDir: 'views/layouts/', 
//     defaultLayout: 'main-layout', 
//     extname: 'hbs'
// }));
// app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
// app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const fourOfour = require('./routes/pageNotFound');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminData.routes);
app.use(shopRoutes);
app.use(fourOfour);

app.listen(3000);
