var express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const {executeSQL} = require('./configureDB/DB');

// var apiController = require("./API/API");

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

out();

/* DELETE FROM "Role_map" where "Role_NO" IN (1,2,3,4);
--DELETE FROM "All_User" where "Role_NO" IN (1,2,3,4); */