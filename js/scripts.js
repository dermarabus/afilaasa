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

 function generateCode() {
        var letters = "abcdefghijklmnopqrstuvwxyz";
        var randomLetter1 = letters.charAt(Math.floor(Math.random() * letters.length));
        var randomLetter2 = letters.charAt(Math.floor(Math.random() * letters.length));
        var randomNumber1 = Math.floor(Math.random() * 10);
        var randomNumber2 = Math.floor(Math.random() * 10);
        var randomNumber3 = Math.floor(Math.random() * 10);
        var randomNumber4 = Math.floor(Math.random() * 10);
        var code = "prnt.sc/" + randomLetter1 + randomLetter2 + randomNumber1 + randomNumber2 + randomNumber3 + randomNumber4;
        document.getElementById("code-display").innerHTML = code;
        window.open("https://prnt.sc/" + code, "_blank");
      }

//Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'G-N0F7R5NPTR');
