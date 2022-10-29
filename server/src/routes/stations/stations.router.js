const express = require('express');
const { httpGetStationsWithTrainNumber } = require('./stations.controller.js');

const stationsRouter = express.Router();

stationsRouter.get('/:train_number', httpGetStationsWithTrainNumber);

module.exports = stationsRouter;