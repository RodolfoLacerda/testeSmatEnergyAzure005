const { client } = require('nightwatch-api')
const { When, Then, Given, And } = require('cucumber')

const globo = client.page.globo();

Given('acesso a pagina da globo', function () {
    return globo.with()
  });