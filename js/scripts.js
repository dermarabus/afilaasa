github = "https://github.com/dermarabus"

function select() {
    var e = document.getElementById("signs");
    var strUser = e.value;
}

//prntsc
function prntsc() {
    const chars = "abcdefghijklmnopqrstuvwxyz1234567890"
    var stringlength = 6;
    var text = '';
    for (var i = 0; i < stringlength; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        text += chars.substring(rnum, rnum + 1);
    }
    link = "https://prnt.sc/" + text;
    console.log(link);
}


//Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'G-N0F7R5NPTR');
