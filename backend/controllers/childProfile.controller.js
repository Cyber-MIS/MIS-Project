const childProfileModel = require("../modle.childProfile.model")
const childProfile= new childProfileModel()

class childProfileControl{
    async addChild(method,user){
        try {

            const {child_ID,orphanage_ID,Child_Name,Age,Gender,Fostered} = method.getBody();

            await childProfile.addChild(child_ID,orphanage_ID,Child_Name,Age,Gender,Fostered,user);
          } catch (err) {
            return err;
          }
    }
    async deleteChild(method,user){
        try {
             
            const {child_ID} = method.getBody();
            await childProfile.deleteChild(child_ID,user);
          } catch (err) {
            return err;
          }
    }
    
    async updateChild(method,user){
        try {
            
            const {child_ID,orphanage_ID,Child_Name,Age,Gender,Fostered} = method.getBody(); 
            await childProfile.updateChild(child_ID,orphanage_ID,Child_Name,Age,Gender,Fostered,user);
          } catch (err) {
            return err;
          }
    }


}
module.exports = ChildProfileControl;