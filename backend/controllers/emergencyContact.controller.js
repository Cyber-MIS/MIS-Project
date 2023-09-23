const emergencycontactmodel = require('../models/emergencyContact.model');
const emergencycontact = new emergencycontactmodel();

class emergencycontactcontrol {
    async addEmergencyContact(method, user, contactdata) {
        try {
        await emergencycontact.addEmergencyContact(contactdata);
        } catch (error) {
        return error;
        }
    }
    
    async updateEmergencyContact(method, user, contactdata) {
        try {
        await emergencycontact.updateEmergencyContact(contactdata);
        } catch (error) {
        return error;
        }
    }
    
    async deleteEmergencyContact(method, user, EmployeeID) {
        try {
        await emergencycontact.deleteEmergencyContact(EmployeeID);
        } catch (error) {
        return error;
        }
    }
    }

module.exports = emergencycontactcontrol;