const express = require('express');
const { httpGetTrainWithTrainNumber } = require('./trains.controller.js');

const trainsRouter = express.Router();

trainsRouter.get('/:train_number', httpGetTrainWithTrainNumber);

module.exports = trainsRouter;