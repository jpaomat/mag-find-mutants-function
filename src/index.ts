import { Context, Handler } from 'aws-lambda';
import { getStatusText } from './config/getStatusText';
import { httpStatus } from './config/httpStatus';
import { templateResponse } from './config/templateResponse';
import InsertVerificationDNA from './dbsource/InsertVerificationDNA';
import { IReqEvent } from './models/IReqEvent';
import { IRes } from './models/IResponse';
import FindMutantService from './services/find-mutant/FindMutantService';

export const handler: Handler<IReqEvent, IRes> = async (event: IReqEvent, context: Context): Promise<IRes> => {
    console.log('Log 1 (CL 8-Index) -> Input data to mag-find-mutants-function lambda: ', event);
    let response;
    const dnaSequence = event.dna;
    let errorBody;
    try {
        const mutantsSrv = new FindMutantService();
        const insertDnaDB = new InsertVerificationDNA();
        errorBody = 'The dna parameter is required';
        if (!dnaSequence) {
            throw new Error(getStatusText(400));
        }
        const isMutant = await mutantsSrv.isMutant(dnaSequence);
        const resultInsertDna = await insertDnaDB.insertDnaResult(dnaSequence, isMutant);
        console.log('Log 5 (CL 14-Index) -> Ressult DB when inserting dna sequence: ', resultInsertDna);
        response = templateResponse(httpStatus.OK, 'OK', { mutant: isMutant });
    } catch (error: any) {
        console.log('Log 6 (CL 26-Index) -> Failed response in mag-find-mutants-function lambda: ', error);
        if (httpStatus[error.message]) {
            response = templateResponse(httpStatus[error.message], error.message, errorBody);
        } else {
            response = templateResponse(500, getStatusText(500) as string, error);
        }
    }
    console.log('Log 7 (CL 30-Index) -> Response to mag-find-mutants-function lambda: ', response);
    return response;
};

