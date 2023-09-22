const express = require('express');
const http = require("http");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();


const dashboardControl = require("./routes/dashboard.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/dashboard",dashboardControl);

// app.listen(process.env.PORT);

app.listen(4000);

/* const {executeSQL} = require('./configureDB/DB');
const out =async () => {

    try{
    await executeSQL(`
                    DELETE FROM "Role_map" where "Role_NO" IN (1,2,3,4);
                    INSERT INTO "Role_map" ("Role_NO", "Table") 
                    VALUES 
                        ('1', 'Admin'),
                        ('2', 'Super_Employee_Manager'),
                        ('3', 'Employee_Orphan_Manager'),
                        ('4', 'User');`);
    
    var data1 = await executeSQL(`SELECT * FROM "Role_map"`);
    console.log(data1.rows);
    }
    catch (e){
        console.log(e);
    }
};

out(); */

/* 
await executeSQL(`
                    INSERT INTO "Orphanage" ("orphanage_name","address","contact","capacity","employee_count","Email") 
                    VALUES 
                        ('Orp1','addr1','123','1000','100','abc@gmail.com'),
                        ('Orp1','addr1','123','1000','100','abc@gmail.com'),
                        ('Orp1','addr1','123','1000','100','abc@gmail.com'),
                        ('Orp1','addr1','123','1000','100','abc@gmail.com');
                `)

                 */

/* DELETE FROM "Role_map" where "Role_NO" IN (1,2,3,4);
--DELETE FROM "All_User" where "Role_NO" IN (1,2,3,4); */