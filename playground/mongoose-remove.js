const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a084b7e755bf00de037cbd4';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

Todo.findByIdAndRemove('5a087d19220e9b04c4615125').then((todo) => {
    console.log('Deleted Todo:', todo);
});
