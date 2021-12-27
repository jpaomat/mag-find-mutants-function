export default class MutantsValidationsService {

    private countMutantSequence = 0;

    public structureCorrect(dnaSequence: string) {
        return dnaSequence.match(/^[ATCG]+$/);
    }

    public setNumMutantSequence(sequenceElement: string) {
        let countEqualElement = 1;
        (sequenceElement.split('')).forEach((element, index) => {
            if (element === sequenceElement[index + 1]) {
                countEqualElement++;
            } else {
                countEqualElement = 1;
            }
            if (countEqualElement >= 4) {
                this.countMutantSequence++;
            }
        });
    }

    public getNumMutantSequence(): number {
        return this.countMutantSequence;
    }
}
