const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a05b53f1ea49c284ba7d58f')
    // }).toArray().then((docs) => {
    //     console.log('Todos', JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('User').find({name: 'Andrew'}).count().then((count) => {
        console.log(`User count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch user', err);
    });

    db.close();
});