require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cookieSession = require('./middleware/cokkieSession');



app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'petShop',
    resave: false,
    saveUninitialized: true
}))
app.use(cookieParser());
app.use(cookieSession)



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//ENRUTADOR
let categoriesRouter = require('./routes/categoriesRouter');
let subcategoriesRouter = require('./routes/subcategoriesRouter');
let apiProducts = require('./routes/api/apiProducts');

let usersRouter = require('./routes/users');
let productsRouter = require('./routes/products');
let adminRouter = require('./routes/adminRouter');
const newHomeRouter = require('./routes/newHomeRouter');
// const { categories } = require('./database/dataBase');


// MIDDLEWARES
app.use('/users', usersRouter)
app.use('/', productsRouter)
app.use('/admin', adminRouter);
app.use('/home', newHomeRouter);
app.use('/category', categoriesRouter);
app.use('/subcategory', subcategoriesRouter);
app.use(apiProducts)

app.use('/api/cart',require('./routes/cart'));


app.listen(port, ()=>console.log(`servidor Escuchando en Puerto ${port} http://localhost:${port}`));

