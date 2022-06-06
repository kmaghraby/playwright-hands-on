FROM mcr.microsoft.com/playwright:v1.22.0-focal
COPY . /e2e
WORKDIR /e2e
ENV browser=Chromium
RUN npm install
RUN npx playwright install
CMD [ "npx", "playwright", "test", "--config=playwright.config.ts", "--project=${browser}"]