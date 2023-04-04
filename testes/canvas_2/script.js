function backChange() {
  document.querySelector("#back-final").setAttribute('src', document.querySelector("header>input:checked+label>img").getAttribute('src'));
}

function MyCanvas() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var ednaldo = document.getElementById("ednaldo-final");
  var backgroundvar = document.getElementById("back-final");
  
  ctx.drawImage(backgroundvar, 0, 0, 500, 500);
  ctx.drawImage(ednaldo, 0, 0, 500, 500);
}