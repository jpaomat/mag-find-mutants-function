import { Context, Handler } from 'aws-lambda';
import ConnectionDb from './config/configDB';
import { HttpStatus } from './config/httpStatus';
import { IReqEvent } from './models/IReqEvent';
import { IRes } from './models/IResponse';

export const handler: Handler<IReqEvent, IRes> = async (event: IReqEvent, context: Context): Promise<IRes> => {
    const clsConnectionDB = new ConnectionDb('/rds_db/mysql');
    await clsConnectionDB.getCredentialDb();
    const response = {
        body: 'Hola',
        statusCode: HttpStatus.OK,
    };
    return response;
};
