// REGISTER TEST

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false, slowMo: 100});
  console.log('browser okey')
  const page = await browser.newPage();
  console.log('page okey')

  await page.goto('http://localhost:3002/register');
  console.log('site web ok');

  await page.focus('.Registration > #email');
  await page.keyboard.type('Puppeteer@hotmail.com'); 
  console.log('mail ok');

  await page.focus('.Registration > #password');  
  await page.keyboard.type('Puppeteer123'); 
  console.log('password ok');

 await page.click('.Registration > #btnRegister');   
 console.log('register ok');

 await page.screenshot({ path: 'register.png', fullPage: true });


  await browser.close();
})();


// LOGIN TEST

// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch({headless:false, slowMo: 100});
//   console.log('browser okey')
//   const page = await browser.newPage();
//   console.log('page okey')

//   await page.goto('http://localhost:3002/login');
//   console.log('site web ok');

//   await page.focus('.Login > #email');
//   await page.keyboard.type('Puppeteer@hotmail.com'); 
//   console.log('mail ok');

//   await page.focus('.Login > #password');  
//   await page.keyboard.type('Puppeteer123'); 
//   console.log('password ok');

//  await page.click('.Login > #btnLogin');   
//  console.log('Login ok');

//  await page.screenshot({ path: 'Login.png', fullPage: true });


//   await browser.close();
// })();