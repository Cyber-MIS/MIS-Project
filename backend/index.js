var express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const {executeSQL} = require('./configureDB/DB')

// var apiController = require("./API/API");

// executeSQL("INSERT INTO All_User(Username, Role_No) VALUES ('Admin', 1)");

// var data1 = executeSQL("SELECT * FROM All_User");
// console.log(data1);
console.log(executeSQL("SELECT * FROM All_user"));

