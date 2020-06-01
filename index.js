var express = require('express');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
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
