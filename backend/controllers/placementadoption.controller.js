const placementadoptionmodel= require("../models/placementadoption.model")
const placementadoption =new placementadoptionmodel();

class placementadoptioncontroller{
    async addFosterparent(method,user){
        try {
            const {Foster_Parent_ID,Foster_Parent_Name,Age,Gender,Address,Contact_Number,Income_Level} =method.getbody();
            await placementadoption.addFosterparent(Foster_Parent_ID,Foster_Parent_Name,Age,Gender,Address,Contact_Number,Income_Level);
        } catch (error) {
            return error;
        }
    }
    async updateFosterparent(method,user){
        try {
            const {Foster_Parent_ID,Foster_Parent_Name,Age,Gender,Address,Contact_Number,Income_Level} =method.getbody();
            await placementadoption.updateFosterparent(Foster_Parent_ID,Foster_Parent_Name,Age,Gender,Address,Contact_Number,Income_Level);
        } catch (error) {
            return error;
        }
    }
    
    async deleteFosterparent(method,user){
        try {
            const {Foster_Parent_ID} =method.getbody();
            await placementadoption.deleteForsterparent(Foster_Parent_ID);
        } catch (error) {
            return error;
        }
    }

    
}