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

    async updateOrphanage(method,user){
        try {
            const {Orphanage_ID,orphage_name,address,contact,capacity,employee_count,Email} = method.getbody();
            await orphanagemanagement.updateOrphanage(Orphanage_ID,orphage_name,address,contact,capacity,employee_count,Email);
        } catch (error) {
            return error;
        }
    }
    
    async deleteOrphanage(method,user){
        try {
            const {Orphanage_ID}=method.getbody();
            await orphanagemanagement.deleteOrphanage(Orphanage_ID);
        } catch (error) {
            return error;
        }
    }

    async receivefunding(mwthod,user){
        try {
            const {Fund_ID,Orphan_ID,Document_ID,Amount}=method.getbody();
            await orphanagemanagement.receivefunding(Fund_ID,Orphan_ID,Document_ID,Amount);
        } catch (error) {
            return error;
        }
    }
    async allocatefunding(method,user){
        try {
            const {Fund_ID,Orphanage_ID,Amount}=method.getbody();
            await orphanagemanagement.allocatefunding(Fund_ID,Orphanage_ID,Amount);
        } catch (error) {
            return error;
        }
    }
}

module.exports = orphanageManagementcontrol;