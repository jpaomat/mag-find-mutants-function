import { Context, Handler } from 'aws-lambda';
import { HttpStatus } from './config/httpStatus';

interface IReqEvent {
    key1: string;
    key2: string;
    key3: string;
}

interface IRes {
    body: string;
    statusCode: number;
}

export const handler: Handler<IReqEvent, IRes> = async (event: IReqEvent, context: Context): Promise<IRes> => {
    const response = {
        statusCode: HttpStatus.OK,
        body: 'Hola'
    };
    return response;
};
