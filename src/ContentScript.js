function copy(value) {
    let el = document.createElement('textarea')
    el.textContent = value
    el.isContentEditable = true
    el.select()
    document.execCommand("copy")
}

function pasteData(data) {
    document.execCommand("paste")
}

class ContentScript {
    static init() {
        console.log('Content script loaded')
        browser.runtime.onMessage.addListener((data) => {
            console.log("Recebeu: ", data)

            copy(data)
            paste()
        })
    }
}

ContentScript.init()

