var acesso = {
    with: function () {
        return this
            .navigate()
            .waitForElementVisible('@busca', 10000)
            

    }
}
module.exports = {
    url: '/login',
    commands: [acesso],
    elements: {
        busca: '#busca-campo'
    

    }
}