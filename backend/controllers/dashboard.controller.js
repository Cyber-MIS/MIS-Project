
const Dashboard =require("../models/dashboard.model");
const dashboard = new Dashboard();
class DashboardControl{

    
    /////////////////////////// GET ///////////////////////////
    //1
    async getOrphanageDetails(method, user) {
      try {
        
        const data = await dashboard.getOrphanage();
        return data;
      } catch (err) {
        return err;
      }}

    //2
    async getChildDetails(method, user) {
    try {
        const data = await dashboard.getChild();
        return data;
    } catch (err) {
        return err;
    }}

    //3
    async getFundDetails(method, user) {
        try {
            const data = await dashboard.getFunding();
            return data;
        } catch (err) {
            return err;
    }}
    
    //4
    async getInquiryDetails(method, user) {
        try {
            const data = await dashboard.getInquiry();
            return data;
        } catch (err) {
            return err;
    }}

    //5
    async getWorkersDetails(method, user) {
        try {
            const data = await dashboard.getWorker();
            return data;
        } catch (err) {
            return err;
    }}

    //6
    async getUserDetails(method, user) {
        try {
            const data = await dashboard.getUser();
            return data;
        } catch (err) {
            return err;
    }}

    //7
	
}
    
module.exports = { DashboardControl };