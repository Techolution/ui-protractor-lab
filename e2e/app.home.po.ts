import { browser, by, element } from 'protractor';

export class UiProtractorLabHomePage {
  navigateTo() {
    
  }

  getHeader() {
    return element(by.css('h1')).getText();
  }

}
