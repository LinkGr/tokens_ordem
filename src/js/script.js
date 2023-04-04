//Declarando Variaveis -------------------
//CUSTOM SELECTED
let selected_corpo = document.querySelector("#pagina-corpo>.opcoes-custom>input:checked+label>img");
let selected_olhos = document.querySelector("#pagina-olhos>.opcoes-custom>input:checked+label>img");
let selected_cabelo = document.querySelector("#pagina-cabelo>.opcoes-custom>input:checked+label>img");
let selected_barba = document.querySelector("#pagina-barba>.opcoes-custom>input:checked+label>img");
let selected_camisa = document.querySelector("#pagina-camisa>.opcoes-custom>input:checked+label>img");
let selected_calca = document.querySelector("#pagina-calca>.opcoes-custom>input:checked+label>img");
let selected_tenis = document.querySelector("#pagina-tenis>.opcoes-custom>input:checked+label>img");

//CANVAS
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

//CORPO
let preview_corpo = document.querySelector("#preview-corpo");
let hue_corpo = document.querySelector("#hue-corpo");
let brilho_corpo = document.querySelector("#hue-corpo");
let saturacao_corpo = document.querySelector("#saturacao-corpo");

//OLHOS
let preview_olhos = document.querySelector("#preview-olhos");
let hue_olhos = document.querySelector("#hue-olhos");
let brilho_olhos = document.querySelector("#hue-olhos");
let saturacao_olhos = document.querySelector("#saturacao-camisa");

//CABELO
let preview_cabelo = document.querySelector("#preview-cabelo");
let hue_cabelo = document.querySelector("#hue-cabelo");
let brilho_cabelo = document.querySelector("#hue-cabelo");
let saturacao_cabelo = document.querySelector("#saturacao-cabelo");

//BARBA
let preview_barba = document.querySelector("#preview-barba");
let hue_barba = document.querySelector("#hue-barba");
let brilho_barba = document.querySelector("#hue-barba");
let saturacao_barba = document.querySelector("#saturacao-barba");

//CAMISA
let preview_camisa = document.querySelector("#preview-camisa");
let hue_camisa = document.querySelector("#hue-camisa");
let brilho_camisa = document.querySelector("#hue-camisa");
let saturacao_camisa = document.querySelector("#saturacao-camisa");

//CALÇA
let preview_calca = document.querySelector("#preview-calca");
let hue_calca = document.querySelector("#hue-calca");
let brilho_calca = document.querySelector("#hue-calca");
let saturacao_calca = document.querySelector("#saturacao-calca");

//TENIS
let preview_tenis = document.querySelector("#preview-tenis");
let hue_tenis = document.querySelector("#hue-tenis");
let brilho_tenis = document.querySelector("#hue-tenis");
let saturacao_tenis = document.querySelector("#saturacao-tenis");

function colorChanger() {
   hue_corpo = document.querySelector("#hue-corpo").value;
   brilho_corpo = document.querySelector("#brilho-corpo").value;
   saturacao_corpo = document.querySelector("#saturacao-corpo").value;

   hue_olhos = document.querySelector("#hue-olhos").value;
   brilho_olhos = document.querySelector("#brilho-olhos").value;
   saturacao_olhos = document.querySelector("#saturacao-olhos").value;

   hue_cabelo = document.querySelector("#hue-cabelo").value;
   brilho_cabelo = document.querySelector("#brilho-cabelo").value;
   saturacao_cabelo = document.querySelector("#saturacao-cabelo").value;

   hue_barba = document.querySelector("#hue-barba").value;
   brilho_barba = document.querySelector("#brilho-barba").value;
   saturacao_barba = document.querySelector("#saturacao-barba").value;

   hue_camisa = document.querySelector("#hue-camisa").value;
   brilho_camisa = document.querySelector("#brilho-camisa").value;
   saturacao_camisa = document.querySelector("#saturacao-camisa").value;

   hue_calca = document.querySelector("#hue-calca").value;
   brilho_calca = document.querySelector("#brilho-calca").value;
   saturacao_calca = document.querySelector("#saturacao-calca").value;

   hue_tenis = document.querySelector("#hue-tenis").value;
   brilho_tenis = document.querySelector("#brilho-tenis").value;
   saturacao_tenis = document.querySelector("#saturacao-tenis").value;
}

//Preview do Token
function previewChanger() {

   selected_corpo = document.querySelector("#pagina-corpo>.opcoes-custom>input:checked+label>img");
   selected_olhos = document.querySelector("#pagina-olhos>.opcoes-custom>input:checked+label>img");
   selected_cabelo = document.querySelector("#pagina-cabelo>.opcoes-custom>input:checked+label>img");
   selected_barba = document.querySelector("#pagina-barba>.opcoes-custom>input:checked+label>img");
   selected_camisa = document.querySelector("#pagina-camisa>.opcoes-custom>input:checked+label>img");
   selected_calca = document.querySelector("#pagina-calca>.opcoes-custom>input:checked+label>img");
   selected_tenis = document.querySelector("#pagina-tenis>.opcoes-custom>input:checked+label>img");

   colorChanger();

   preview_corpo.style.filter = 'hue-rotate(xdeg) brightness(y%) saturate(z)'.replace('x', hue_corpo).replace('y', brilho_corpo).replace('z', saturacao_corpo);
   preview_olhos.style.filter = 'hue-rotate(xdeg) brightness(y%) saturate(z)'.replace('x', hue_olhos).replace('y', brilho_olhos).replace('z', saturacao_olhos);
   preview_cabelo.style.filter = 'hue-rotate(xdeg) brightness(y%) saturate(z)'.replace('x', hue_cabelo).replace('y', brilho_cabelo).replace('z', saturacao_cabelo);
   preview_barba.style.filter = 'hue-rotate(xdeg) brightness(y%) saturate(z)'.replace('x', hue_barba).replace('y', brilho_barba).replace('z', saturacao_barba);
   preview_camisa.style.filter = 'hue-rotate(xdeg) brightness(y%) saturate(z)'.replace('x', hue_camisa).replace('y', brilho_camisa).replace('z', saturacao_camisa);
   preview_calca.style.filter = 'hue-rotate(xdeg) brightness(y%) saturate(z)'.replace('x', hue_calca).replace('y', brilho_calca).replace('z', saturacao_calca);
   preview_tenis.style.filter = 'hue-rotate(xdeg) brightness(y%) saturate(z)'.replace('x', hue_tenis).replace('y', brilho_tenis).replace('z', saturacao_tenis);
   
   preview_corpo.setAttribute('src', selected_corpo.getAttribute('src'));
   preview_olhos.setAttribute('src', selected_olhos.getAttribute('src'));
   preview_cabelo.setAttribute('src', selected_cabelo.getAttribute('src'));
   preview_barba.setAttribute('src', selected_barba.getAttribute('src'));
   preview_camisa.setAttribute('src', selected_camisa.getAttribute('src'));
   preview_calca.setAttribute('src', selected_calca.getAttribute('src'));
   preview_tenis.setAttribute('src', selected_tenis.getAttribute('src'));

   canvaDraw();
}

function canvaDraw() {

   //CANVAS CORPO
   ctx.filter = 'hue-rotate(xdeg) brightness(y%) saturate(z)'.replace('x', hue_corpo).replace('y', brilho_corpo).replace('z', saturacao_corpo);
   ctx.drawImage(preview_corpo, 0, 0);
   ctx.filter = 'none';

   //CANVAS OLHOS
   ctx.filter = 'hue-rotate(xdeg) brightness(y%) saturate(z)'.replace('x', hue_olhos).replace('y', brilho_olhos).replace('z', saturacao_olhos);
   ctx.drawImage(preview_olhos, 0, 0);
   ctx.filter = 'none';

   //CANVAS CABELO
   ctx.filter = 'hue-rotate(xdeg) brightness(y%) saturate(z)'.replace('x', hue_cabelo).replace('y', brilho_cabelo).replace('z', saturacao_cabelo);
   ctx.drawImage(preview_cabelo, 0, 0);
   ctx.filter = 'none';

   //CANVAS BARBA
   ctx.filter = 'hue-rotate(xdeg) brightness(y%) saturate(z)'.replace('x', hue_barba).replace('y', brilho_barba).replace('z', saturacao_barba);
   ctx.drawImage(preview_barba, 0, 0);
   ctx.filter = 'none';

   //CANVAS CAMISA
   ctx.filter = 'hue-rotate(xdeg) brightness(y%) saturate(z)'.replace('x', hue_camisa).replace('y', brilho_camisa).replace('z', saturacao_camisa);
   ctx.drawImage(preview_camisa, 0, 0);
   ctx.filter = 'none';

   //CANVAS CALCA
   ctx.filter = 'hue-rotate(xdeg) brightness(y%) saturate(z)'.replace('x', hue_calca).replace('y', brilho_calca).replace('z', saturacao_calca);
   ctx.drawImage(preview_calca, 0, 0);
   ctx.filter = 'none';

   //CANVAS TENIS
   ctx.filter = 'hue-rotate(xdeg) brightness(y%) saturate(z)'.replace('x', hue_tenis).replace('y', brilho_tenis).replace('z', saturacao_tenis);
   ctx.drawImage(preview_tenis, 0, 0);
   ctx.filter = 'none';
   
}

function downloadToken() {
   let pngUrl = canvas.toDataURL("image/png");

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