const childProfileModel = require("../modle.childProfile.model")
const childProfile= new childProfileModel()

class childProfileControl{
    async addChild(method,user,childdata){
        try {
        
            await childProfile.addChild(childdata);
          } catch (err) {
            return err;
          }
    }
    async deleteChild(method,user,childdata){
        try {
        
            await childProfile.deleteChild(childdata);
          } catch (err) {
            return err;
          }
    }
    
    async updateChild(method,user,childdata){
        try {
        
            await childProfile.updateChild(childdata);
          } catch (err) {
            return err;
          }
    }


}
module.exports = ChildProfileControl;