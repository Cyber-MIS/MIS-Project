const {hash,compare} = require("bcryptjs");
const {executeSQL} = require("../configureDB/DB");
const {sign, verify} = require("jsonwebtoken");
const Method = require("../models/Method");
const { parse } = require('querystring');
const ACCESS_TOKEN_SECRECT = "CyberProject";

var Users = new Map();

async function register(username,password,age,address,contact,email) {
 
    try {
    const data = await executeSQL(
      `SELECT "Username" FROM "All_User WHERE UserName = ?`,
      [username]
    );

    if (data[0]) {
      return "Error : Username already exists";
    } else {
      const hashedPassword = await hash(password, 10);
      await executeSQL(
        `INSERT INTO "All_User" ("Username","Role_NO") VALUES (?,?,?) `,
        [username,"4"]
      );

      const ID = await executeSQL(
        `SELECT "ID" FROM "All_User" WHERE "Username" =?`,
        [Email]
      ); 

      await executeSQL(
        `INSERT INTO "User" ("ID","Name","password","Age","Address","contact","Email") VALUES (?,?,?,?,?,?,?) `,
        [ID,username,password,age,address,contact,email],
      );

      console.log(username + " successfuly added");
      
      //same as login code
      return login(method);
    }
  } catch (e) {
    console.log(e);
    return "Error";
  }
}

async function login(username,password) {
  try {
    const credential = await executeSQL(
      `SELECT "ID", "Username", "password", "Name","Role_NO" FROM "User" JOIN "All_User" on "User.ID" = "All_User.ID" WHERE "All_User.Username" =?`,
      [username]
    );
    if (!credential[0]) return "Error : Invalid Email or Password";

    const status = await compare(password, credential[0].password);
    
    const {ID,Username,Name,Role_NO} = credential[0];

    if (status) {
      console.log("Password Matched");
      var user = userFactory(ID, UserName, "User", Role_NO);
    
      const token = getAccessToken({
        Role_NO: Role_NO,
        ID: ID
      });

    console.log(UserName + " Successfully Logged In !!!");
    method.res.header("token", token);

    return { token: token, user: user };
    } else {
      console.log(e);
      return "Error";
    }
  } catch (e) {
    console.log(e);
    return "Error";
  }
}


const getAccessToken = (data)=>{
  token = sign(data, ACCESS_TOKEN_SECRECT,{algorithm: "HS256",expiresIn:"500m"});
  return token;
};

module.exports = {login,register};