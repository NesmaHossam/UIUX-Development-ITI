// - Dom exercise

//     1.d Given a web document as shown below in Fig. a, with only these few lines of
//     code in shown in Fig. b. Using DOM Nodes to access, create, modify or remove
//     any of its elements to have it finally as shown in Fig. c

var pic = document.getElementsByTagName("img")[0];
pic.style.marginLeft = "900px";

// var div = document.getElementsByTagName("div")[1];
// var div1 = document.getElementsByTagName("div")[0];
var newCopy = pic.cloneNode();

document.body.append(newCopy);
newCopy.style.marginLeft = "0px";

var cont = document.getElementById("navigation");
// translate()
cont.style.width = "5%";  
cont.style.margin = "auto";

var cir = document.getElementById("nav");
cir.style.listStyleType = "circle";

var link = document.querySelectorAll("#nav li");

link.forEach((x, y) => {
  if (y % 2 === 0) {
    x.style.marginLeft = "5px";
  } else {
    x.style.marginRight = "5px";
  }
});


