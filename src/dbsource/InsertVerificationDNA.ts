import ConnectionDb from '../config/ConnectionDb';

export default class InsertVerificationDNA {
    public async insertDnaResult(dnaSegment: string, isMutant: number) {
        const clsConnectionDB = new ConnectionDb('/rds_db/mysql');
        const table = 'mutants_general.DNA_VERIFICATION_MUTANTS';
        await clsConnectionDB.getCredentialDb();
        const query = `INSERT INTO ${table} (DNA, MUTANT) VALUES (${dnaSegment}, ${isMutant});`;
        const connection = await clsConnectionDB.getConnectionSingleton();
        return this.callQuery(connection, query);

    }

    private callQuery(connection: any, queryCustom: string) {
        return new Promise((resolve, reject) => {
            connection.query(queryCustom, (err: any, result: any) => {
                console.log('callQuery 17', queryCustom);
                console.log('callQuery 18', result);
                if (err) {
                    console.log('Error to execute query', err);
                    return reject(err);
                } else {
                    return resolve(result);
                }
            });
            connection.release();
        });
    }
}
