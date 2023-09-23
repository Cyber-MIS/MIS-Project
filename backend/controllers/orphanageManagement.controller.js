const orphanageManagementModel = require("../models/orphanagemanagement.model")
const orphanagemanagement= new orphanageManagementModel();

class orphanagemanagementcontrol{
    async addOrphanage(method,user){
        try {
            const {Orphanage_ID,orphage_name,address,contact,capacity,employee_count,Email} = method.getbody();
            await orphanagemanagement.addOrphanage(Orphanage_ID,orphage_name,address,contact,capacity,employee_count,Email);
        } catch (error) {
            return error;
        }
    }

    async updateOrphanage(method,user,orphanagedata){
        try {
            await orphanagemanagement.updateOrphanage(orphanagedata);
        } catch (error) {
            return error;
        }
    }
    
    async deleteOrphanage(method,user,orphanageID){
        try {
            await orphanagemanagement.deleteOrphanage(orphanageID);
        } catch (error) {
            return error;
        }
    }

    async receivefunding(user,method,fund){
        try {
            await orphanagemanagement.receivefunding(fund);
        } catch (error) {
            return error;
        }
    }
    async allocatefunding(user,method,fund){
        try {
            await orphanagemanagement.allocatefunding(fund);
        } catch (error) {
            return error;
        }
    }
}

module.exports = orphanageManagementcontrol;