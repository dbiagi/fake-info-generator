import { error } from "../Logger.js"
import { BaseMenuAction } from "./BaseMenuAction.js";

export class ContextMenu {

    constructor(contextMenuApi, menus) {
        this.contextMenuApi = contextMenuApi
        this.menus = menus
    }

    init() {
        this.instanciateMenus()
        this.registerMenus()
        this.registerMenuEvents()
    }

    instanciateMenus() {
        let instances = this.menus.map((menuClass) => {
            let instance = new menuClass

            return instance instanceof BaseMenuAction ? instance : null
        })

        this.menus = instances.filter((val) => val)
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

    registerMenus() {
        let create = this.contextMenuApi.create

        this.menus.forEach((menu) => {
            create({
                id: menu.id,
                title: menu.title,
                contexts: menu.contexts,
            })
        })
    }
}