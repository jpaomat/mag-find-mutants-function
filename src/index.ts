import { Context, Handler } from 'aws-lambda';
import { HttpStatus } from './config/httpStatus';
import InsertVerificationDNA from './dbsource/InsertVerificationDNA';
import { IReqEvent } from './models/IReqEvent';
import { IRes } from './models/IResponse';

export const handler: Handler<IReqEvent, IRes> = async (event: IReqEvent, context: Context): Promise<IRes> => {
    let dnaData = event.dna;
    const insertDnaDB = new InsertVerificationDNA();
    const dnaSegment = JSON.stringify(dnaData);
    const resultInsert = await insertDnaDB.insertDnaResult(dnaSegment, 1);
    console.log('resultInsert', resultInsert);
    return {
        body: 'Hola',
        statusCode: HttpStatus.OK,
    };
};
