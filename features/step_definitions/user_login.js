Given('access to the login page', async function () {
  await driver.sleep(2000);
  // driver.wait(Until.elementLocated(By.css('h1')));
  await driver.get('http://localhost:5173/');
  await driver.wait(Until.titleIs('Vite + React + TS'), 2000);
});

When('fill in the email field with {string}', function (string) {
  driver.findElement(By.id('email')).sendKeys(string);
});

When('fill in the password field with {string}', function (string) {
  driver.findElement(By.id('password')).sendKeys(string);
});

When('click on the {string} button', async function (string) {
  await driver.sleep(1000);
  await driver.findElement(By.id(string)).click();
});

Then('should be redirected to the dashboard page', async function () {
  var text = await driver.findElement(By.css("h1")).getText();
  text.should.equal('Dashboard');

  // OK
  // return this.driver.findElement(By.css('h1')).then(function (webElement) {
  //     webElement.getText().then(function (text) {
  //         // assert.equal(text, "Dashboard")
  //         text.should.equal('Dashboard');
  //     })
  // }, function () {
  //     return 'pending';
  // });


  // this.driver.findElement(By.css('h2')).then(function (webElement) {
  //     webElement.getText().then(function (text) {
  //         assert.equal(text, "Dashboard");
  //         // console.log(text);
  //     })
  // }, function () {
  //     assert.equal('asd', '1asd1');
  //     return 'pending'
  // });

  // var promise = await this.driver.findElements(By.css('h1')).getText();

  // promise.then(function () {
  //     console.log(promise)
  // });

  // var text = element[0].getText();
  // assert.equal(text, 'Description');

  // this.driver.findElement(By.css('h2')).then(function(webElement) {
  //     console.log('Element exists');
  //     // assert.equal(text, 'Dashboard');
  // }, function(err) {
  //     assert.equal(1, 2);
  // });

  // var textPromise = this.driver.findElement(By.css("h2")).getText();
  // textPromise
  // .then((text) => {

  // })
  // .fallback()
});

