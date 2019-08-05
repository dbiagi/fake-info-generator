import { error } from "../Logger.js"
import { BaseMenuAction } from "./BaseMenuAction.js";

export class ContextMenu {

    constructor(contextMenuApi, menus) {
        this.contextMenuApi = contextMenuApi
        this.menus = menus
    }

    init() {
        this.createMenuActions()
        this.registerMenuEvents()
    }

    createMenuActions() {
        let indexedMenu = {}

        this.menus.forEach((menuClass) => {
            let instance = new menuClass

            if (!(instance instanceof BaseMenuAction)) {
                return null
            }

            this.contextMenuApi.create({
                id: menuClass.id,
                title: instance.title,
                contexts: instance.contexts,
            })

            indexedMenu[menuClass.id] = instance
        })

        this.menus = indexedMenu
    }

    registerMenuEvents() {
        let self = this

        this.contextMenuApi.onClicked.addListener(function (info, tab) {
            if (!(info.menuItemId in self.menus)) {
                return error(`Action id ${info.menuItemId} not registred`)
            }

            self.menus[info.menuItemId].doAction(tab)
        });
    }
}