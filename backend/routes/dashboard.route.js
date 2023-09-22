const express = require('express');
const router = express.Router();
const Method = require("../models/Method");
const { DashboardControl } = require("../controllers/dashboard.controller");

const dashboardControl = new DashboardControl();

router.get("/getOrphanageDetails", async function (req, res) {
  //const method = new Method(req, res);

  try {
    const data = await dashboardControl.getOrphanageDetails();
    console.log("Orphanage Details:", data);
    res.json(data);
  } catch (error) {
    console.error("Error fetching orphanage details:", error);
    res.status(500).json({ error: "internal Server Error" });
  }
});
module.exports = router;

