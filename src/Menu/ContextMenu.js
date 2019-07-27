import { MenuAction } from "./MenuAction.js";

export const GENERATE_CPF = 'generate-cpf'
export const GENERATE_CNPJ = 'generate-cnpj'

export class ContextMenu {

    constructor(menuContextApi, actions) {
        this.menuContextApi = menuContextApi
        this.actions = actions
    }

    set onGenerateCpfClicked(callback) {
        this.cpfClicked = callback
    }

    set onGenerateCnpjClicked(callback) {
        this.cnpjClicked = callback
    }

    init() {
        this.registerMenus(this.menuContextApi)
        this.registerMenuEvents(this.menuContextApi)
    }

    registerMenuEvents() {
        let self = this

        this.menuContextApi.onClicked.addListener(function (info, tab) {
            switch (info.menuItemId) {
                case GENERATE_CPF:
                    self.cpfClicked(tab)
                    break

                case GENERATE_CNPJ:
                    self.cnpjClicked(tab)
                    break
            }
        });
    }

    registerMenus() {
        this.menuContextApi.create({
            id: GENERATE_CPF,
            title: browser.i18n.getMessage("generate", "CPF"),
            contexts: ["all"]
        })

        this.menuContextApi.create({
            id: GENERATE_CNPJ,
            title: browser.i18n.getMessage("generate", "CNPJ"),
            contexts: ["all"]
        })
    }
}