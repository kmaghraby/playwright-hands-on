# Playwright Automation Hands-on
Automation tests for saucedemo.com website.

## Installation

After unzipping the folder:

- Open it in Vscode
- In the Terminal run

```bash
npm install @playwright/test
```
```bash
npx playwright install
```

## Run the tests

You can run the tests locally using one of the commands below:
```bash
npm run tests:cross-browsers
```
or

```bash
npm run tests:e2e-chromium
```

or 

```bash
npm run tests:e2e-firefox
```
or

```bash
npm run tests:e2e-webkit
```
## Building and running Docker Image
The tests are containerized, so to build and run the docker image, please follow:

In The terminal, execute bellow commands:

```bash
docker build -t handson-task .
```

```bash
docker run --name=e2e -v `pwd`/test-reports/playwright-report:/e2e/playwright-report -e browser=Chromium handson-task 
```
You can change the browser where the tests run by changing the ```browser``` argument value to ```Firefox``` or ```Webkit```.
