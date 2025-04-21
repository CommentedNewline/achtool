    $.ajax({
        url: 'ajax/load_chat.php',
        type: 'POST',
        data: {
            mychar_id: 32,
            campaign_id: campaignId,
            mychar_name: 'Fordsharp',
            offset: offset,
            limit: limit
        },
        success: function(data) {
            if (data.trim() === '') {
                // No more data to load
            }
            var content = document.documentElement.outerHTML;
            //LEFT OFF HERE BROKEN CODE
            var  m = content.replace(/<!--(.*?)-->/g, '');
            // Insert new messages before the loading indicator
            $chatContainer.find('.loading-indicator').before(data);
            offset += limit;
        },
        error: function(xhr, status, error) {
            console.error('AJAX Error:', error);
            loading = false;
            // Hide the loading indicator
            $chatContainer.find('.loading-indicator').hide();
            // Optionally display an error message
            console.log('An error occurred at .ajax while loading messages.');
        }
    });
