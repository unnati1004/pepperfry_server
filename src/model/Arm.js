const mongoose = require("mongoose");

const Arms_schema = mongoose.Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true },
    made_by:{ type: Number, require: true },
    image: { type: String, require: true },
    image1:{ type: String, require: true },
    image2:{ type: String, require: true },
    image3:{ type: String, require: true },
})

module.exports = mongoose.model("Arms_chair", Arms_schema);