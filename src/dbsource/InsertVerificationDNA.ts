import ConnectionDb from '../config/ConnectionDb';

export default class InsertVerificationDNA {
    public async insertDnaResult(dnaSequence: string[], isMutant: number) {
        const clsConnectionDB = new ConnectionDb('/rds_db/mysql');
        const table = 'mutants_general.DNA_VERIFICATION_MUTANTS';
        await clsConnectionDB.getCredentialDb();
        const query = `INSERT INTO ${table} (DNA, MUTANT) VALUES ('${dnaSequence}', ${isMutant});`;
        const connection = await clsConnectionDB.getConnectionSingleton();
        return this.callQuery(connection, query);

    }

    private callQuery(connection: any, queryCustom: string) {
        return new Promise((resolve, reject) => {
            connection.query(queryCustom, (err: any, result: any) => {
                console.log('Log 2 (CL 17-InsertVerificationDNA) -> Query to execute: ', queryCustom);
                console.log('Log 3 (CL 18-InsertVerificationDNA) -> Result to execute query: ', result);
                if (err) {
                    console.log('Log 4 (CL 20-InsertVerificationDNA) -> Error to execute query', err);
                    return reject(err);
                } else {
                    return resolve(result);
                }
            });
            connection.release();
        });
    }
}
