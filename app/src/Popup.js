import { CnpjGenerator } from "./CpfCnpj/CnpjGenerator.js"
import { CpfGenerator } from "./CpfCnpj/CpfGenerator.js"
import { Generator as CreditcardGenerator,  } from "./Creditcard/Generator";

const DOCUMENT_CNPJ = "document_cnpj"
const DOCUMENT_CPF = "document_cpf"

export class Popup {
    constructor() {
        this.currentDocument = null
        this.resultElement = document.querySelector("#resultInput")
        this.selDocumentType = document.querySelector("#selDocumentType")
        this.registerEvents()
        this.getState()
    }

    getState() {
        browser.storage.local.get('current_doc').then(item => {
            if (!item) {
                return
            }

            if (item.current_doc) {
                this.selDocumentType.value = item.current_doc
                this.currentDocument = item.current_doc
            }
        })
    }

    registerEvents() {
        this.selDocumentType.addEventListener("change", (e) => this.changeDocumentType(e))
        document.querySelector("#btnGenerate").addEventListener("click", () => this.generate())
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

        browser.storage.local.set({current_doc: this.currentDocument})
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

        this.copy()
    }

    generateDocument() {
        switch (this.currentDocument) {
            case DOCUMENT_CNPJ:
                return (new CnpjGenerator()).generate()

            case DOCUMENT_CPF:
                return (new CpfGenerator()).generate()

            default:
                return null
        }
    }

    generateCreditcard(flag) {
        flag = flag === 'random' ? "visa" : flag
        
        const generator = new CreditcardGenerator()
        
        return generator.generate(flag)
    }
}