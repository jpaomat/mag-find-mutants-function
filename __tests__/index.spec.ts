import { Callback, Context } from 'aws-lambda';
import { handler } from '../src/index'
import { IReqEvent } from '../src/models/IReqEvent';
import { IRes } from '../src/models/IResponse';
const mockSecretManager = require('./__mocks__/SecretManager.mock.json');
const mockCallBD = require('./__mocks__/SecretManager.mock.json');

// -----------------------------mock-aws----------------------------------------------------------
jest.mock('aws-sdk', () => {
    return {
        config: {
            update(val: any) {
                console.log(val)
            },
        },
        SecretsManager: function () {
            return {
                getSecretValue: (q: any, cb: Callback) => {
                    let resolve = null;
                    let reject = null;
                    if (q.SecretId === "mysql" && process.env.vOptionOrigin === '0' && process.env.secretStringNull === 'secretStringNull') {
                        resolve = mockSecretManager.secretStringNull;
                    } else if (q.SecretId === "mysql") {
                        resolve = mockSecretManager.conexionBD;
                    } else if (q.SecretId === 'secretStringNull') {
                        resolve = mockSecretManager.secretStringNull;
                    } else if (q.SecretId === 'TABLE_TEST_MUTANTS') {
                        resolve = mockSecretManager.apiNotification;
                    } else {
                        reject = 'mock error';
                    };
                    cb(reject, resolve)
                }
            };
        }
    }
});
// ---------------------------mock--mysql-singleton----------------------------------------------------
jest.mock('mysql-singleton', () => ({
    config: function (data: any) {
        return data
    },
    getConnectionPromise: function () {
        return {
            connect: () => {
                console.log('Succesfully connected');
            },
            query: (q: any, cb: Callback) => {
                console.log(q)
                let resolve = null;
                let reject = null;
                if (q.indexOf('TABLE_TEST_MUTANTS') !== -1) {
                    resolve = mockCallBD.OK;
                } else {
                    reject = 'mock error';
                };
                cb(reject, resolve)
            },
            end: () => {
                console.log('Connection ended');
            },
            release: (q: any, cb: Callback) => cb(q, 'yesrelease')
        }
    },
}));

// environment varsss
process.env.secretNameDB = 'mysql';
process.env.mutantsTable = 'TABLE_TEST_MUTANTS';


describe('Find mutants lambda index', () => {
    const mockCalback = jest.fn();

    test('should validate that the event parameter in correct and return a successful response with statusCode 200', async () => {
        const event: IReqEvent = {
            dna: ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG']
        }
        const response = await handler(event, {} as Context, mockCalback);
        expect((response as IRes).statusCode).toEqual(200);
    });

    // test('should return error when call database.table and that not exist', async () => {
    //     const event: IReqEvent = {
    //         dna: ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG']
    //     }
    //     process.env.mutantsTable = 'NOT_EXIST';
    //     const response = await handler(event, {} as Context, mockCalback);
    //     expect((response as IRes).statusCode).toEqual(500);
    // });

    // test('should validate that the event parameter is not sent and return fail response with statusCode 400', async () => {
    //     const event = {
    //         dna: null
    //     }
    //     const response = await handler(event, {} as Context, mockCalback);
    //     expect((response as IRes).statusCode).toEqual(400);
    // });

});
