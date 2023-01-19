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

function randomString() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var randomCode = letters.charAt(Math.floor(Math.random() * letters.length)) + letters.charAt(Math.floor(Math.random() * letters.length)) + numbers.charAt(Math.floor(Math.random() * numbers.length)) + numbers.charAt(Math.floor(Math.random() * numbers.length)) + numbers.charAt(Math.floor(Math.random() * numbers.length)) + numbers.charAt(Math.floor(Math.random() * numbers.length));
    window.open("https://prnt.sc/" + randomCode, "_blank");
  }

//Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'G-N0F7R5NPTR');
