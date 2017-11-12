const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a084b7e755bf00de037cbd4';

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Todo not found');
//     }
//
//     console.log('Todo by id: ', todo);
// }).catch((err) => console.log(err));


User.findById('5a06e37169f9f4222cf7a3ca').then((user) => {
    if(!user){
        return console.log('User not found');
    }

    console.log('User by id: ', JSON.stringify(user, undefined, 2));
}, (e) => console.log(e)).catch((err) => console.log(err));