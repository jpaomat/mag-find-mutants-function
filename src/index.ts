import { Context, Handler } from 'aws-lambda';
import ConnectionDb from './config/ConnectionDb';
import { HttpStatus } from './config/httpStatus';
import { IReqEvent } from './models/IReqEvent';
import { IRes } from './models/IResponse';

export const handler: Handler<IReqEvent, IRes> = async (event: IReqEvent, context: Context): Promise<IRes> => {
    const clsConnectionDB = new ConnectionDb('arn:aws:secretsmanager:us-east-1:747074311659:secret:/rds_db/mysql-hBGHpvl');
    await clsConnectionDB.getCredentialDb();
    return {
        body: 'Hola',
        statusCode: HttpStatus.OK,
    };
};
