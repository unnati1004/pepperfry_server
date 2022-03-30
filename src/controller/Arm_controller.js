const express = require("express");
const Arms_schema = require("../model/Arm");
const router = express.Router();

// router.post("", async (req, res) => {
//     try {
//         const item = await Arms_schema.find().lean().exec();
//         res.send(item);
//     }
//     catch (err) {
//         res.status(500).send({ message: err.message });
//     }
// })

router.get("", async (req, res) => {
    try {
        const item = await Arms_schema.find().lean().exec();
        res.send(item);
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
})
module.exports = router;