const {hash,compare} = require("bcryptjs");
const {executeSQL} = require("../configureDB/DB");
const {sign, verify} = require("jsonwebtoken");
const Method = require("../models/Method");
const { parse } = require('querystring');
const ACCESS_TOKEN_SECRECT = "CyberProject";
const {User} = require("./user.model")

var Users = new Map();  


class AuthModel{

  async register(name,username,password,age,address,contact,email) {

      console.log(name,username,password,age,address,contact,email )
  
      try {
      const data = await executeSQL(
        `SELECT "Username" FROM "All_User" WHERE "Username" = $1`,
        [username]
      );

      console.log(data)
      
      if (data[0]) {
        return "Error : Username already exists";
      } else {
        const hashedPassword = await hash(password, 10);
        await executeSQL(
          `INSERT INTO "All_User" ("Username","Role_NO") VALUES ($1,$2) `,
          [username,"4"]
        );
        console.log("username added to all users")
        const ID = (await executeSQL(
          `SELECT "ID" FROM "All_User" WHERE "Username" = $1`,
          [username]  
        )).rows[0].ID; 
        console.log(ID)
        await executeSQL(
          `INSERT INTO "User" ("ID","Name","Password","Age","Address","Contact","Email") VALUES ($1,$2,$3,$4,$5,$6,$7) `,
          [ID,name,hashedPassword,age,address,contact,email],
        );

        console.log(username + " successfuly added") ;
        
        //same as login code
        return await this.login(username,password);
      }
    } catch (e) {
      console.log(e);
      return "Error";
    }
  }

  async login(username,password) {
    try {

      const credential = await executeSQL(
        `SELECT "User"."ID", "Username", "Password", "Name","Role_NO" FROM "User" JOIN "All_User" on "User"."ID" = "All_User"."ID" WHERE "All_User"."Username" = $1`,
        [username]
      );

      // console.log(credential)

      if (!credential.rows[0]) return "Error : Invalid Email or Password";
      
      const status = await compare(password, credential.rows[0].Password);
      
      const {ID,Username,Name,Age,Address,Contact,Email,Role_NO} = credential.rows[0];

      if (status) {
        console.log("Password Matched");
        var user = userFactory("User",ID,Name,Age,Address,Contact,Email,null,null);

        Users.set(ID,user)
      
        const token = getAccessToken({
          Role_NO: Role_NO,
          ID: ID,
          SessionID: user.sessionID // need to implement user
        });

      console.log(Username + " Successfully Logged In !!!");
      // console.log(token,user)
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

  async logout(user){
    try{
      user.logout();
      Users.remove(user.ID)
    }
    catch(err){
      console.log(err)
    }
  }

}

const getAccessToken = (data)=>{
  token = sign(data, ACCESS_TOKEN_SECRECT,{algorithm: "HS256",expiresIn:"500m"});
  return token;
};


function userFactory(type,id,Name,Age,Contact,Address,Email,Orphange_ID,sessionID,lastUsedTime){
  if (type=="Admin"){
    var user = new AdminUser(type,id);
  }
  else if (type=="Super_Employee_Manager"){
    var user = new SuperUser(type,id,Name,Age,Address,Contact,Email);
  }
  else if (type=="Employee_Orphan_Manager"){
    var user = new OrphanManagerUser(type,id,Name,Age,Address,Contact,Email,Orphange_ID);
  }
  else if (type=="User"){
    var user = new User(type,id,Name,Age,Address,Contact,Email,sessionID,lastUsedTime);
  }
  else{
    console.log("invalid user type");
  }
  
  return(user);
}


async function extractUser(req,res,next){

try {

  const method = new Method(req,res);

  const token = method.getToken();

  if (token){
  const { Role_NO,ID,SessionID } = verify(token, ACCESS_TOKEN_SECRECT);

  if (SessionID) {
    var user = Users.get(ID);
    req.user = user;

    res.header("authorization", UpdateSession(Role_NO,ID,SessionID,user));
  }
  }
  next();
}
catch(err){
  console.log(err);
  console.log("Invaild token"); //when token expires
  next()
}
}

async function UpdateSession(Role_NO,ID,SessionID,user){
  await user.setLastUsedTime();
  const token = getAccessToken({Role_NO:user.Role_NO,ID:user.ID,SessionID:user.sessionID});
  return token;
}


module.exports = {AuthModel,extractUser};