"use strict";
var system = require('system');
var args = system.args;

var page = require('webpage').create(),
    server = 'https://www.brettcharney.com/ouro/ajax/load_chat.php',
    data = '{"mychar_id": "32", "campaign_id": "22", "mychar_name": "Fordsharp", "offset": "1", "limit": "10"}';

var headers = {
    "Content-Type": "application/json"
}

page.open(server, 'post', data, headers, function (status) {
    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        page.evaluate(function(response) {
            document.body.innerHTML = response;
            console.log('response:')
            console.log(response)
        }, page.content);
        page.render('stage1.png');
    }
    phantom.exit();
});
