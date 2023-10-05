const {executeSQL} = require("./../configureDB/DB");

class Dashboard{

    async getUser(){ 
        const data = await executeSQL(`SELECT * FROM "All_User"`);
        return data;
    }

    async getOrphanage(){ 
        const data = await executeSQL(`SELECT * FROM "Orphanage"`);
        return data;
    }

    async getSuperEmployeeManager(){ 
        const data = await executeSQL(`SELECT * FROM "Super_Employee_Manager"`);
        return data;
    }
    async getEmployeeOrphanManager(){ 
        const data = await executeSQL(`SELECT * FROM "Employee_Orphan_Manager"`);
        return data;
    }

    async getUser(){ 
        const data = await executeSQL(`SELECT * FROM "User"`);
        return data;
    }

    async getChild(){ 
        const data = await executeSQL(`SELECT * FROM "Child"`);
        return data;
    }
    async getWorker(){ 
        const data = await executeSQL(`SELECT * FROM "Worker"`);
        return data;
    }

    async getDocument(){ 
        const data = await executeSQL(`SELECT * FROM "Document"`);
        return data;
    }
    
    async getFunding(){ 
        const data = await executeSQL(`SELECT * FROM "Funding"`);
        return data;
    }

    async getInquiry(){ 
        const data = await executeSQL(`SELECT * FROM "Inquiry"`);
        return data;
    }

    async getFosterPatent(){ 
        const data = await executeSQL(`SELECT * FROM "Foster_Patent"`);
        return data;
    }

    async getAdoption(){ 
        const data = await executeSQL(`SELECT * FROM "Adoption"`);
        return data;
    }

    async getCase(){ 
        const data = await executeSQL(`SELECT * FROM "Case"`);
        return data;
    }
    
}

module.exports = Dashboard;



