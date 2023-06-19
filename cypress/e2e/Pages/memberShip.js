class membership{

    membership(){
        const jsonExtend = require("./loginPageLocatorAndData.json");
        const commonMethod = require("../Utilities/commonMethod");

        commonMethod.clickElement(jsonExtend.membership);
        cy.wait(2000);
        commonMethod.clickElement(jsonExtend.clubSelectionX);
        cy.wait(2000);
        commonMethod.clickElement(jsonExtend.ntClub);
        cy.wait(2000);
        commonMethod.clickElement(jsonExtend.secContinue);
        cy.wait(2000);
        commonMethod.clickElement(jsonExtend.needticket);
        cy.wait(2000);
        commonMethod.clickElement(jsonExtend.activeTicket);
        cy.wait(2000);
        commonMethod.clickElement(jsonExtend.createShareBus);
        cy.wait(2000);
        commonMethod.clickElement(jsonExtend.publish);
        cy.wait(2000);
        commonMethod.dataSend(jsonExtend.tripNameX, jsonExtend.trpnameV)
        cy.wait(2000);
        commonMethod.clickElement(jsonExtend.sports);
        cy.wait(2000);
        commonMethod.dataSend(jsonExtend.textAreaX, jsonExtend.textAreaV);
        cy.wait(2000);
        commonMethod.dataSend(jsonExtend.eventX, jsonExtend.eventV);
        cy.wait(2000);

        const fileImage = "kaka.jpg";
        cy.xpath(jsonExtend.fileUpload).attachFile(fileImage);
        cy.wait(2000);
        commonMethod.clickElement(jsonExtend.reveiwBtn);
        cy.wait(2000);
        commonMethod.clickElement(jsonExtend.finalPublish);
        cy.wait(2000);
        commonMethod.clickElement(jsonExtend.myBuses);
        cy.wait(2000);
        cy.xpath(jsonExtend.newTrip).invoke('css', 'border', '5px solid red');
        cy.wait(2000);
    }

} export default membership;