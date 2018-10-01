// Require all models
const db = require('../models');

// LOAD DATA: Linking our routes to a series of "data" sources
const taskList = require('../data/todo_list.js');

// ROUTING
module.exports = function (app) {

  // GET Request
  app.get('/api/todo_list', function (req, res) {
    res.json(taskList);
  });

  // POST Request: Responds with success: true or false if successful
  app.post('/api/todo_list', function (req, res) {
    console.log(req.body, "this should be the new task");
    
    taskList.push(req.body);  // Add a new todo
    // Send back a confirmation the POST was successfully processed to end the response
    res.json(taskList);
  });

  // GET Request
  app.get('/api/todo_list/:index', function (req, res) {
    res.json(taskList[req.params.index]);
  });

  // PUT Request: Responds with success: true or false if successful
  app.put('/api/todo_list', function (req, res) {
    for (let key in req.body) {
      if (!sampleTodo.hasOwnProperty(key)) {
        return res.json({ success: false });
      }
    }
    
    // Ensure boolean values for item status
    req.body.todoStatus = req.body.todoStatus === 'true';
    taskList.splice(req.params.index, 1, req.body);
    res.json({ success: true });
  });

  // DELETE Request: Responds with success: true or false if successfu
  app.post('/api/delete/todo_list', function (req, res) {
    console.log(req.body);
    taskList.splice(req.body.index, 1);
    res.json(taskList);
  });
};