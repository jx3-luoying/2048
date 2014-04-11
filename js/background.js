var currentTime = new Date().getHours();
if (7 <= currentTime && currentTime < 20) {
    if (document.body) {
        document.body.background-repeat=no-repeat;
        document.body.background-position=center;
        document.body.background-image = "http://thebus.net/sites/default/files/ws_Good_Morning_Sun_1280x1024.jpg";
    }
}
else {
    if (document.body) {
        document.body.background-image = "http://miriadna.com/desctopwalls/images/max/Last-evening-hour.jpg";
    }
}
