const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

const server = app.listen(8000);
const io = require('socket.io')(server);

app.get('/', function(req, res) {
    
  res.render('index');
  
  });



io.on('connection', function (socket) {

  socket.on('got_a_new_user', function(data){
    let message = "<li class = 'connected'>";
    message += `${data.name} has connected.`;
    message += "</li>";
    socket.broadcast.emit('connection', {message:message});
  });

  // listen for new_message and add data.name and data.message
   socket.on('new_message', function(data) {
    let message = "<li class = 'message'>";
    message += `<span class="name">${data.name}</span>: ${data.message}`;
    message += "</li>";
    io.emit('display_message', {message: message});
  });
   //<li class = 'message'> <span class="name">data.name</span> : data.message </li>

   

   //when user disconnects display who disconnected 
   socket.on('disconnect', function(data){
    let message = "<li class= 'connected'>";
    message += `${data.name} has disconnected.`;
    message += "</li>";
    socket.broadcast.emit('connection', {message: message});
   })

  
  

})