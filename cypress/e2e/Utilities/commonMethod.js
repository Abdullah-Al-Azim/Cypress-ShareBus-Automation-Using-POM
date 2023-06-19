export function dataSend(xpath, value){
    return cy.xpath(xpath).type(value);
}

export function takeFullScreenshot(sName){
    return cy.screenshot(sName);
}

export function takeSpecificScreenshot(xpath, sName){
    return cy.xpath(xpath).screenshot(sName);
}
  
export function clickElement(xpath) {
    return cy.xpath(xpath).click();
  }

export function scrollToElementByXPath(xpath) {
    return cy.xpath(xpath).scrollIntoView();
  }