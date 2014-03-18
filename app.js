var express = require('express'),
    app = express(),
    post = require('./routes/post');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//middleware
//for post method
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

//for debug
app.use(express.logger('dev'));
app.use(app.router);

//routing
app.get('/', post.index);
app.get('/posts/:id([0-9]+)', post.show);
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
app.get('/posts/:id([0-9]+)/edit', post.edit);
app.put('/posts/:id([0-9]+)', post.update);
app.delete('/posts/:id([0-9]+)', post.destroy);
/*
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
app.get('/posts/:id', post.show);
app.get('/posts/:id/edit', post.edit);
app.put('/posts/:id', post.update);
app.delete('/posts/:id', post.destroy);
*/

app.listen(3000);
console.log("server starting...");
