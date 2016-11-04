/**
 * Created by Roi on 27/07/2016.
 */

exports = module.exports = function(io) {
    io.on('connection', function(socket) {
        setInterval(function() {
            socket.emit('date', { date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') })
        }, 1000)
    });
};