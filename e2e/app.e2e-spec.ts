import { browser, by, element, ExpectedConditions } from 'protractor';
import { UiProtractorLabHomePage } from './app.home.po';

describe('ui-protractor-lab App', () => {

  let homePage: UiProtractorLabHomePage;
  let startCount;

  beforeEach(() => {
    homePage = new UiProtractorLabHomePage();
    homePage.navigateTo();

    homePage.getNamesList().count().then(function(items){
      startCount = items;
    });

  });


  it('should display welcome message', () => {
    expect(homePage.getHeader()).toEqual('Protractor Test on Ang 2 App!');
  });

  it('should be able to add a name', () => {
    let namesList; 
    
    homePage.getAddInput().sendKeys('Bob');
    homePage.getAddButton().click();
    namesList = homePage.getNamesList();

    expect(namesList.count()).toBe(startCount + 1);
    expect(namesList.last().getText()).toEqual('Bob');

  });

  it('should be able to select a name', () => {

    let input = homePage.getAddInput();
    let addBtn = homePage.getAddButton();
    let namesList;

    input.sendKeys('Bob');
    addBtn.click();
    input.sendKeys('Rhonda');
    addBtn.click();

    namesList = homePage.getNamesList();
    expect(namesList.get(0).getAttribute('class')).toEqual('');
    expect(namesList.get(1).getAttribute('class')).toEqual('');

    namesList.get(0).click();
    expect(namesList.get(0).getAttribute('class')).toEqual('selected');
    expect(namesList.get(1).getAttribute('class')).toEqual('');

    namesList.get(1).click();
    expect(namesList.get(0).getAttribute('class')).toEqual('');
    expect(namesList.get(1).getAttribute('class')).toEqual('selected');

  });

  it('should load data after 3 seconds', () => {
    let dataLoaded = element(by.css('#dataLoaded'));

    expect(dataLoaded.getText()).toEqual('');
    
    homePage.getAsynBtn().click();

    browser.wait(ExpectedConditions.textToBePresentInElement(dataLoaded, 'data-loaded'), 1000);

  });

  it('should be able to navigate to the dashboard', () => {
    browser.get('/dashboard');
    expect(element(by.css('h3')).getText()).toEqual('I am the dashboard!');
  });

});
