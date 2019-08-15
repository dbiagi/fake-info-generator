import { assert } from "chai"
import { CnpjGenerator } from "../src/CpfCnpj/CnpjGenerator"

describe("Test CnpjGenerator", () => {
    describe("Test generate", () => {
        let g = new CnpjGenerator
        let pattern = /[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/0001\-[0-9]{2}/
        it(`When formated must match the pattern ${pattern}`, () => {
            assert.match(g.generate(true), pattern)
        })

        it("Must contains 14 digits", () => {
            assert.lengthOf(g.generate(), 14)
        })
    })
})