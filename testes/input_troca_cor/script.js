//Função para trocar a camisa
function trocaCamisa() {
   //Pega o arquivo da camisa selecionada
   src_camisa_selected = document.querySelector("#troca-camisa>input:checked+label>img").getAttribute('src');

   //troca o arquivo da camisa do preview pela camisa selecionada
   document.querySelector("main>img").setAttribute('src', src_camisa_selected)
}


//Função para trocar a cor da imagem preview
function trocarCor() {
      // seleciona o elemento do slider
      var color_pick = document.getElementById("cor-camisa");
      // seleciona a camisa
      var camisa = document.querySelector("main>img");

      // pega o valor presente no slider
      var valor_cor = color_pick.value;

      //seta um filtro na imagem com o valor do slider
      camisa.style.filter = 'hue-rotate(xdeg)'.replace('x', valor_cor);

      // log no console pra teste do valor do slider
      console.log(valor_cor);
}


//Função de desenho no canva
function canva_draw() {
   // seleciona o elemento do slider
   var color_pick = document.getElementById("cor-camisa");
   
   // seleciona o atributo valor do slider
   var valor_cor = color_pick.value;

   // seleciona o elemento do canvas
   canvas = document.querySelector("main>canvas");
   // seleciona o contexto do canvas
   ctx = canvas.getContext('2d');
   // seleciona o elemento da imagem a ser desenhada
   img_final = document.querySelector('main>img');

   // seta o filtro do contexto para o valor do slider
   ctx.filter = 'hue-rotate(xdeg)'.replace('x', valor_cor);

   // desenha a imagem que é afetada pelo filtro do contexto
   ctx.drawImage(img_final, 0, 0, 200, 300);

   // limpa o filtro do contexto no final
   ctx.filter = 'hue-rotate(0)';
}


function download_img() {
   // pega o URI do nosso canvas
   var pngUrl = canvas.toDataURL("image/png");

   // cria um elemmento pra servir como ancora no download
   const ancora = document.createElement("a");
   // coloca ele elemento no body do html
   document.body.appendChild(ancora);

   // seta o atributo href da nossa ancora para a nossa URI
   ancora.setAttribute("href", pngUrl);
   // seta o atributo download (nome do arquivo) da nossa ancora para token.png
   ancora.setAttribute("download", "token.png");
   // clica na nossa ancora
   ancora.click();
   
   // deleta a ancora no final
   document.body.removeChild(ancora);
}