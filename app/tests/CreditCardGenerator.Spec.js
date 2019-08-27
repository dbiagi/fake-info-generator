import { assert } from "chai";
import { Generator as CreditcardGenerator } from "../src/Creditcard/Generator";

describe("Test CreditCard/Generator", () => {
    describe("Test generate", () => {
        let g = new CreditcardGenerator();
        const pattern = /^([0-9]{4}\s?){4}$/

        it(`When formated should match the pattern ${pattern}`, () => {
            assert.match(g.generate("visa", true), pattern)
        })

        it("Should generate", () => {
            let result = g.generate("mastercard");

            console.log(`Result: ${result}`)

            assert.isNotNull(result)
        })
    })
})