import { BaseMenuAction } from './BaseMenuAction.js'
import { lang } from "../helpers.js"
import { Messenger } from '../Messenger.js';
import { CpfGenerator } from "../CpfCnpj/CpfGenerator.js"

const ID = "generate-cpf"

let cpfGenerator = new CpfGenerator

export class CpfMenuAction extends BaseMenuAction {
    constructor() {
        super(lang("generate", "cpf"), ["all"])
    }

    static get id() {
        return ID
    }

    doAction(tab) {
        Messenger.send(tab.id, ID, cpfGenerator.generate())
    }
}