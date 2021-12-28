export const mockSecretManager = {
    conexionBD: {
        ARN: 'x',
        Name: 'test_creds',
        VersionId: 'x',
        SecretString: '{"veUser":"test","vePassword":"test","engine":"mysql","veHost":"test","vePort":"0000","dbClusterIdentifier":"test","veDatabase":"test"}',
        VersionStages: [
            'x'
        ],
        CreatedDate: 'x'
    },
    apiNotification: {
        ARN: 'x',
        Name: 'test_creds',
        VersionId: 'x',
        SecretString: '{"API_KEY_TVS_SMS":"test","API_URL_TVS_NOTIFICATIONS_API":"https://api.labdigitalbdbtvsqa.com/notification-management/V1/Utilities/notification/"}',
        VersionStages: [
            'x'
        ],
        CreatedDate: 'x'
    },
    secretStringNull: {
        ARN: 'x',
        Name: 'test_creds',
        VersionId: 'x',
        SecretBinary: '123 92 34 118 101 85 115 101 114 92 34 58 92 34 116 101 115 116 92 34 44 92 34 118 101 80 97 115 115 119 111 114 100 92 34 58 92 34 116 101 115 116 92 34 44 92 34 101 110 103 105 110 101 92 34 58 92 34 109 121 115 113 108 92 34 44 92 34 118 101 72 111 115 116 92 34 58 92 34 116 101 115 116 92 34 44 92 34 118 101 80 111 114 116 92 34 58 92 34 48 48 48 48 92 34 44 92 34 100 98 67 108 117 115 116 101 114 73 100 101 110 116 105 102 105 101 114 92 34 58 92 34 116 101 115 116 92 34 44 92 34 118 101 68 97 116 97 98 97 115 101 92 34 58 92 34 116 101 115 116 92 34 125',
        VersionStages: [
            'x'
        ],
        CreatedDate: 'x'
    },
    apiRecaptcha: {
        SecretString: '{"value_key":"6LcPH_gkgggglglhg"}'
    }
};
