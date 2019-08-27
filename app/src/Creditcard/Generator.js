const MASK = "#### #### #### ####"

export class Generator {

    generate(flag, format = false) {
        const type = this.getType(flag)

        let number = type.startsWith[Math.floor((Math.random() * type.startsWith.length))].toString()

        number += this.generateRandomNumbers(type.length - number.length - 1)

        number += this.calculateLastDigit(number)

        return format ? this.applyMask(number, MASK) : number
    }

    applyMask(number, mask) {
        let i = 0

        return mask.replace(/#/g, () => {
            if (i < number.length) {
                return number[i++]
            }

            return 0
        })
    }

    getType(flag) {
        flag = flag || "visa"

        const type = TYPES[flag]

        if (!type) {
            throw `Flag ${flag} isn't supported`
        }

        return type
    }

    generateRandomNumbers(length) {
        let number = ""

        for (let i = 0; i < length; i++) {
            number += Math.floor(Math.random() * 10)
        }

        return number
    }

    calculateLastDigit(number) {
        let transform = (n, i) => {
            n = parseInt(n)

            // Multiply odd numbers by 2
            if ((i + 1) % 2 !== 0) {
                n *= 2
            }

            // If multiplied number are over 9, subtract 9
            let r = n > 9 ? n - 9 : n

            return r
        }

        let reversedNumbers = number.split('').reverse().map(transform)

        let sum = 0

        reversedNumbers.forEach(n => sum += parseInt(n))

        return sum % 10
    }
}

export const TYPES = {
    "american_express": {
        name: "American Express",
        startsWith: [34, 37],
        length: 15
    },
    "dinersclub_carte_blanche": {
        name: "Diners Club - Carte Blanche",
        startsWith: [300, 301, 302, 303, 304, 305],
        length: 14
    },
    "dinersclub_international": {
        name: "Diners Club - International",
        startsWith: [36],
        length: 14
    },
    "dinersclub_usa_canada": {
        name: "Diners Club - USA & Canada",
        startsWith: [54],
        length: 16
    },
    "discover": {
        name: "Discover",
        startsWith: [6011, 644, 645, 646, 647, 648, 649, 65],
        length: 16
    },
    "instapayment": {
        name: "InstaPayment",
        startsWith: [637, 638, 639],
        length: 16
    },
    "jcb": {
        name: "JCB",
        startsWith: [3528, 3589],
        length: 16
    },
    "maestro": {
        name: "Maestro",
        startsWith: [5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763],
        length: 16
    },
    "mastercard": {
        name: "MasterCard",
        startsWith: [51, 52, 53, 54, 55],
        length: 16
    },
    "visa": {
        name: "Visa",
        startsWith: [4],
        length: 16
    },
    "visa_electron": {
        name: "Visa Electron",
        startsWith: [4026, 417500, 4508, 4844, 4913, 4917],
        length: 16
    }
}