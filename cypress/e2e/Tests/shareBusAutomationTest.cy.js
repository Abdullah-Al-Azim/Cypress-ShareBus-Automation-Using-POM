import open_Url from "../Base/openUrl"
import shareBusAutomation from "../Pages/shareBusAutomation"
import userMenu from "../Pages/userMenu";
import membership from "../Pages/memberShip";

describe("Sign In Test", ()=>{
    const basePageUrl = new open_Url();
    const loginPageDetails = new shareBusAutomation();
    const userDetails = new userMenu();
    const memberDetails = new membership();


    it("share bus automation test", ()=>{
        basePageUrl.openUrl();
        loginPageDetails.signInProccess();
        userDetails.userMenu();
        memberDetails.membership();
    })
})