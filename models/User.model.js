var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var minlength = [3,'The value of the `{PATH}`(`{VALUE}`) is shorter than then minimum allowed length ({minlength})']


var UserSchema = new Schema({
	username:{
		type:String,
		minlength:minlength,
		required: true
	},
	email:{
		type:String,
		required: true,
		unique: true
	},
	password:String
})

module.exports = mongoose.model('User',UserSchema);
