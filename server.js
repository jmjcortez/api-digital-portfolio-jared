const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const cors = require('cors');

const { notFound } = require('./middlewares/errorMiddleware');
const artworkRoutes = require('./routes/artworkRoutes');
const connectDB = require('./config/db');
const { adminJs, adminRouter } = require('./routes/adminRoutes');

const app = express();
dotenv.config();

connectDB();

app.use(cors());
app.use('/api/artworks', artworkRoutes);
app.use(adminJs.options.rootPath, adminRouter);

app.use(notFound);

app.listen(8000, console.log('Server Started on PORT 8000'.yellow.bold));
