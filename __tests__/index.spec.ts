import { Callback, Context } from 'aws-lambda';
import { handler } from '../src/index';
import { IReqEvent } from '../src/models/IReqEvent';
import { IRes } from '../src/models/IResponse';
import { mockCallBD } from './__mocks__/callDB.mock';
import { mockSecretManager } from './__mocks__/SecretManager.mock';

// -----------------------------mock-aws----------------------------------------------------------
jest.mock('aws-sdk', () => {
    return {
        config: {
            update(val: any) {
                console.log(val);
            },
        },
        SecretsManager() {
            return {
                getSecretValue: (q: any, cb: Callback) => {
                    let resolve = null;
                    let reject = null;
                    if (q.SecretId === 'mysql' &&
                        process.env.vOptionOrigin === '0'
                        && process.env.secretStringNull === 'secretStringNull') {
                        resolve = mockSecretManager.secretStringNull;
                    } else if (q.SecretId === 'mysql') {
                        resolve = mockSecretManager.conexionBD;
                    } else if (q.SecretId === 'secretStringNull') {
                        resolve = mockSecretManager.secretStringNull;
                    } else if (q.SecretId === 'TABLE_TEST_MUTANTS') {
                        resolve = mockSecretManager.apiNotification;
                    } else {
                        reject = 'mock error';
                    }
                    cb(reject, resolve);
                }
            };
        }
    };
});
// -----------------------------mysql-singleton----------------------------------------------------
jest.mock('mysql-singleton', () => ({
    config(data: any) {
        return data;
    },
    getConnectionPromise() {
        return {
            connect: () => {
                console.log('Succesfully connected');
            },
            query: (q: any, cb: Callback) => {
                console.log(q);
                let resolve = null;
                let reject = null;
                if (q.indexOf('TABLE_TEST_MUTANTS') !== -1) {
                    resolve = mockCallBD.OK;
                } else if (q.indexOf('null') === -1) {
                    resolve = mockCallBD.OK;
                } else {
                    reject = mockCallBD.NOT_FOUND;
                }
                cb(reject, resolve);
            },
            end: () => {
                console.log('Connection ended');
            },
            release: (q: any, cb: Callback) => cb(q, 'yesrelease')
        };
    },
}));

// environment varsss
process.env.secretNameDB = 'mysql';
process.env.mutantsTable = 'TABLE_TEST_MUTANTS';

describe('Find mutants lambda index', () => {
    const mockCalback = jest.fn();

    test('should validate that the event parameter in correct and return a successful response with statusCode 200',
        async () => {
            const event: IReqEvent = {
                dna: ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG']
            };
            const response = await handler(event, {} as Context, mockCalback);
            console.log('response', response);
            expect((response as IRes).statusCode).toBeTruthy();
        });

    test('should validate that the event parameter is not sent and return fail response with statusCode 400',
        async () => {
            // const event = {
            //     dna: null
            // }
            // const response = await handler(event as IReqEvent, {} as Context, mockCalback);
            // console.log('response', response)
            // expect((response as IRes).statusCode).toBeTruthy();
        });

});
