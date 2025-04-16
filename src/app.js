require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const cookieParser = require('cookie-parser');
const cookieSession = require('./middleware/cokkieSession');

// Base de datos Sequelize
const { sequelize } = require('./database/models'); // Ajustá si tu path es diferente

// Middleware para probar conexión a la DB
app.get('/test-db', async (req, res) => {
  try {
    const [rows] = await sequelize.query('SELECT 1 + 1 AS result');
    res.send(`✅ Conexión OK: ${rows[0].result}`);
  } catch (error) {
    console.error('❌ Error al conectar con la DB:', error.message);
    res.status(500).send(`❌ Error de conexión: ${error.message}`);
  }
});

// Middlewares generales
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());

// Configuración de sesiones con Sequelize
app.use(session({
  secret: 'petShop',
  store: new SequelizeStore({
    db: sequelize,
  }),
  resave: false,
  saveUninitialized: false,
  proxy: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 día
  }
}));

app.use(cookieSession);

// Configuración de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas
app.use('/', require('./routes/home'));
app.use('/users', require('./routes/users'));
app.use('/', require('./routes/products'));
app.use('/admin', require('./routes/adminRouter'));
app.use('/home', require('./routes/newHomeRouter'));
app.use('/category', require('./routes/categoriesRouter'));
app.use('/subcategory', require('./routes/subcategoriesRouter'));
app.use('/api/products', require('./routes/api/apiProducts'));
app.use('/api/cart', require('./routes/cart'));

// Iniciar servidor
app.listen(port, () => console.log(`servidor Escuchando en Puerto ${port} http://localhost:${port}`));
