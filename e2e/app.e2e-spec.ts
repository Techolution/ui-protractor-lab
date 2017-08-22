import { browser, by, element, ExpectedConditions } from 'protractor';
import { UiProtractorLabHomePage } from './app.home.po';

describe('ui-protractor-lab App', () => {

  let homePage: UiProtractorLabHomePage;
  let startCount;

  beforeEach(() => {
    homePage = new UiProtractorLabHomePage();
    homePage.navigateTo();
  });


  it('should display welcome message', () => {

  });

  it('should be able to add a name', () => {
    

  });

  it('should be able to select a name', () => {


  });

  it('should load data after 3 seconds', () => {
   

  });

  it('should be able to navigate to the dashboard', () => {
   
  });

});
