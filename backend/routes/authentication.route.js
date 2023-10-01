const express = require('express');
const router = express.Router();
const Method = require("../models/Method");
const { AuthControl } = require("../controllers/Auth.controller");

const authControl= new authControl();

router.post("/register", async function (req, res) {
  
  try {
    const method = new Method(req, res);

    const data = await authControl.register(method);
    
    res.json(data);

  } catch (error) {
    console.error("Error fetching orphanage details:", error);
    res.status(500).json({ error: "internal Server Error" });
  }
});

router.post("/login", async function (req, res) {
  
    try {
      const method = new Method(req, res);
  
      const data = await authControl.login(method);
      
      res.json(data);
  
    } catch (error) {
      console.error("Login Error:", error);
      res.status(500).json({ error: "internal Server Error" });
    }
});

router.post("/logout", async function (req, res) {
  try {
    const method = new Method(req, res);

    const data = await authControl.logout(method);

    res.json(data);

  } catch (error) {
    console.error("Logout Error:", error);
    res.status(500).json({ error: "internal Server Error" });
  }
});

module.exports = router;

