
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.

for (let i = 0; i < decemberDaysList.length; i +=1) {
  const ul = document.getElementById('days');
  const li = document.createElement('li');
  li.className = ('day');
  if(decemberDaysList[i] === 24 || decemberDaysList[i] === 25 || decemberDaysList[i] === 31) {
    li.className = ('day holiday');
  };
  if(decemberDaysList[i] === 4 || decemberDaysList[i] === 11 || decemberDaysList[i] === 18) {
    li.className = ('day friday');
  };
  if(decemberDaysList[i] === 25) {
    li.className = ('day holiday friday');
  }
  li.innerHTML = `${decemberDaysList[i]}`;
  ul.appendChild(li);
}




const button = document.getElementById('btn-holiday');
const buttonBG = () => {
  let dayBG = document.getElementsByClassName('holiday');
  for(day of dayBG) {
    if(day.style.backgroundColor === 'green') {
      day.style.backgroundColor = 'rgb(238,238,238)'
    }
    else {
      day.style.backgroundColor = 'green';
    };
  };
  
};
button.addEventListener('click', buttonBG);


let arrFriday = ['4', '11', '18', '25'];
const buttonFriday = document.getElementById('btn-friday');
const buttonFr = () => {
  let fridayB = document.getElementsByClassName('friday');
  for (let i = 0; i < fridayB.length; i+= 1) {
    if(fridayB[i].innerHTML !== 'Hora da farra') {
      fridayB[i].innerHTML = 'Hora da farra';
    }
   else {
      fridayB[i].innerHTML = arrFriday[i];
    };
  }
};
buttonFriday.addEventListener('click', buttonFr);

const dias = document.getElementById('days')
const mouseOver = (evento) => {
  evento.target.style.fontSize = '30px';
  
}
const mouseOut = (evento) => {
  evento.target.style.fontSize = '';
}
dias.addEventListener('mouseover', mouseOver);
dias.addEventListener('mouseout', mouseOut);







const div0 = document.querySelectorAll(".task")[0];
const div1 = document.querySelectorAll(".task")[1];

const changeClass0 = () => {
  if(div0.style.backgroundColor === 'rgb(0, 128, 0)') {
    div0.classList.add("selected");
    const backClass = () => {
      if (div0.className ===('task selected')) {
        div0.classList.remove('selected');
      }
      else {
        div0.classList.add("selected");
      }
    }
    div0.addEventListener('click', backClass);
    
  } 
};
const changeClass1 = () => {
  if(div1.style.backgroundColor === 'rgb(255, 0, 0)') {
    div1.classList.add("selected");
    const backClass1 = () => {
      if (div1.className ===('task selected')) {
        div1.classList.remove('selected');
      }
      else {
        div1.classList.add("selected");
      }
    }
    div1.addEventListener('click', backClass1);
  };
};

div0.addEventListener("click", changeClass0);
div1.addEventListener("click", changeClass1);





const diaS = document.querySelectorAll('.day');

for (const dia of diaS) {
  dia.addEventListener('click', () => {
    if(div0.className === 'task selected'){
      if(dia.style.color === 'green') {
        dia.style.color = 'rgb(119,119,119)';
      }
      else {
        dia.style.color = 'green';
      }
    };
    if(div1.className === 'task selected'){
      if(dia.style.color === 'red') {
        dia.style.color = 'rgb(119,119,119)';
      }
      else {
        dia.style.color = 'red';
      }
    };
  })
};