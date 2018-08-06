const mongoose = require('mongoose')

const shortenSchema = new mongoose.Schema({
  shortname: { type: String, required: true },
  longname: { type: String, required: true },
  author: { type: String },
  team: { type: String }
})

export const Shorten = mongoose.model('shorten', shortenSchema)
