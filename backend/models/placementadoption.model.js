const {executeSQL}=require("./../configureDB/DB");

class placementadoption{
    async addFosterparent(Foster_Parent_ID,Foster_Parent_Name,Age,Gender,Address,Contact_Number,Income_Level){
        try {
            await executeSQL(`INSERT INTO "Foster_Parent"("Foster_Parent_ID","Foster_Parent_Name","Age","Gender","Address","Contact_Number","Income_Level")
            VALUES(?,?,?,?,?,?,?)`,[Foster_Parent_ID,Foster_Parent_Name,Age,Gender,Address,Contact_Number,Income_Level]);
        } catch (error) {
            return error;
        }
    }

    async updateFosterparent(Foster_Parent_ID,Foster_Parent_Name,Age,Gender,Address,Contact_Number,Income_Level,user){
        try {
            await executeSQL(`INSERT INTO "Foster_Parent"("Foster_Parent_ID","Foster_Parent_Name","Age","Gender","Address","Contact_Number","Income_Level")
            VALUES(?,?,?,?,?,?,?)`,[Foster_Parent_ID,Foster_Parent_Name,Age,Gender,Address,Contact_Number,Income_Level]);
        } catch (error) {
            return error;
         }
    }
    async deleteFosterparent(Foster_Parent_ID,user){
        try {
            await executeSQL(`DEELTE FROM "Foster_Parent" WHERE "Foster_Parent_ID" = ?`,[Foster_Parent_ID]);
        } catch (error) {
            return error;
        }
    }
}