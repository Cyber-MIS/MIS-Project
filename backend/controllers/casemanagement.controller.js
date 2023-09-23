const casemanagementmodel = require("../models/casemanagement.model")
const casemanagement = new casemanagementmodel()

class casemanagementcontrol {

    async createInquiry(method,user,inqurydata){
        try {
            await casemanagement.createInquiry(inqurydata);
        } catch (error) {
            return error;
        }
    }

    async assignInquiry(mehtod,user,userID,inquiryID){
        try {
            await casemanagement.assignInquiry(userID,inquiryID);
        } catch (error) {
            return error;
        }
    }
}

module.exports = casemanagementcontrol;