/* eslint-disable max-len */
/// <reference types='cypress' />
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';

const homePage = new HomeAndCataloguePageObject();
const category = 'Laptops';
const product = 'Sony vaio i7';

describe('', () => {
  before(() => {
    homePage.visit();
  });

  it('', () => {
    homePage.clickOnCategory(category);
    homePage.clickOnProduct(product);
    homePage.clickByClass('.col-sm-12 > .btn');
    homePage.assertAllert('Product added');
    homePage.clickByClass('#cartur');
    homePage.mustHave('.success > :nth-child(2)', product);
    homePage.clickByClass('.col-lg-1 > .btn');
    homePage.inputFilling('#name', 'User');
    homePage.inputFilling('#country', 'Spain');
    homePage.inputFilling('#city', 'Barcelona');
    homePage.inputFilling('#card', 1234567887654321);
    homePage.inputFilling('#month', 'Aug');
    homePage.inputFilling('#year', 2030);
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
      .click();
    homePage.assertAllert('Thank you for your purchase!');
    cy.get('.confirm').click();
  });
});
