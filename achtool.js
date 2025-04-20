"use strict";

var page = require('webpage').create(),
    server = 'https://www.brettcharney.com/ouro/ajax/load_chat.php',
    data = '{"mychar_id": "32", "campaign_id": "22", "mychar_name": "Fordsharp", "offset": "1", "limit": "10"}';

var headers = {
    "Content-Type": "application/json"
}

page.onResourceReceived = function(response) {
if (response.url === server && response.status === 200) {
    console.log(response.body);
    page.setContent(response.body)
    page.render('stage1.png');
}
};

page.open(server, 'post', data, headers, function (status) {
    if (status !== 'success') {
        console.log('Unable to post!');
    }
    phantom.exit();
});
