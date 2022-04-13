import { getNeighbours } from "../util/neighbours";
import { getRandomMatrix } from "../util/random";

export default class LifeMatrix {
    constructor(private _numbers: number[][]) {

    }
    get numbers() {
        return this._numbers
    }
    nextStep(): number[][] {
        //TODO write an implementation of the life game algorithm
        //reminder: firstly create copy for updating cells based on the previous matrix
        const copy: number[][] = this._numbers;
        for (let i = 0; i < copy.length; i++) {
            for (let j = 0; j < copy[i].length; j++) {
                const neighbours = getNeighbours(copy, i, j);
                const sumOfNeighbours = neighbours.reduce((acc, cur) => acc + cur, 0);
                copy[i][j] && (sumOfNeighbours < 2 || sumOfNeighbours > 3) ?
                this._numbers[i][j] = 0 : this._numbers[i][j] = 1
            }
        }
        return this._numbers;
    }
}