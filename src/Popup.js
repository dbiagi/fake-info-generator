import { CnpjGenerator } from "./CpfCnpj/CnpjGenerator.js"
import { CpfGenerator } from "./CpfCnpj/CpfGenerator.js"

const DOCUMENT_CNPJ = "document-cnpj"
const DOCUMENT_CPF = "document-cpf"
const CREDITCARD_RANDOM = "creditcard-random"
const CREDITCARD_VISA = "creditcard-visa"
const CREDITCARD_MASTER = "creditcard-master"

export class Popup {
    constructor() {
        this.currentDocument = null
        this.format = false
        this.resultElement = document.querySelector("#resultInput")

        this.registerEvents()
    }

    registerEvents() {
        document.querySelector("#selDocumentType").addEventListener("change", (e) => this.changeDocumentType(e))
        document.querySelector("#btnGenerate").addEventListener("click", () => this.generate())
        document.querySelector("#checkFormat").addEventListener("change", (e) => this.format = e.target.checked)
        document.querySelector("#btnCopy").addEventListener("click", _ => this.copy())
    }

    copy() {
        if (!this.resultElement.value) {
            return
        }

        this.resultElement.select();
        document.execCommand("copy");
    }

    changeDocumentType(e) {
        this.currentDocument = e.target.value
    }

    generate() {
        let generator = this.getGenerator()

        if (generator === null) {
            return
        }

        this.resultElement.value = generator.generate(this.format)
    }

    getGenerator() {
        switch (this.currentDocument) {
            case DOCUMENT_CNPJ:
                return new CnpjGenerator

            case DOCUMENT_CPF:
                return new CpfGenerator()

            default:
                return null
        }
    }
}