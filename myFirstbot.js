var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var conf = require('config');
var api = require("./api.js");

var app = express();
module.exports = app;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 4567));

app.listen(app.get('port'));

var apiToken = conf.get('apiToken');
var pageToken = conf.get('pageToken');

var apiInstance = new api();

app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === apiToken) {
        res.send(req.query['hub.challenge']);
    }
    else res.send('Error, wrong validation token');
});


app.post('/webhook/', function (req, res) {

    messaging_events = req.body.entry[0].messaging;

    for (i = 0; i < messaging_events.length; i++) {
        event = req.body.entry[0].messaging[i];
        sender = event.sender.id.toString();
            if (event.message && event.message.text) {
                text = event.message.text;
                console.log(text);

                var messageData = { text:text };
                apiInstance.send(sender,pageToken,messageData);
            }
    }
    res.sendStatus(200);
});