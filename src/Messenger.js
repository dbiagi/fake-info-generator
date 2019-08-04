const send = browser.tabs.sendMessage

export class Messenger {
    static send(tabId, event, data) {
        send(tabId, {event, data})
    }

    static onReceive() {

    }
}