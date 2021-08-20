const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const homeRouter = require('./routes/home');
const vaccinationsRouter = require('./routes/vaccinations');
const regionalRouter = require('./routes/regional');
const newsRouter = require('./routes/news')
const publicPath = path.join(__dirname, '..', 'public');

const app = express();
app.use(cors());
dotenv.config();

//Mount routers

app.use('/home', homeRouter);
app.use('/vaccinations', vaccinationsRouter);
app.use('/regional', regionalRouter);
app.use('/news', newsRouter)

app.use(express.static(publicPath));app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

// Listen to the port
const PORT = process.env.PORT || 5000;
// const HOST = process.env.PORT ? '0.0.0.0' : '127.0.0.1'

// // Listen on a specific host via the HOST environment variable
// var host = process.env.HOST || '0.0.0.0';
// // Listen on a specific port via the PORT environment variable
// var port = process.env.PORT || 8080;

// var cors_proxy = require('cors-anywhere');
// cors_proxy.createServer({
//     originWhitelist: [], // Allow all origins
//     requireHeader: ['origin', 'x-requested-with'],
//     removeHeaders: ['cookie', 'cookie2']
// }).listen(port, host, function() {
//     console.log('Running CORS Anywhere on ' + host + ':' + port);
// });

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
