import { assert } from "chai"
import { CpfGenerator } from "../src/CpfCnpj/CpfGenerator"

describe("Test CpfGenerator", () => {
    describe("Test generate", () => {
        let g = new CpfGenerator
        let pattern = /^([0-9]{3}\.?){3}\-[0-9]{2}$/
        it(`When formated must match the pattern ${pattern}`, () => {
            assert.match(g.generate(true), pattern)
        })

        it("Must contains 11 digits", () => {
            assert.lengthOf(g.generate(), 11)
        })
    })
})