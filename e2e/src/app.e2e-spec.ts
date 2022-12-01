import { AppPage } from './app.po';
// test Prueba
import { browser, element, by } from 'protractor';

describe('tabs', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('the Tab One tab is displayed by default', () => {
    expect(element(by.css('.tab-selected ion-label')).getText()).toContain(
      'Tab One'
    );
  });

  it('the user can navigate to the Tab Two tab', async () => {
    await element(by.css('[tab=tab2]')).click();

    browser.driver.sleep(500);
    expect(element(by.css('.tab-selected ion-label')).getText()).toContain(
      'Tab Two'
    );
  });
});

// Test Default
describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should be blank', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
  });
});
