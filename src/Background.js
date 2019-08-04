import { ContextMenu } from "./Menu/ContextMenu.js"
import { CpfMenuAction } from "./Menu/CpfMenuAction.js";
import { CnpjMenuAction } from "./Menu/CnpjMenuAction.js";

const menuActions = [
    CpfMenuAction,
    CnpjMenuAction
]

class Background {
    static init() {
        let contextMenu = new ContextMenu(browser.menus, menuActions)        
        contextMenu.init()
    }
}

Background.init()