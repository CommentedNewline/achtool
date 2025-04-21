var page = require('webpage').create();
console.log('required webpage');

page.onConsoleMessage = function(msg) {
    console.log(msg);
};
console.log('added message event handler')

page.open('https://example.com/', function() {
    console.log('page.opened');
    page.includeJs("https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
        page.evaluate(function() {
            console.log('evaluating');
            console.log($("h1").text());

            console.log("extending jquery.")
            $.extend({// extention from stackoverflow for replacing tags source: https://stackoverflow.com/questions/918792/
                replaceTag: function (currentElem, newTagObj, keepProps) {
                    var $currentElem = $(currentElem);
                    var i, $newTag = $(newTagObj).clone();
                    if (keepProps) {//{{{
                        newTag = $newTag[0];
                        newTag.className = currentElem.className;
                        $.extend(newTag.classList, currentElem.classList);
                        $.extend(newTag.attributes, currentElem.attributes);
                    }//}}}
                    $currentElem.wrapAll($newTag);
                    $currentElem.contents().unwrap();
                    // return node; (Error spotted by Frank van Luijn)
                    return this; // Suggested by ColeLawrence
                }
            });
            $.fn.extend({
                replaceTag: function (newTagObj, keepProps) {
                    // "return" suggested by ColeLawrence
                    return this.each(function() {
                        jQuery.replaceTag(this, newTagObj, keepProps);
                    });
                }
            });
            console.log("done extending");

            console.log("Removing Images...")
                $('.symbol').remove();// remove images

            console.log("DOM Traversial 1...");
                $(".d-flex.mb-5").each(function(){
                    const $this = $(this);
                    $(this).find('.ms-3').prependTo($(this).find('.d-flex.flex-column'));
                }) // change order of details so we have a div for the message

            console.log("Remove HTML comments");
                var content = document.documentElement.outerHTML;
                var noComments = content.replace(/<!--(.*?)-->/g, ''); 
                  
            console.log("Forming Xml.")
                $('.p-3.rounded').replaceTag('<text>', false);// create xml
                $('.fs-5').replaceTag('<sender>', false);
                $('.text-muted').replaceTag('<time>', false);
                $('.d-flex.mb-5').replaceTag('<message></messages>');
            console.log(document.body.innerHTML);
    });
    console.log('exiting');
    phantom.exit();
  });
});