import FindMutantService from '../../src/services/FindMutantService';

describe('FindMutantService', () => {
    const service = new FindMutantService();
    test('should be created', () => {
        expect(service).toBeTruthy();
    });

    test('should validate that sequence in not human', async () => {
        const isMutant = await service.isMutant(['ATGCGA','CAGTGC','TTATTT','AGACGG','GCGTCA','TCACTG']);
        expect(isMutant).toBeTruthy();
    });

    test('should determine if a human is mutant', async () => {
        const isMutant = await service.isMutant(['ATGCGA','CAGTGC','TTATGT','AGAAGG','CCCCTA','TCACTG']);
        expect(isMutant).toBeTruthy();
    });

    test('should validate that sequence in not NxN', async () => {
        try {
            await service.isMutant(['ATCGA','CAGTGC','TTATGT','AGAAGG','CCCCTA','TCACTG']);
        } catch (error: any) {
            expect(error.message).toEqual('BAD_REQUEST');
        }
    });

    test('should validate that sequence dont have the correct structure', async () => {
        try {
            await service.isMutant(['ATXCGA','CAGTGC','TTATGT','AGAAGG','CCCCTA','TCACTG']);
        } catch (error: any) {
            expect(error.message).toEqual('BAD_REQUEST');
        }
    });

});
