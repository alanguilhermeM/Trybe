const titulo = document.createElement('h1');
titulo.id = 'title';
titulo.innerHTML = 'Paleta de Cores';
body.appendChild(titulo);

const section = document.createElement('section');
section.id = 'color-palette';
body.appendChild(section);

const cor1 = document.createElement('div');
const cor2 = document.createElement('div');
const cor3 = document.createElement('div');
const cor4 = document.createElement('div');
cor1.className = 'color selected';
cor2.className = 'color';
cor3.className = 'color';
cor4.className = 'color';
cor1.id = 'color-1';
cor2.id = 'color-2';
cor3.id = 'color-3';
cor4.id = 'color-4';

cor1.style.backgroundColor = 'black';
cor2.style.backgroundColor = 'purple';
cor3.style.backgroundColor = 'blue';
cor4.style.backgroundColor = 'aqua';

section.appendChild(cor1);
section.appendChild(cor2);
section.appendChild(cor3);
section.appendChild(cor4);

const button = document.createElement('button');
button.id = 'button-random-color';
button.innerHTML = 'Cores aleatórias';
body.appendChild(button);

const coresAleatórias = () => {
    const chars = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i+= 1) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color
};


const guardandoValores = () => {
    let colorSource = [];
    for(let i= 1; i < 4; i+= 1) {
        colorSource.push(document.querySelectorAll('#color-palette div')[i].style.backgroundColor);
    };
    localStorage.setItem('colorPalette', JSON.stringify(colorSource));
    
};

button.addEventListener('click', () => {
    for(let i = 2; i < 5; i+= 1) {
        let div_color = document.getElementById(`color-${i}`);
        div_color.style.backgroundColor = coresAleatórias();
    }
    guardandoValores();
});

window.onload = () => {
    if(localStorage.getItem('colorPalette') === null) {
        const divCor1 = document.getElementById('color-1');
        divCor1.style.backgroundColor = 'black';
    } else {
        const divCor2 = document.getElementById('color-2');
        const divCor3 = document.getElementById('color-3');
        const divCor4 = document.getElementById('color-4');
        const armazenandoCores = JSON.parse(localStorage.getItem('colorPalette'));
        divCor2.style.backgroundColor = armazenandoCores[0];
        divCor3.style.backgroundColor = armazenandoCores[1];
        divCor4.style.backgroundColor = armazenandoCores[2];
    };
};

const section2 = document.createElement('section');
section2.id = 'pixel-board';
body.appendChild(section2);
for(let i = 0; i < 25; i+= 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    pixel.style.border = 'black solid 1px';
    pixel.style.display = 'inline-block'; 
    pixel.style.height = '40px';
    pixel.style.width = '40px';
    pixel.style.padding = '15px';
    pixel.style.margin = '5px';
    pixel.style.marginBottom ='-4px';
    section2.appendChild(pixel);
};

const Colors = document.querySelectorAll('#color-palette div');
for(cor of Colors) {
    cor.addEventListener('click', (event) => {
        const selected = document.querySelector('.selected');
        if(selected) {
            selected.classList.remove('selected');
        }
        event.target.classList.add('selected');
    });
};

const pixelClicado = document.querySelectorAll('.pixel')
for (let pixel of pixelClicado) {
    pixel.addEventListener('click', () => {
        const board = document.querySelector('#pixel-board');
        const pixelBoard = [];
        let selected = document.querySelector('.selected').style.backgroundColor;
        pixelBoard.push(pixel.style.backgroundColor = `${selected}`);
        for(let i =0; i < board.length; i+= 1) {
            localStorage.setItem('pixelBoard', JSON.stringify(pixelBoard))
        }
    });
};

const clear = document.createElement('button');
clear.id = 'clear-board';
clear.innerHTML = 'Limpar';
body.appendChild(clear);

clear.addEventListener('click', () =>{
    for(let pixel of pixelClicado) {
        pixel.style.backgroundColor = 'white';
    }
});

