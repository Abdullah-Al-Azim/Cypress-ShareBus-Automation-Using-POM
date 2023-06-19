class shareBusAutomation{

    signInProccess(){
        const jsonExtend = require("./loginPageLocatorAndData.json");
        const commonMethod = require("../Utilities/commonMethod");
        commonMethod.clickElement(jsonExtend.signInBtn);
        commonMethod.clickElement(jsonExtend.cookies);
        cy.wait(1000);

        commonMethod.scrollToElementByXPath(jsonExtend.label);
        cy.get('.navbar').invoke('css', 'position', 'relative');
        cy.wait(2000)
        // commonMethod.clickElement(jsonExtend.userxpath);
        commonMethod.dataSend(jsonExtend.userxpath, jsonExtend.username);
        cy.wait(1000);
        commonMethod.dataSend(jsonExtend.passxpath, jsonExtend.password);
        cy.wait(1000);
        commonMethod.clickElement(jsonExtend.signUp);

        cy.wait(4000);

    }


} export default shareBusAutomation;