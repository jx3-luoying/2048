var currentTime = new Date().getHours();
if (7 <= currentTime && currentTime < 20) {
    if (document.body) {
        document.body.background-image = "http://thebus.net/sites/default/files/ws_Good_Morning_Sun_1280x1024.jpg";//"http://pic4.178.com/1054/10542337/month_1301/b31a100862232.jpg";//
    }
}
else {
    if (document.body) {
        document.body.background-image = "http://miriadna.com/desctopwalls/images/max/Last-evening-hour.jpg";
    }
}
