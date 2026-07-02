const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({

name: {
type: String,//numra,boolean,array.objekte//
required: true
},

surname: {
type: String,//numra,boolean,array.objekte//
required: true
},

email: {
type: String,
required: true
},

comment: {
type: String,
required: true
}

});
const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
