var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));


//html form get, post예제
app.get('/form', function(req, res){
    res.render('form');
});

app.get('/form_receiver', function(req, res){
    var title = req.query.title;
    var description = req.query.description;
    res.send(title+','+description);
});

app.post('/form_receiver', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    res.send(title+','+description);
});
//post 예제

//QueryString 을 Express에서 다루는 방법
app.get('/topic/:id', function(req, res){
    var topics = [
        'Javascript is....',
        'Nodejs is....',
        'Express is....'
    ];
    var output = `
        <a href="/topic/0">Javascript</a><br>
        <a href="/topic/1">Nodejs</a><br>
        <a href="/topic/2">Express</a><br><br>
        ${topics[req.params.id]}

    `
    //    ${topics[req.query.id]}
    res.send(output);
});
//QueryString 을 Express에서 다루는 방법

//시맨틱 URL 기본적인 큰 틀
app.get('/topic/:id/:mode', function(req, res){
    res.send(req.params.id+ ',' +req.params.mode)
});
//시맨틱 URL 기본적인 큰 틀

app.get('/template', function(req, res){
    res.render('temp', {time: Date(), _title:'Jade'} );
});

app.get('/', function(req, res) {
    res.send('Hello Home Page');
});

app.get('/dynamic', function(req, res) {
    var lis = '';
    for (var i = 0; i < 5; i++) {
        lis = lis + '<li>Coding</li>'
    }
    var time = Date();
    var output = `
      <!DOCTYPE html>
    <html lang=ko dir="ltr">
        <head>
            <meta charset="utf-8">
            <title></title>
        </head>
        <body>
            <h1>Hello, Dynamic!</h1>
            <ul>
                ${lis}
            </ul>
            ${time}
        </body>
    </html>
    `
      res.send(output)
      });

app.get('/route', function(req, res) {
    res.send('Hello Router, <img src="/ex.jpg">')
});

app.get('/login', function(req, res) {
    res.send('Login Please');
});

app.listen(3000, function() {
    console.log('Connection 3000 port!');
});
