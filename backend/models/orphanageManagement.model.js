const {executeSQL} = require("./../configureDB/DB");

class orphanageManagement{
    async addOrphanage(Orphanage_ID,orphage_name,address,contact,capacity,employee_count,Email,user){
        try {
            await executeSQL(`INSERT INTO "Orphanage" ("Orphanage_ID","orphage_name","address","contact","capacity","employee_count","Email","user") 
                                        VALUES (?,?,?,?,?,?,?,?)`,[Orphanage_ID,orphage_name,address,contact,capacity,employee_count,Email,user]);
        } catch (error) {
            return error;
        }
    }

    async deleteOrphanage(Orphanage_ID,user){
        try {
            await executeSQL(`DEELTE FROM "Orphanage" WHERE "Orphanage_ID" = ?`,[Orphanage_ID]);
        } catch (error) {
            return error;
        }
    }
    async updateOrphanage(Orphanage_ID,orphage_name,address,contact,capacity,employee_count,Email){
        try {
            await executeSQL(`INSERT INTO "Orphanage"("Orphanage_ID","orphage_name","address","contact","capacity","employee_count","Email","user")
                             VALUES (?,?,?,?,?,?,?)`,[Orphanage_ID,orphage_name,address,contact,capacity,employee_count,Email]);
        } catch (error) {
            return error;
         }
        }
    async receivefunding(Fund_ID,Orphan_ID,Document_ID,Amount){
        try {
            await executeSQL(`INSERT INTO "Funding"("Fund_ID","Orphan_ID","Document_ID","Amount")
                             VALUES (?,?,?,?)`,[Fund_ID,Orphan_ID,Document_ID,Amount]);
        } catch (error) {
            return error;
        }
    }
    async allocatefunding(Fund_ID,Orphanage_ID,Amount){
        try {
            await executeSQL(`INSERT INTO "AllocatedFund"("Fund_ID","Orphanage_ID","Amount")
                             VALUES (?,?,?)`,[Fund_ID,Orphanage_ID,Amount]);
        } catch (error) {
            return error;
        }
    }  
    
}

module.exports = orphanageManagement;