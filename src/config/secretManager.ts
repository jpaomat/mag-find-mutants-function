import AWS from 'aws-sdk';
import { debug } from 'console';
export default class SecretsManager {

    public region: string;
    public secretName: string;
    public client: any;

    constructor(secretName: string) {
        this.region = 'us-east-1';
        this.secretName = secretName;
        this.client = new AWS.SecretsManager({
            region: this.region
        });
    }

    public getSecretValue() {
        return new Promise((resolve, reject) => {
            this.client.getSecretValue({ SecretId: this.secretName }, (err: any, data: any) => {
                if (err) {
                    if (err.code === 'DecryptionFailureException') {
                        // Secrets Manager can't decrypt the protected secret text using the provided KMS key.
                        // Deal with the exception here, and/or rethrow at your discretion.
                        throw err;
                    } else if (err.code === 'InternalServiceErrorException') {
                        // An error occurred on the server side.
                        // Deal with the exception here, and/or rethrow at your discretion.
                        throw err;
                    } else if (err.code === 'InvalidParameterException') {
                        // You provided an invalid value for a parameter.
                        // Deal with the exception here, and/or rethrow at your discretion.
                        throw err;
                    } else if (err.code === 'InvalidRequestException') {
                        // You provided a parameter value that is not valid for the current state of the resource.
                        // Deal with the exception here, and/or rethrow at your discretion.
                        throw err;
                    } else if (err.code === 'ResourceNotFoundException') {
                        // We can't find the resource that you asked for.
                        // Deal with the exception here, and/or rethrow at your discretion.
                        throw err;
                    }
                    debug('Failed to get secret: %j', err);
                } else {
                    debug('Secret OK');
                    resolve(data);
                }
            });
        });
    }

    public secretManager(secretValue: any) {
        secretValue = secretValue[0];
        if ('SecretString' in secretValue) {
            return secretValue.SecretString;
        } else {
            const buff = Buffer.from(secretValue.SecretBinary, 'base64');
            return buff.toString('ascii');
        }
    }
}
