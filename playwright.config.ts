import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout:60000,
    retries:1,
    testDir:'tests/e2e',
    fullyParallel: true,
    reporter: [['html', {open:'never'}]],
    use:{
        headless:true,
        viewport: {width:1280, height:1024},
        actionTimeout:10000,
        ignoreHTTPSErrors:true,
        screenshot:'only-on-failure',
        trace:'retain-on-failure',
        baseURL:'https://www.saucedemo.com' 
    },
    projects: [
        {
            name: "Chromium",
            use:{ browserName: "chromium" }
        },
        {
            name:"Firefox",
            use:{ browserName:"firefox" }
        },
        {
            name: "Webkit",
            use:{browserName:"webkit"}
        }
    ],
}

export default config