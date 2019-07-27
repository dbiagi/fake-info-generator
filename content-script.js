console.log('Content script loaded')
browser.runtime.onMessage.addListener((data) => {
    console.log("Recebeu: ", data)
})