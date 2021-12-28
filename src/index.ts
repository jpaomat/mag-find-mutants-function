import { Context, Handler } from 'aws-lambda';
import InsertVerificationDNA from './dbsource/InsertVerificationDNA';
import { IReqEvent } from './models/IReqEvent';
import { IRes } from './models/IResponse';
import FindMutantService from './services/FindMutantService';
import MutantsValidationsService from './services/MutantsValidationsService';
import { getStatusText } from './utils/getStatusText';
import { httpStatus } from './utils/httpStatus';
import { templateResponse } from './utils/templateResponse';

export const handler: Handler<IReqEvent, IRes> = async (event: IReqEvent, context: Context): Promise<IRes> => {
    console.log('Log 1 (CL 12-Index) -> Input data to mag-find-mutants-function lambda: ', event);
    let response;
    const dnaSequence = event.dna;
    let errorBody = null;
    try {
        const mutantsSrv = new FindMutantService();
        const insertDnaDB = new InsertVerificationDNA();

        if (!dnaSequence) {
            errorBody = 'The dna parameter is required';
            throw new Error(getStatusText(400));
        }
        const resultMutant = await mutantsSrv.isMutant(dnaSequence);
        console.log('Log 2 (CL 25-Index) -> Number of sequences: ', resultMutant.numMutantSequence);
        const resultInsertDna = await insertDnaDB.insertDnaResult(dnaSequence, resultMutant.isMutant);
        console.log('Log 5 (CL 27-Index) -> Ressult DB when inserting dna sequence: ', resultInsertDna);
        response = templateResponse(httpStatus.OK, 'OK', { mutant: resultMutant.isMutant });
    } catch (error: any) {
        console.log('Log 6 (CL 30-Index) -> Failed response in mag-find-mutants-function lambda: ', error);
        if (httpStatus[error.message]) {
            errorBody = errorBody ? errorBody : error.body;
            response = templateResponse(httpStatus[error.message], error.message, errorBody);
        } else {
            response = templateResponse(500, getStatusText(500) as string, error.body);
        }
    }
    console.log('Log 7 (CL 38-Index) -> Response to mag-find-mutants-function lambda: ', response);
    return response;
};
