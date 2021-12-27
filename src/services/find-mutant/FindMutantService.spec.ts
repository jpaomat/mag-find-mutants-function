import FindMutantService from './FindMutantService';

describe('FindMutantService', () => {
    const service = new FindMutantService();
    test('should determine if a human is mutant', async () => {
        const isMutant = await service.isMutant(['ATGCGA','CAGTGC','TTATGT','AGAAGG','CCCCTA','TCACTG']);
        // expect(isMutant).toBeTruthy();
        // const test1 = service.validateOblique(['ATGCGA','CAGTGC','TTATGT','AGAAGG','CCCCTA','TCACTG'])
    });

});
