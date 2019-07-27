import { ContextMenu } from "./src/Menu/ContextMenu.js"
import { CpfGenerator } from "./src/CpfCnpj/CpfGenerator.js";
import { CnpjGenerator } from "./src/CpfCnpj/CnpjGenerator.js";

let contextMenu = new ContextMenu(browser.menus)
let cpfGenerator = new CpfGenerator
let cnpjGenerator = new CnpjGenerator

contextMenu.init()
contextMenu.onGenerateCnpjClicked = (tab) => {
    browser.tabs.sendMessage(tab.id, { data: cnpjGenerator.generate() })
}
contextMenu.onGenerateCpfClicked = (tab) => {
    browser.tabs.sendMessage(tab.id, { data: cpfGenerator.generate() })
}