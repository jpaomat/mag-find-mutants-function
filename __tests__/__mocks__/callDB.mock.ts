export const mockCallBD = {
    OK: [
        [{
            voResult: 1
        }], {
            fieldCount: 0,
            affectedRows: 0,
            insertId: 0,
            serverStatus: 2,
            warningCount: 0,
            message: '',
            protocol41: true,
            changedRows: 0
        }
    ],
    NOT_FOUND: {
        message: 'INTERNAL_SERVER_ERROR',
        status: 500,
        body: {
            code: 'ER_PARSE_ERROR',
            errno: 1064,
            sqlMessage: 'You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near \'null(\'"+408a57ea-05c8-11ec-99fa-02de1b627665"\')\' at line 1',
            sqlState: '42000',
            index: 0,
            sql: 'call null(\'"+408a57ea-05c8-11ec-99fa-02de1b627665"\');'
        }
    }
};
