const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter');
const ProductsRouter = require('./routes/ProductsRouter');
const ensureAuthenticated = require('./middleware/Auth');



require('dotenv').config();
require('./models/db');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/auth', AuthRouter);
app.use('/products',ensureAuthenticated, ProductsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})