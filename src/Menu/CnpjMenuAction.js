import { BaseMenuAction } from "./BaseMenuAction.js";
import { Messenger } from "../Messenger.js";
import { CnpjGenerator } from "../CpfCnpj/CnpjGenerator.js"
import { lang } from "../helpers.js";

const ID = "generate-cnpj"

let cnpjGenerator = new CnpjGenerator

export class CnpjMenuAction extends BaseMenuAction {
    constructor() {
        super(lang("generate", "cnpj"), ["all"])
    }

    static get id() {
        return ID
    }
    
    doAction(tab, params) {
        params = params || {}

        Messenger.send(tab.id, ID, cnpjGenerator.generate(params.format || false))
    }
}