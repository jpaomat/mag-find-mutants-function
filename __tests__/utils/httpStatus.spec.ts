import { httpStatus } from '../../src/utils/httpStatus';

describe('httpStatus', () => {
    test('should be created', async () => {
        const result = httpStatus.OK;
        expect(result).toEqual(200);
        // httpStatus
        // expect(service).toBeTruthy();
    });

});
