import { Context, Handler } from 'aws-lambda';
import { HttpStatus } from './config/httpStatus';
import InsertVerificationDNA from './dbsource/InsertVerificationDNA';
import { IReqEvent } from './models/IReqEvent';
import { IRes } from './models/IResponse';

export const handler: Handler<IReqEvent, IRes> = async (event: IReqEvent, context: Context): Promise<IRes> => {
    console.log('Index 8 - Input to mag-find-mutants-function lambda: ', event);
    let dnaData = event.dna;
    const insertDnaDB = new InsertVerificationDNA();
    const dnaSegment = `'${dnaData}'`;
    const resultInsert = await insertDnaDB.insertDnaResult(dnaSegment, 1);
    console.log('resultInsert', resultInsert);
    return {
        body: 'Hola',
        statusCode: HttpStatus.OK,
    };
};
