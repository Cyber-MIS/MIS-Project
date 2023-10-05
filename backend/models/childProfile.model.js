const {executeSQL} = require("./../configureDB/DB");

class childProfile{
    

    async addChild(child_ID,orphanage_ID,Child_Name,Age,Gender,Fostered,user){ 
        try {
            await executeSQL(`INSERT INTO "Child" ("child_ID","orphanage_ID","Child_Name","Age","Gender","Fostered","user") 
                                        VALUES (?,?,?,?,?,?)`,[child_ID,orphanage_ID,Child_Name,Age,Gender,Fostered]);
        } catch (error) {
            return error;
        }
    }

    async deleteChild(child_ID,user){
        try {
            await executeSQL(`DEELTE FROM "Child" WHERE "child_ID" = ?`,[child_ID]);
        } catch (error) {
            return error;
        }
    }
    async updateChild(child_ID,orphanage_ID,Child_Name,Age,Gender,Fostered){
        try {
            await executeSQL(`INSERT INTO "Child"("child_ID","orphanage_ID","Child_Name","Age","Gender","Fostered","user")
                             VALUES (?,?,?,?,?,?)`,[child_ID,orphanage_ID,Child_Name,Age,Gender,Fostered]);
        } catch (error) {
            return error;
         }
   }
}
module.exports = childProfile();