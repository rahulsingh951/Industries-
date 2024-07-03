const express = require('express')
const router = express.Router()
const IndustryControl = require("../Controller/industryControl")

router.post("/createIndustry",IndustryControl.getIndustry);
router.get("/getIndustryData",IndustryControl.getAllUser)

module.exports = router
