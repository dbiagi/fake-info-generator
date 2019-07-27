export class Generator {
    generate(format = false) {
        throw "Not implemented"
    };

    calculateDigit(number, multiplyers) {
        let sum = 0
        for (let i = 0; i < number.length; i++) {
            sum += number[i] * multiplyers[i]
        }

        let rest = sum % 11

        if (rest < 2) return 0

        return 11 - rest;
    }

    generateInitialNumber(lenght) {
        let number = ""

        for (let i = 0; i < lenght; i++) {
            let randonNumber = parseInt(Math.random() * 10)

            number = number.concat((randonNumber).toString())
        }

        return number
    }

    applyMask (number, mask) {
        let i = 0
        let value = number.toString()
    
        return mask.replace(/#/g, () => value[i++])
    }
}