import FindMutantService from './find-mutant.service';

describe('FindMutantService', () => {
    const service = new FindMutantService();
    test('should determine if a human is mutant', () => {
        const isMutant = service.isMutant(['ATGCGA','CAGTGC','TTATGT','AGAAGG','CCCCTA','TCACTG']);
        expect(isMutant).toBeTruthy();
    });

});
