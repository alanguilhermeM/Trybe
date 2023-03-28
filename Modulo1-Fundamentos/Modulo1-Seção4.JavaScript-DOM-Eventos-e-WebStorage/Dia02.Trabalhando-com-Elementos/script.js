const title = document.createElement('h1');
title.className = ('title')
title.innerHTML = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(title);

const mainC = document.createElement('main');
mainC.className = ('main-content');
document.body.appendChild(mainC);

const section = document.createElement('section');
section.className = ('center-content');
mainC.appendChild(section);
section.style.backgroundColor = 'green'

const text = document.createElement('p');
text.innerHTML = 'Boa Tarde';
section.appendChild(text);

const section2 = document.createElement('section');
section2.className = ('left-content');
mainC.appendChild(section2);

const section3 = document.createElement('section');
section3.className = ('right-content');
mainC.appendChild(section3);
section3.style.marginRight = 'auto';

const img = document.createElement('img');
img.className = ('small-image');
img.src = 'https://picsum.photos/200';
section2.appendChild(img);

const elementUl = document.createElement('ul');
section3.appendChild(elementUl);
const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis','Sete', 'Oito', 'Nove', 'Dez']
for (let num in arrayNumbers) {
    const elementLi = document.createElement('li');
    elementLi.innerHTML = arrayNumbers[num];
    elementUl.appendChild(elementLi);
}


for (let i = 0; i < 3; i+= 1) {
    const h3 = document.createElement('h3');
    h3.className = ('description');
    mainC.appendChild(h3);
}

mainC.removeChild(section2);

const ul = document.getElementsByTagName('ul')[0];
ul.lastChild.remove();
ul.lastChild.remove();