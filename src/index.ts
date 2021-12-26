import { Context, Handler } from 'aws-lambda';
import { HttpStatus } from './config/httpStatus';
import InsertVerificationDNA from './dbsource/InsertVerificationDNA';
import { IReqEvent } from './models/IReqEvent';
import { IRes } from './models/IResponse';

export const handler: Handler<IReqEvent, IRes> = async (event: IReqEvent, context: Context): Promise<IRes> => {
    const insertDnaDB = new InsertVerificationDNA();
    insertDnaDB.insertDnaResult(['ATGCGA','CAGTGC','TTATGT','AGAAGG','CCCCTA','TCACTG'].toString(), 1);
    return {
        body: 'Hola',
        statusCode: HttpStatus.OK,
    };
};
