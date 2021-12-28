import ConnectionDb from '../../src/config/ConnectionDb';

describe('getStatusText', () => {
    const service = new ConnectionDb('secret');
    test('should be created', () => {
        expect(service).toBeTruthy();
    });

});
