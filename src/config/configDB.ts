import SecretsManager from './secretManager';
// tslint:disable-next-line
const mysqlSingleton = require('mysql-singleton');

export default class ConnectionDb {
    private hostname = '';
    private userName = '';
    private password = '';
    private database = '';
    private port = '';
    private secretName: string;

    constructor(secretName: string) {
        this.secretName = secretName;
    }

    public async getCredentialDb() {
        const objCallSecretManager = new SecretsManager(this.secretName);
        let secret = objCallSecretManager.secretManager(
            await Promise.all(
                [objCallSecretManager.getSecretValue()]
            ).then((result) => {
                return result;
            })
        );
        secret = JSON.parse(secret);
        this.hostname = secret.magHost;
        this.userName = secret.magUser;
        this.password = secret.magPassword;
        this.database = secret.magDatabase;
        this.port = secret.mag.magPort;
    }

    public getConnectionSingleton() {
        const config = {
            database: this.database,
            host: this.hostname,
            password: this.password,
            port: this.port,
            user: this.userName,
        };

        mysqlSingleton.config(config);
        return mysqlSingleton.getConnectionPromise();
    }
}
