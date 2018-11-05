const mongoose = require('mongoose');
Schema = mongoose.Schema;

var schema = new Schema({ title: String, content: String }, { versionKey: false });

module.exports = mongoose.model('post', schema);
