const express = require("express");  
const router = express.Router();  

router.use(require("./api_dataList"));

module.exports = router;