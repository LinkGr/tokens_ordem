const corpo_container = document.querySelector('#pagina-corpo .opcoes-custom');
const cabeca_container = document.querySelector('#pagina-cabeca .opcoes-custom');
const olhos_container = document.querySelector('#pagina-olhos .opcoes-custom');
const cabelo_container = document.querySelector('#pagina-cabelo .opcoes-custom');
const barba_container = document.querySelector('#pagina-barba .opcoes-custom');
const camisa_container = document.querySelector('#pagina-camisa .opcoes-custom');
const calca_container = document.querySelector('#pagina-calca .opcoes-custom');
const tenis_container = document.querySelector('#pagina-tenis .opcoes-custom');
let input;
let label;
let img;

//Quantidade de imagens
let quantidade_corpos = 1;
let quantidade_cabecas = 1;
let quantidade_olhos = 0;
let quantidade_cabelos = 5;
let quantidade_barbas = 0;
let quantidade_camisas = 2;
let quantidade_calcas = 2;
let quantidade_tenis = 5;


function funcoes_opcoes() {
    opcoes_corpo();
    opcoes_cabeca();
    opcoes_olhos();
    opcoes_cabelo();
    opcoes_barba();
    opcoes_camisa();
    opcoes_calca();
    opcoes_tenis();

    previewChanger();
}

function opcoes_corpo() {
    if (quantidade_corpos > 0) {
        for (let i = 1; i <= quantidade_corpos; i++) {
            input = document.createElement("input");
            label = document.createElement("label");
            img = document.createElement("img");
    
            input.type = "radio";
            input.id = `corpo-${i}`;
            input.name = "corpo";
            
            if(i == 1) {
                input.setAttribute("checked", "");
            }
    
            label.setAttribute("for", `corpo-${i}`);
    
            img.setAttribute("src", `./src/images/custom-modelos/corpo/masc/${i}.png`);
    
            label.appendChild(img);
    
            corpo_container.appendChild(input);
            corpo_container.appendChild(label);
        }
    }
}

function opcoes_cabeca() {
    if (quantidade_cabecas > 0) {
        for (let i = 1; i <= quantidade_cabecas; i++) {
            input = document.createElement("input");
            label = document.createElement("label");
            img = document.createElement("img");
    
            input.type = "radio";
            input.id = `cabeca-${i}`;
            input.name = "cabeca";
            
            if(i == 1) {
                input.setAttribute("checked", "");
            }
    
            label.setAttribute("for", `cabeca-${i}`);
    
            img.setAttribute("src", `./src/images/custom-modelos/cabeças/${i}.png`);
    
            label.appendChild(img);
    
            cabeca_container.appendChild(input);
            cabeca_container.appendChild(label);
        }
    }
}

function opcoes_olhos() {
    if(quantidade_olhos > 0) {
        for (let i = 1; i <= quantidade_olhos; i++) {
            input = document.createElement("input");
            label = document.createElement("label");
            img = document.createElement("img");
    
            input.type = "radio";
            input.id = `olhos-${i}`;
            input.name = "olhos";
            
            if(i == 1) {
                input.setAttribute("checked", "");
            }
    
            label.setAttribute("for", `olhos-${i}`);
    
            img.setAttribute("src", `./src/images/custom-modelos/olhos/${i}.png`);
    
            label.appendChild(img);
    
            olhos_container.appendChild(input);
            olhos_container.appendChild(label);
        }
    }
}

function opcoes_cabelo() {
    if (quantidade_cabelos > 0) {
        for (let i = 1; i <= quantidade_cabelos; i++) {
            input = document.createElement("input");
            label = document.createElement("label");
            img = document.createElement("img");
    
            input.type = "radio";
            input.id = `cabelo-${i}`;
            input.name = "cabelo";
            
            if(i == 1) {
                input.setAttribute("checked", "");
            }
    
            label.setAttribute("for", `cabelo-${i}`);
    
            img.setAttribute("src", `./src/images/custom-modelos/cabelos/${i}.png`);
    
            label.appendChild(img);
    
            cabelo_container.appendChild(input);
            cabelo_container.appendChild(label);
        }
    }
}

function opcoes_barba() {
    if (quantidade_barbas > 0) {
        for (let i = 1; i <= quantidade_barbas; i++) {
            input = document.createElement("input");
            label = document.createElement("label");
            img = document.createElement("img");
    
            input.type = "radio";
            input.id = `barba-${i}`;
            input.name = "barba";
            
            if(i == 1) {
                input.setAttribute("checked", "");
            }
    
            label.setAttribute("for", `barba-${i}`);
    
            img.setAttribute("src", `./src/images/custom-modelos/barba/${i}.png`);
    
            label.appendChild(img);
    
            barba_container.appendChild(input);
            barba_container.appendChild(label);
        }
    }
}

function opcoes_camisa() {
    if (quantidade_camisas > 0) {
        for (let i = 1; i <= quantidade_camisas; i++) {
            input = document.createElement("input");
            label = document.createElement("label");
            img = document.createElement("img");
    
            input.type = "radio";
            input.id = `camisa-${i}`;
            input.name = "camisa";
            
            if(i == 1) {
                input.setAttribute("checked", "");
            }
    
            label.setAttribute("for", `camisa-${i}`);
    
            img.setAttribute("src", `./src/images/custom-modelos/camisa/${i}.png`);
    
            label.appendChild(img);
    
            camisa_container.appendChild(input);
            camisa_container.appendChild(label);
        }
    }
}

function opcoes_calca() {
    if (quantidade_calcas > 0) {
        for (let i = 1; i <= quantidade_calcas; i++) {
            input = document.createElement("input");
            label = document.createElement("label");
            img = document.createElement("img");
    
            input.type = "radio";
            input.id = `calca-${i}`;
            input.name = "calca";
            
            if(i == 1) {
                input.setAttribute("checked", "");
            }
    
            label.setAttribute("for", `calca-${i}`);
    
            img.setAttribute("src", `./src/images/custom-modelos/calca/${i}.png`);
    
            label.appendChild(img);
    
            calca_container.appendChild(input);
            calca_container.appendChild(label);
        }
    }
}

function opcoes_tenis() {
    if (quantidade_tenis > 0) {
        for (let i = 1; i <= quantidade_tenis; i++) {
            input = document.createElement("input");
            label = document.createElement("label");
            img = document.createElement("img");
    
            input.type = "radio";
            input.id = `tenis-${i}`;
            input.name = "tenis";
            
            if(i == 1) {
                input.setAttribute("checked", "");
            }
    
            label.setAttribute("for", `tenis-${i}`);
    
            img.setAttribute("src", `./src/images/custom-modelos/tenis/${i}.png`);
    
            label.appendChild(img);
    
            tenis_container.appendChild(input);
            tenis_container.appendChild(label);
        }
    }
}
