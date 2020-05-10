//upload to github when finished

var inputs = require('../testAssets/dataArray')
var myPage = {}

module.exports = {
    beforeEach: browser => {
        myPage = browser.page.employeePage()
        myPage.navigate()
    },

    after: browser => {
        myPage.end()
    },

    'Edit employee file': browser => {
        myPage
            .edit(inputs)
    },

    'Check error handling': browser => {
        myPage
            .error()
    }


}