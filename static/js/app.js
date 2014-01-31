// Run this code when the page loads
$(function() {
    var db = new Firebase('https://crashcourse.firebaseio.com/' 
                          + ROOM_ID);
    
    db.on('child_added', function(child) {
        var val = child.val();
        
        // this is stolen from somewhere else
        function htmlEntities(str) {
            return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        }

        val.message = htmlEntities(val.message).substring(0, 140);
        val.message = val.message.replace(/:\)/g, '<img src="http://www.i2symbol.com/images/symbols/smileys/white_frowning_face_u2639_icon_256x256.png" width="32">');

        val.message = val.message.replace(/\(y\)/g, '<img src="http://shoutingatthevoid.files.wordpress.com/2013/01/facebook-like-icon.png" width="32">');

        var $message = $('<div class="message"><b>' + val.name + '</b>: ' + val.message + '</div>');
        $('#chat-container').prepend($message);
        $message.fadeOut(0);
        $message.fadeIn(100);
    });

    $('input#message').keypress(function(event) {
        if (event.which == 13 && $(this).val() != '') {
            db.push({
                name: $('#name').val(),
                message: $(this).val()
            });
            $(this).val('');
        }
    });
});
