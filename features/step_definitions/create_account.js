Given('access to the account page', async function () {
  await driver.sleep(2000);
  await driver.get('http://localhost:5173/exerc5_crud');
  await driver.wait(Until.titleIs('CRUD Conta'), 2000);
});

When('fill in the name field with {string}', function (string) {
  driver.findElement(By.id('nome')).sendKeys(string);
});

When('fill in the description field with {string}', function (string) {
  driver.findElement(By.id('descricao')).sendKeys(string);
});

When('click on the {string} button', async function (string) {
  await driver.sleep(1000);
  await driver.findElement(By.id(string)).click();
  await driver.sleep(2000);
});

Then('should be see success message', async function () {
  await driver.findElement(By.id("messageContaCreated")).getText();
});