const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const userRouter = require('./routes/user/user.router.js');
const trainsRouter = require('./routes/trains/trains.router.js');
const stationsRouter = require('./routes/stations/stations.router.js');
const ticketsRouter = require('./routes/tickets/tickets.router.js');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/users', userRouter);
app.use('/trains', trainsRouter);
app.use('/stations', stationsRouter);
app.use('/tickets', ticketsRouter);

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});


module.exports = app;
