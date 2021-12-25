import debugLib from 'debug';
import { Request, Response, Router } from 'express';

const debug = debugLib('mag:GetStadisticsController');
const GetStadisticsController = Router();

GetStadisticsController.get('/stast', async (req: Request, res: Response) => {
    try {
        debug('[START] get stadists: %j', req)
    } catch (error) {
        debug('[Error] get stadists: %j', error)
        if (error.statusCode) {
            res.status(error.statusCode).send(error);
        }
    }
});

export default GetStadisticsController;
