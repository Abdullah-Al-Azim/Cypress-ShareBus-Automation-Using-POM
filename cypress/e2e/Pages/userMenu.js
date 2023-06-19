class userMenu{

    userMenu(){
        const jsonExtend = require("./loginPageLocatorAndData.json");
        const commonMethod = require("../Utilities/commonMethod");

        commonMethod.clickElement(jsonExtend.selectUser);
        commonMethod.clickElement(jsonExtend.sharelead);
        cy.wait(1000)
        commonMethod.clickElement(jsonExtend.continue);
        cy.wait(4000)
        commonMethod.clickElement(jsonExtend.setUpAs);
        cy.wait(2000)
        commonMethod.dataSend(jsonExtend.fromTrain, jsonExtend.destination);
        cy.wait(2000)

        commonMethod.clickElement(jsonExtend.departurePlace) 
        cy.wait(2000)
        commonMethod.dataSend(jsonExtend.toTrain, jsonExtend.startPlace)
        cy.wait(2000)

        commonMethod.clickElement(jsonExtend.departurePlace) 
        cy.wait(2000)
        commonMethod.clickElement(jsonExtend.departureDateXpath);
        commonMethod.clickElement(jsonExtend.departureDate);
        cy.wait(2000)
        commonMethod.clickElement(jsonExtend.departureTimeXpath);
        commonMethod.clickElement(jsonExtend.randomThree);
        cy.wait(2000)
        commonMethod.clickElement(jsonExtend.switchBtn);
        cy.wait(2000)
        commonMethod.clickElement(jsonExtend.formContinue);
    }
} export default userMenu;