import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import config from './config'
import GetStadisticsController from './controllers/GetStadisticsDna.controller';

const app = express();
const fullApiPath = `${config.apiPath}`;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

//configuración cabeceras y cors
app.use((_, res, next) =>{
    res.header('Access-control-Allow-Origin', '*');
    res.header('Access-control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(fullApiPath, GetStadisticsController);

export default app;
