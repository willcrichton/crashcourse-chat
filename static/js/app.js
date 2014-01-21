$(function() {
    if (ROOM_ID === '') return;

    // Create connection to firebase
    var db = new Firebase('https://crashcourse.firebaseio.com/' + ROOM_ID);
    
    // Add messages as they come in
    db.on('child_added', function(child) {
        var data = child.val();
        $('#chat').prepend('<div class="message"><span id="name">' + data.name + ':</span> ' + data.message + '</div>');
    });

    $('#message').keypress(function (event) {
        if (event.which == 13) {
            db.push({name: $('#name').val(),
                     message: $('#message').val()
                    });
            $('#message').val('');
        }
    });
    
});
