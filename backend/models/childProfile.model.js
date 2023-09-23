const {executeSQL} = require("./../configureDB/DB");

class childProfile{
    

    async addChild(child_ID,orphanage_ID,Child_Name,Age,Gender,Fostered,user){ 

        const data = await executeSQL(`INSERT INTO "Child" ("child_ID","orphanage_ID","Child_Name","Age","Gender","Fostered","user") 
                                        VALUES (?,?,?,?,?,?)`,[child_ID,orphanage_ID,Child_Name,Age,Gender,Fostered,user]);

        return data;
    }
}