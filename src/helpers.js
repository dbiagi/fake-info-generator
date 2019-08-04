/**
 * @param {string} id
 * @param {Object} params
 * @returns {String} 
 */
export function lang (id, params) {
    return browser.i18n.getMessage(id, params)
}