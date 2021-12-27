import { getStatusText } from '../../utils/get-status-text/getStatusText';
import MutantsValidationsService from '../mutants-validations/MutantsValidationsService';

export default class FindMutantService {

    private readonly mutantsValidationsSrv = new MutantsValidationsService();

    public isMutant(dnaSequence: string[]) {
        return new Promise<any>((resolve, reject) => {
            Promise.all([this.validateRowsAndColumns(dnaSequence), this.validateOblique(dnaSequence)])
                .then((result) => {
                    if (result[0] || result[1]) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }).catch((reason) => {
                    reject(reason);
                });
        });
    }

    private validateRowsAndColumns(dnaSequence: string[]) {
        const numRows = dnaSequence.length;
        return new Promise<boolean>((resolve, reject) => {
            this.validateOblique(dnaSequence);
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
                    return;
                }
            }
            resolve(false);
        });
    }

    private validateOblique(dnaSequence: string[]) {
        const numRows = dnaSequence.length;
        const numColumns = dnaSequence[0].length;
        return new Promise<boolean>((resolve, reject) => {
            for (let index = 3; index <= numRows + numColumns - 5; index++) {
                let RightObliqueSequence = '';
                let leftObliqueSequence = '';
                for (let x = 0; x <= index && (x < numRows) && index - x < numColumns; x++) {
                    RightObliqueSequence = RightObliqueSequence.concat((dnaSequence[x].split(''))[index - x]);
                    leftObliqueSequence = leftObliqueSequence.concat((dnaSequence[x].split('').reverse())[index - x]);
                }
                for (let y = numColumns - 1; y >= 0 && index - y >= 0 && index - y < numRows && index - y > 0; y--) {
                    RightObliqueSequence = RightObliqueSequence.concat((dnaSequence[index - y].split(''))[y]);
                    leftObliqueSequence = leftObliqueSequence.concat((dnaSequence[index - y].split('').reverse())[y]);
                }
                if (!this.mutantsValidationsSrv.structureCorrect(RightObliqueSequence)
                    || !this.mutantsValidationsSrv.structureCorrect(leftObliqueSequence)
                ) {
                    reject({
                        body: 'The dna sequence does not have the correct structure',
                        message: getStatusText(400),
                    });
                }
                this.mutantsValidationsSrv.setNumMutantSequence(RightObliqueSequence);
                this.mutantsValidationsSrv.setNumMutantSequence(leftObliqueSequence);
                const numMutantSequence = this.mutantsValidationsSrv.getNumMutantSequence();
                if (numMutantSequence > 1) {
                    resolve(true);
                    return;
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
