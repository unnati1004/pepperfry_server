const express = require("express");
const Arms_schema = require("../model/Arm");
const router = express.Router();

router.post("", async (req, res) => {
    try {
        const item = await Arms_schema.find().lean().exec();
        res.send(item);
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const item = await Arms_schema.findById(req.params.id).lean().exec();
        console.log(req.params._id);
        res.send(item);

    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
})
router.get("", async (req, res) => {
    try {
        const item = await Arms_schema.find().lean().exec();
        res.send(item);
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
})

router.patch("/:id", async (req, res) => {
    try {
      const books = await Arms_schema.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
  
      return res.send(books);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  router.delete("/:id", async (req, res) => {
    try {
      const books = await Arms_schema.findByIdAndDelete(req.params.id);
  
      return res.send(books);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
module.exports = router;