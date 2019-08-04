export class BaseMenuAction {
    constructor(title = "", contexts = []) {
        this.title = title
        this.contexts = contexts
    }

    static get id() {
        throw "Not implemented"
    }

    setTitle(value) {
        this.title = value
        
        return this
    }

    setContexts(value) {
        this.contexts = value
        
        return this
    }

    doAction() {
        throw "Not implemented"
    }
}