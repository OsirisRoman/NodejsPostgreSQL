const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const publicRoutes = require('./routes/shop');
const expressHBS = require('express-handlebars');

const app = express();

app.engine(
  'hbs',
  expressHBS({
    layoutsDir: 'views/layouts',
    defaultLayout: 'main-layout',
    extname: 'hbs',
  })
);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.router);
app.use(publicRoutes);

app.use((req, res, next) => {
  res.status(404).render('404NotFound', { pageTitle: '404 Not Found' });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
