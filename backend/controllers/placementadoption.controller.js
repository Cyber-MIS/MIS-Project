const placementadoptionmodel= require("../models/placementadoption.model")
const placementadoption =new placementadoptionmodel();

class placementadoptioncontroller{
    async addFosterparent(method,user,parentdata){
        try {
            await placementadoption.addFosterparent(parentdata);
        } catch (error) {
            return error;
        }
    }

    async updateFosterparent(method,user,parentdata){
        try {
            await placementadoption.updateFosterparent(parentdata);
        } catch (error) {
            return error;
        }
    }
    
    async deleteFosterparent(method,user,parentID){
        try {
            await placementadoption.deleteForsterparent(parentID);
        } catch (error) {
            return error;
        }
    }

    
}