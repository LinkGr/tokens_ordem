async function changeCamisa() {
  document.querySelector("#camisa-preview").setAttribute('src', document.querySelector("#camisas>input:checked+label>img").getAttribute('src'));
}


function MyCanvas() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var corpo = document.getElementById("corpo");
  var camisa = document.querySelector("#camisas input:checked+label>img");
  
  ctx.clearRect(0, 0, 500, 750);
  ctx.drawImage(corpo, 0, 0);
  ctx.drawImage(camisa, 0, 0);
  
  var botao_download = document.createElement("a");
  botao_download.href = canvas.toDataURL("image/png");
  botao_download.download = "token.png";
  botao_download.click();
  botao_download.remove();

}

