var mongoose = require('mongoose');

var User = mongoose.model('User',{
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports = {User};

// var user = new User({
//     email: 'test@email.com'
// });
//
// user.save().then((doc) => {
//     console.log('Save user', JSON.stringify(doc, undefined, 2));
// }, (err) => {
//     console.log('Unable to save user', err);
// });