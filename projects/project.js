var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");

var btn = document.getElementById("myBtnEquitarism");
var btn2 = document.getElementById("myBtnColumbia");
var btn3 = document.getElementById("myBtnRocket");
var btn4 = document.getElementById("myBtnNiA");

var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];

btn.onclick = function () {
  modal.style.display = "block";
}
btn2.onclick = function () {
  modal2.style.display = "block";
}
btn3.onclick = function () {
  modal3.style.display = "block";
}
btn4.onclick = function () {
  modal4.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}
span2.onclick = function () {
  modal2.style.display = "none";
}
span3.onclick = function () {
  modal3.style.display = "none";
}
span4.onclick = function () {
  modal4.style.display = "none";
}

window.onclick = function (event) {
  if ((event.target == modal) || (event.target == modal2)) {
    modal.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
  }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }