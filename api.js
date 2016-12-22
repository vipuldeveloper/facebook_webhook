
var request = require('request');
var conf = require('config');

var apiUrl = conf.get('apiUrl');

var api = function () {
    var self = this;
    self.send = function send(sender, pageToken, messageData) {
        request({
            url: apiUrl,
            qs: {access_token: pageToken},
            method: 'POST',
            json: {
                recipient: {id: sender},
                message: messageData
            }
        }, function (error, response) {
            if (error) {
                console.log('Error sending message: ', error);
            } else if (response.body.error) {
                console.log('Error: ', response.body.error);
            }
        });
    }
};
module.exports = api;