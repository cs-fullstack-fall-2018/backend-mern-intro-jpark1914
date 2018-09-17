// We first need to load our mongoose data model
const Todos = require('../models/todoModel');

module.exports = function(app) {
    // Add an API endpoint with some dummy data
   app.get('/api/setupTodos', function(req, res) {
       
       // seed database
       const starterTodos = [
           {
               username: 'testuser',
               todo: 'Buy milk',
               isDone: false
           },
           {
               username: 'testuser',
               todo: 'Feed dog',
               isDone: false
           },
           {
               username: 'testuser',
               todo: 'Learn Node',
               isDone: false
           }
       ];

       // Use the mongo method create to create records fopr the test data. err will hold any errors after create
       // and results will show records created.
       Todos.create(starterTodos, function(err, results) {
           // Lets us confirm that the seed data added via mongoose without any errors
           res.send(results);
       }); 
   });
    
};