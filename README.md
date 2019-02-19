# To Do List App with Mongo

A Todo list application initially created with Node.js, Express and Express routes along with jQuery's AJAX methods. 

The frontend application is designed by matching the provided design mockup files. 

![Desktop](public/images/desktop.png)

![Mobile](public/images/mobile.png)

Font Awesome used for icons.  The font to be used is Roboto from Google Fonts.  


## MVP

- Use array methods instead of for loops
- No global variables other than functions and state (front-end)
- Use a single render function to render items to the page (front-end)
- Must use AJAX to make GET, POST, PUT, and DELETE requests from the front-end

- Mongo used for persistant data storage by creating a Mongo database with Mongoose to store Todo list items.  
- Mongoose Node module used to connect with the Mongo database 
- Modularize routes by seperating Express routes into a seperate route file
- Make a GET route for getting all todo list items
- Make a POST route for adding a new todo list item
- Make a DELETE route for deleting a todo list item using the X button next to it
- Make a PUT route for updating a todo list item when it is checked or unchecked

- Deploy final application to Heroku using mLab add-on