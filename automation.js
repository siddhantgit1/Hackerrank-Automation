let pup = require("puppeteer");

let gPage;
let gBrowser;

pup
  .launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  })
  .then(function (browser) {
    gBrowser = browser;
    return browser.newPage();
  })
  .then(function (page) {
    gPage = page;

    return page.goto("https://www.google.com/");
  })
  .then(function () {
    return gPage.type("input.gLFyf.gsfi", "Cats");
  })
  .then(function () {
    return Promise.all([
      gPage.waitForNavigation(),
      gPage.click(".FPdoLc.lJ9FBc [value='Google Search']"),
    ]);
  })
  .then(function () {
    return Promise.all([
      gPage.waitForNavigation(),
      gPage.click("[data-hveid='CAEQAw']"),
    ]);
  })
  .then(function () {
    return gPage.screenshot({ path: "ss.png" });
  })
  .then(function () {
    return gBrowser.close();
  })
  .catch(function (err) {
    console.log(err);
  });
