Given('access to the Viacep page', async function () {
  await driver.sleep(2000);
  await driver.get('http://localhost:5173/exerc4_viacep');
  await driver.wait(Until.titleIs('Viacep'), 2000);
});

When('fill in the cep field with {string}', function (string) {
  driver.findElement(By.id('cep')).sendKeys(string);
});

When('click on the find cep data button', async function () {
  await driver.findElement(By.id('FindCepButton')).click();
  await driver.sleep(2000);
});

Then('should be see success cep searched message', async function () {
  await driver.findElement(By.id("messageCepSearched")).getText();
});