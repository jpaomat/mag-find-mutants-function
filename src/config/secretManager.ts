import AWS from 'aws-sdk';
import debugLib from 'debug';

const debug = debugLib('secretManager');
export default class SecretsManager {

    public region: string;
    public secretName: string;
    public decodeBinarySecret = '';
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
            const buff = Buffer.from(secretValue.SecretBinary);
            this.decodeBinarySecret = buff.toString('ascii');
            return this.decodeBinarySecret;
        }
    }
}
