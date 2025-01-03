// var par = document.getElementById("PAR");

// function ChangeFont(e) {
//   par.style.fontFamily = e;
// }
// function ChangeAlign(e) {
//   par.style.textAlign = e;
// }
// function ChangeHeight(e) {
//   par.style.lineHeight = e;
// }
// function ChangeLSpace(e) {
//   par.style.letterSpacing = e;
// }
// function ChangeIndent(e) {
//   par.style.textIndent = e;
// }
// function ChangeTransform(e) {
//   par.style.textTransform = e;
// }

// function ChangeDecorate(e) {
//   par.style.textDecoration = e;
// }

// function ChangeBorder(e) {
//   par.style.borderStyle = e;
// }

// function ChangeBorderColor(e) {
//   par.style.borderColor = e;
// }



var p = document.getElementById('PAR')
var td = document.querySelectorAll('td')

td[0].addEventListener('click' , function (e) {
    if (e.target != this) {
        p.style.fontFamily = e.target.nextSibling.nodeValue
    }
})
td[1].addEventListener('click' , function (e) {
    if (e.target != this) {
        p.style.textAlign = e.target.nextSibling.nodeValue
    }
})

td[2].addEventListener('click' , function (e) {
    if (e.target != this) {
        p.style.lineHeight = e.target.nextSibling.nodeValue
    }
})
td[3].addEventListener('click' , function (e) {
    if (e.target != this) {
        p.style.letterSpacing = e.target.nextSibling.nodeValue
    }
})
td[4].addEventListener('click' , function (e) {
    if (e.target != this) {
        p.style.textIndent = e.target.nextSibling.nodeValue
    }
})
td[5].addEventListener('click' , function (e) {
    if (e.target != this) {
        p.style.textTransform = e.target.nextSibling.nodeValue
    }
})
td[6].addEventListener('click' , function (e) {
    if (e.target != this) {
        p.style.textDecoration = e.target.nextSibling.nodeValue
    }
})
td[7].addEventListener('click' , function (e) {
    if (e.target != this) {
        p.style.borderStyle = e.target.nextSibling.nodeValue
    }
})
td[8].addEventListener('click' , function (e) {
    if (e.target != this) {
        p.style.borderColor = e.target.nextSibling.nodeValue
    }
})