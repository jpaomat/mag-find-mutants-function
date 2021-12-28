import FindMutantService from '../../src/services/FindMutantService';

describe('FindMutantService', () => {
    const service = new FindMutantService();
    test('should be created', async () => {
        expect(service).toBeTruthy();
    });
    test('should determine if a human is mutant', async () => {
        const isMutant = await service.isMutant(['ATGCGA','CAGTGC','TTATGT','AGAAGG','CCCCTA','TCACTG']);
        expect(isMutant).toBeTruthy();
    });

});
