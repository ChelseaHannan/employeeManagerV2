var myCommands = {
    edit: function (data) {
        this
            .click('@em1')
            .clearValue('@name')
            .setValue('@name', data.name)
            .clearValue('@phone')
            .setValue('@phone', data.phone)
            .clearValue('@email')
            .setValue('@email', data.email)
            .clearValue('@title')
            .setValue('@title', data.title)
            .click('@saveBtn')
            .verify.valueContains('@name', data.name)
            .verify.valueContains('@phone', data.phone)
            .verify.valueContains('@title', data.title)
            .expect.element('@errorCard').to.not.be.present;
            
            return this
    },

    error: function () {
        this
            .click('@em1')
            .clearValue('@name')
            .setValue('@name', 'a really long name that is more than thirty characters')
        this
            .click('@saveBtn')
            .expect.element('@errorCard').to.be.present;
            
            return this
    },


}

module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [myCommands],
    elements: {
        em1: 'li[name="employee50"]',

        name: 'input[name="nameEntry"]',

        phone: 'input[name="phoneEntry"]',

        email: 'input[name="emailEntry"]',

        title: 'input[name="titleEntry"]',

        saveBtn: 'button[name="save"]',

        errorCard: 'div.errorCard',

        search: 'input[name="searchBox"]'
    }
}