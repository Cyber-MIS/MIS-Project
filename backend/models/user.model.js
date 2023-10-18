const { hash, compare } = require("bcryptjs");
const { executeSQL } = require("../configureDB/DB");
const uniqid = require('uniqid');
const e = require("express");

class User {
  constructor(type,ID,Name,Age,Address,Contact,Email,sessionID,lastUsedTime) {
    this.type=type;
    this.ID = ID;

    if (sessionID) {
      this.sessionID = sessionID;
    } else {
      this.sessionID = uniqid();
    }
    if (lastUsedTime) {
      this.lastUsedTime = lastUsedTime;
    } else {
      this.lastUsedTime = Number(new Date().getTime());
    }
    if (Name) {
      this.Name = Name;
    } else {
      this.Name = null;
    }

    if (Age) {
      this.Age = Age;
    } else {
      this.Age = null;
    }

    if (Address) {
      this.Address = Addres;
    } else {
      this.Address = null;
    }

    if (Contact) {
      this.Contact = Contact;
    } else {
      this.Contact = null;
    }
    if (Email) {
      this.Email = Email;
    } else {
      this.Email = null;
    }

    this.addToSessionTable(this.sessionID,this.ID);
  }

  async addToSessionTable(sessionID,ID){
    try{
    await executeSQL(`INSERT INTO "Session_Table" VALUES ($1,$2,$3)`, [
      sessionID,
      ID,
      Number(new Date().getTime()),
    ]);
    }
    catch(err){
      console.log(err)
    }

  }

  async logout(){
    try{
      await executeSQL(`DELETE FROM "Session_Table" WHERE "ID" = $1`,this.ID)
    }
    catch(err){
      console.log(err)
    }
  }

  async setLastUsedTime() {
    this.lastUsedTime = Number(new Date().getTime());
    try {
      await executeSQL(
        `UPDATE Session_table SET last_used_time = ? WHERE user_Id = ?;`,
        [Number(this.lastUsedTime), this.ID]
      );
    } catch (e) {
      console.log("Error");
    }
  }

  async changePass(CurrPassword, NewPassword) {
    var credential, hashedPass, success;

    try {
      credential = await executeSQL(
        `SELECT username,password FROM registered_users WHERE PID = ?`,
        [this.PID]
      );
      hashedPass = credential[0].password;
      success = await compare(CurrPassword, hashedPass);
    } catch (e) {
      return "Error";
    }

    if (success) {
      try {
        const hashedPassword = await hash(NewPassword, 10);
        await executeSQL(
          `UPDATE registered_users SET password = ? WHERE PID = ?`,
          [hashedPassword, this.PID]
        );

        return "Password Changed";
      } catch (e) {
        return e;
      }
    } else {
      return "Error";
    }
  }
}

  
class OrphanManagerUser extends User {
    
    constructor(type,id,Name,Age,Address,Contact,Email,Orphange_ID) {
        this.Orphange_ID = Orphange_ID;
        super(type,id,Name,Age,Address,Contact,Email);
        this.Admin_id = Admin_id;
    }

}

class SuperUser extends OrphanManagerUser {
    
    constructor(type,id,Name,Age,Address,Contact,Email) {
        this.Orphange_ID = Orphange_ID;
        super(type,id,Name,Age,Address,Contact,Email);
        this.Admin_id = Admin_id;
    }

}

class AdminUser extends SuperUser {
    
    constructor(type,id,Name,Age,Address,Contact,Email,Orphange_ID) {
        this.Orphange_ID = Orphange_ID;
        super(type,id,Name,Age,Address,Contact,Email);
        this.Admin_id = Admin_id;
    }

}

module.exports = { User , OrphanManagerUser, SuperUser, AdminUser};