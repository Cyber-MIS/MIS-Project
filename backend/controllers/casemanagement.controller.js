const casemanagementmodel = require("../models/casemanagement.model")
const casemanagement = new casemanagementmodel()

class casemanagementcontrol {

    async createInquiry(method,user){
        try {
            const {Inquiry_ID,ID,Child_ID,Inquiry_Title,Inquiry_Description,Proofs} = method.getbody();
            await casemanagement.createInquiry(Inquiry_ID,ID,Child_ID,Inquiry_Title,Inquiry_Description,Proofs,user);
        } catch (error) {
            return error;
        }
    }

    async assignInquiry(mehtod,user){
        try {
            const {Inquiry_ID,ID} =method.getbody();
            await casemanagement.assignInquiry(Inquiry_ID,ID,user);
        } catch (error) {
            return error;
        }
    }
}

module.exports = casemanagementcontrol;