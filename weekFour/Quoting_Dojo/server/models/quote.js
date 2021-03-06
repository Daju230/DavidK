const mongoose = require("mongoose");

//models get exported to controller

const QuoteSchema = new mongoose.Schema({
    name: { 
    	type: String, 
    	required: true, 
    	minlength: 2 
    },
    quote: { 
    	type: String, 
    	required: true, 
    	minlength: 2 },
    date: { 
    	type: Date, 
    	default: Date.now }
	}, 
	{ timestamps: true });

//we are setting this schema in our models as 'Quote'
mongoose.model('Quote', QuoteSchema);

module.exports = mongoose.model("Quote");