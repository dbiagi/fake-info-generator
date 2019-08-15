import { Generator } from './Generator.js'

const FIRST_VD_MULTIPLYERS = [
    10, 9, 8, 7, 6, 5, 4, 3, 2
]
const SECOND_VD_MULTIPLYERS = [
    11, 10, 9, 8, 7, 6, 5, 4, 3, 2
]
const MASK = "###.###.###-##"

export class CpfGenerator extends Generator {
    generate(format = false) {
        let number = this.generateInitialNumber(9)
        let firstVD = this.calculateDigit(number, FIRST_VD_MULTIPLYERS)
        let secondVD = this.calculateDigit(number.concat(firstVD), SECOND_VD_MULTIPLYERS)

        number = number.concat(firstVD, secondVD)

        return format ? this.applyMask(number, MASK) : number
    }
}