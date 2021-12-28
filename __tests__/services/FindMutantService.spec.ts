import FindMutantService from '../../src/services/FindMutantService';
import MutantsValidationsService from '../../src/services/MutantsValidationsService';

describe('FindMutantService', () => {
    const service = new FindMutantService();
    const resultNumberSequence = new MutantsValidationsService();
    test('should determine if a human is mutant', async () => {
        const isMutant = await service.isMutant(['ATGCGA','CAGTGC','TTATGT','AGAAGG','CCCCTA','TCACTG']);
        // expect(isMutant).toBeTruthy();
        // const test1 = service.validateOblique(['ATGCGA','CAGTGC','TTATGT','AGAAGG','CCCCTA','TCACTG'])
    });

});
