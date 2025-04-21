var page = require('webpage').create();
data = '{"mychar_id": "32", "campaign_id": "22", "mychar_name": "Fordsharp", "offset": "1", "limit": "10"}';

var headers = {
    "Content-Type": "application/json"
}

page.open('', function(status) {
    if (status !== 'success') {
        console.log('cant open null duh');
    } else {
    setTimeout(function() {
        page.render('google.png');
        
        phantom.exit();
    }, 200);
    }
});