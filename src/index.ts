import { Context, Handler } from 'aws-lambda';
import { HttpStatus } from './config/httpStatus';
import { IReqEvent } from './models/IReqEvent';
import { IRes } from './models/IResponse';

export const handler: Handler<IReqEvent, IRes> = async (event: IReqEvent, context: Context): Promise<IRes> => {
    const response = {
        body: 'Hola',
        statusCode: HttpStatus.OK,
    };
    return response;
};
