const mongoose = require('mongoose');


const nameSchema = new mongoose.Schema({
	name: {
		type:String,
		required: true,
		trim: true
	},
}, {
	timestamps: true

});




module.exports = mongoose.model("Name", nameSchema);