import { Callback } from 'aws-lambda';
import SecretsManager from '../../src/config/SecretsManager';

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
                    reject = 'mock error';
                    cb(reject, resolve)
                }
            };
        }
    }
});

describe('getStatusText', () => {
    const service = new SecretsManager('secretName')
    test('should be created', () => {
        service.getSecretValue();
        expect(service).toBeTruthy();
    });

    test(' secretManager fail2', () => {
        const resultApi = service.secretManager([{
            "ARN": "x",
            "Name": "test_creds",
            "VersionId": "x",
            "SecretBinary": "123 5",
            "VersionStages": ["x"],
            "CreatedDate": "x"
        }]);
        expect(resultApi).toBeTruthy();
    });

});
