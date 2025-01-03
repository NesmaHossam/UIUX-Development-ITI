// Clone HTML div when it is clicked and change the background of the new copy to a random color then append it to the body.



var dev = document.querySelector(".dev");
dev.addEventListener("click", function () {
    var clone = dev.cloneNode(true);
    var color = Math.floor(Math.random() * 16777215).toString(16);
    clone.style.backgroundColor = "#" + color;
    document.body.appendChild(clone);
});


