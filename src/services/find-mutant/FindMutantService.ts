import { getStatusText } from '../../config/getStatusText';
import MutantsValidationsService from '../mutants-validations/MutantsValidationsService';

export default class FindMutantService {

    private readonly mutantsValidationsSrv = new MutantsValidationsService();

    public isMutant(dnaSequence: string[]) {
        const numRows = dnaSequence.length;
        return new Promise<boolean>((resolve, reject) => {
            for (const [index, rowSequence] of dnaSequence.entries()) {
                const numColumns = rowSequence.length;
                const NxN = numRows === numColumns;
                if (!NxN || !this.mutantsValidationsSrv.structureCorrect(rowSequence)) {
                    const messageStructure = 'The dna sequence does not have the correct structure';
                    reject({
                        body: !NxN ? 'The dna sequence should be NxN' : messageStructure,
                        message: getStatusText(400),
                    });
                }
                this.validateElementsRows(rowSequence);
                this.validateElementsColumns(dnaSequence, index);
                const numMutantSequence = this.mutantsValidationsSrv.getNumMutantSequence();
                if (numMutantSequence > 1) {
                    resolve(true);
                    break;
                }
            }
            resolve(false);
        });
    }

    private validateElementsRows(rowSequence: string) {
        this.mutantsValidationsSrv.setNumMutantSequence(rowSequence);
    }

    private validateElementsColumns(dnaSequence: string[], index: number) {
        const col = dnaSequence.map((rowSequence) => ((rowSequence.split(''))[index]));
        const colSequence = (col.toString()).replace(/,/g, '');
        this.mutantsValidationsSrv.setNumMutantSequence(colSequence);
    }
}
