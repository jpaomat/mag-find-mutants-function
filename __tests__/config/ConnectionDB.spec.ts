import ConnectionDb from '../../src/config/ConnectionDb';

describe('getStatusText', () => {
    test('should be created', async () => {
        const service = new ConnectionDb('secret');
        expect(service).toBeTruthy();
    });

});
