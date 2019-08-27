import { CnpjGenerator } from "./CpfCnpj/CnpjGenerator.js"
import { CpfGenerator } from "./CpfCnpj/CpfGenerator.js"
import { Generator as CreditcardGenerator,  } from "./Creditcard/Generator";

const DOCUMENT_CNPJ = "document_cnpj"
const DOCUMENT_CPF = "document_cpf"

export class Popup {
    constructor() {
        this.currentDocument = null
        this.format = false
        this.resultElement = document.querySelector("#resultInput")
        this.selDocumentType = document.querySelector("#selDocumentType")
        this.registerEvents()
    }

    registerEvents() {
        this.selDocumentType.addEventListener("change", (e) => this.changeDocumentType(e))
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
        if (!this.currentDocument) {
            return
        }

        let result = null

        if (/^document_/.test(this.currentDocument)) {
            result = this.generateDocument()
        }
        
        if (/^creditcard_/.test(this.currentDocument)) {
            const flag = this.currentDocument.replace("creditcard_", "")

            result = this.generateCreditcard(flag)
        }

        this.resultElement.value = result
    }

    generateDocument() {
        switch (this.currentDocument) {
            case DOCUMENT_CNPJ:
                return (new CnpjGenerator()).generate(this.format)

            case DOCUMENT_CPF:
                return (new CpfGenerator()).generate(this.format)

            default:
                return null
        }
    }

    generateCreditcard(flag, format) {
        const generator = new CreditcardGenerator()
        
        return generator.generate(flag, this.format)
    }
}