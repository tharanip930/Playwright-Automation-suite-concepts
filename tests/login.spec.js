import{test,expect} from'@playwright/test'

test('login Application',async({browser})=>{

    const context=await browser.newContext();
     const page= await context.newPage();

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.getByRole('button',{name:'Login'}).click();
    await page.waitForTimeout(5000);


    await page.context().storageState({path:'test-Data/Auth.Json'})
    await context.close();
    await browser.close();
})