const express = require("express");
const router = express.Router();

router.get('/',  (req, res)=>{
    res.send("Sever successfully runs");
})

module.exports = router;