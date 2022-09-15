const { Schema, model } = require("mongoose");

const mountSchema = new Schema({
    name: String,
    image: String
})

const Mount = model('Mount', mountSchema)

module.exports = Mount