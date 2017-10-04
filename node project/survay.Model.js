

var mongoose = require('mongoose'),
schema = mongoose.Schema;
var survayModel =new schema({
        "name" : String,
        "questions": []
});
    
module.exports = mongoose.model('survayModel',survayModel);