var socket = io();
$('#demo-disconnect-chat').click(function () {
    window.close();
});
$('#send-message-btn').click(function () {
    var d = new Date();
    time = String(d.getHours()) +" : "+ String(d.getMinutes());
    var msg = $('#message-box').val();
    socket.emit('chat', msg)
    $('#adder ul').append(
        $('<li>').attr('class', 'mar-btm').append(
            $('<div>').attr('class', 'media-left').append(
                $('<img>').attr('src', 'http://bootdey.com/img/Content/avatar/avatar1.png').attr('class', 'img-circle img-sm').attr('alt', 'Profile Picture')
            )).append(
            $('<div>').attr('class', 'media-body pad-hor').append(
                $('<div>').attr('class', 'speech').append(
                    $('<a>').attr('href', '#').attr('class', 'media-heading').text("User says:")).append(
                    $('<p>').text(msg))
            )));
    $('#message-box').val('');
    return false;
});
socket.on('chat', function (msg) {
    var d = new Date();
    time = String(d.getHours()) +" : "+ String(d.getMinutes());
    $('#adder ul').prepend(
        $('<li>').attr('class', 'mar-btm').append(
            $('<div>').attr('class', 'media-left').append(
                $('<img>').attr('src', 'http://bootdey.com/img/Content/avatar/avatar1.png').attr('class', 'img-circle img-sm').attr('alt', 'Profile Picture')
            )).append(
            $('<div>').attr('class', 'media-body pad-hor').append(
                $('<div>').attr('class', 'speech').append(
                    $('<a>').attr('href', '#').attr('class', 'media-heading').text("User says:")).append(
                    $('<p>').text(msg))
            )));
});
