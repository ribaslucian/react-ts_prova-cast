module.exports = {
    default: `--publish-quiet --format-options '{"snippetInterface": "synchronous"}'`,
}

// Para rodar teste no git lab devemos executar um servidor embarcado.
// const { exec } = require('child_process');
// exec('yarn dev');

// Carregando módulos cucumber.
let cucumber = require('@cucumber/cucumber');
global.Given = cucumber.Given
global.When = cucumber.When
global.Then = cucumber.Given

// Carregando validadores.
global.assert = require('assert');
global.should = require('chai').should();
// const { expect } = require('chai')

// Carregando selenium.
let selenium = require('selenium-webdriver');
global.Builder = selenium.Builder
global.By = selenium.By
global.Until = selenium.until
const Chrome = require('selenium-webdriver/chrome');

// Configurando o WebDriver para Chrome.
const options = new Chrome.Options;
    options.addArguments('--no-sandbox'); //needed to run as root on ubuntu server
    options.addArguments('--incognito');
    options.addArguments('--disable-popup-blocking');
    options.addArguments('--disable-default-apps');
    options.addArguments('--disable-infobars');
    options.addArguments('--disable-extensions');
    options.addArguments('--disable-gpu');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');
    // options.addArguments('--headless');
    // options.headless();

// Pre-iniciando driver em ambiente global.
global.driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();