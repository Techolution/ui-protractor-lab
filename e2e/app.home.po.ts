import { browser, by, element } from 'protractor';

export class UiProtractorLabHomePage {
  navigateTo() {
    return browser.get('/');
  }

  getHeader() {
    return element(by.css('h1')).getText();
  }

  getAddButton() {
    return element(by.css('.btn'));
  }

  getAddInput() {
    return element(by.tagName('input'));
  }

  getAsynBtn() {
    return element(by.css('#asyncBtn'));
  }

  getNamesList() {
    return element.all(by.tagName('p'));
  }

}
