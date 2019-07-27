import { Generator } from "./Generator.js";

const FIRST_VD_MULTIPLYERS = [
    5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2
]
const SECOND_VD_MULTIPLYERS = [
    6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2
]
const MASK = "##.###.###/####-##"

export class CnpjGenerator extends Generator {
    generate(format = false) {
        let number = this.generateInitialNumber(8).concat("0001")
        let firstDigit = this.calculateDigit(number, FIRST_VD_MULTIPLYERS)
        let secondDigit = this.calculateDigit(number.concat(firstDigit), SECOND_VD_MULTIPLYERS)

        number = number.concat(firstDigit, secondDigit)

        return format ? this.applyMask(number, MASK) : number
    }
}