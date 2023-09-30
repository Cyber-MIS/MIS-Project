const {executeSQL} = require("../configureDB/DB");

class casemanagement{
    async createInquiry(Inquiry_ID,ID,Child_ID,Inquiry_Title,Inquiry_Description,Proofs,user){
        try {
            await executeSQL(`INSERT INTO "Inquiry" ("Inquiry_ID","ID","Child_ID","Inquiry_Title","Inquiry_Description","Proofs","user") 
                                        VALUES (?,?,?,?,?,?,?)`,[Inquiry_ID,ID,Child_ID,Inquiry_Title,Inquiry_Description,Proofs,user]);
        } catch (error) {
            return error;
        }
    }
     async assignInquiry(Inquiry_ID,ID,user){
        try {
            await executeSQL(`UPDATE "Assigned_Inquiries" SET "ID" = ? WHERE "Inquiry_ID" = ?`,[ID,Inquiry_ID]);
        } catch (error) {
            return error;
        }
     }
}

module.exports = casemanagement();