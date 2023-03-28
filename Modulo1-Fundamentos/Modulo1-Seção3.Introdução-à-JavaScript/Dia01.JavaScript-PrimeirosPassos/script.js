// const myName = "Guilherme";
// const birthCity = "São João Del Rei";
// let birthYear = 2001;

//    console.log(myName, birthCity, birthYear);

//    birthYear = 2030;
//    console.log(birthYear);
//    birthCity = "Tiradentes";
//    console.log(birthCity);






// const base = 5;
// const height = 8;
// const area = base * height;

// console.log(area);

// const perimeter = base + (height+height);
// console.log(perimeter);






//    let nota = 50;
//    if (nota >= 80) {
//        console.log("Parabéns, você faz parte do grupo das pessoas aprovadas!");
//    }
//    else if (nota < 80 && nota >= 60) {
//        console.log("Você está na nossa lista de espera");
//    }
//    else if (nota < 60) {
//        console.log("Infelizmente, você foi reprovado.");
//    }






//    const currentHour = 23;
//     let message = '';
//     if (currentHour >= 22) {
//         message = 'Não deveríamos comer nada, é hora de dormir';
//    }
//     else if (currentHour >= 18 && currentHour < 22) {
//        message = 'Rango da noite, vamos jantar :D';
//     }
//     else if (currentHour >= 14 && currentHour < 18) {
//         message = 'Vamos fazer um bolo pro café da tarde?';
//    }
//     else if (currentHour >=11 && currentHour < 14) {
//         message = 'Hora do almoço!!!';
//    }
//     else if (currentHour >= 4 && currentHour < 11) {
//         message = 'Hmmm, cheiro de café recém-passado';
//    }
// 
//    console.log(message)





//    let weekDay = 'sabado';
//    if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
//        console.log('Oba, mais um dia de aprendizado na Trybe >:D');
//    }
//    else if (weekDay === 'sabado' || weekDay === 'domingo') {
//       console.log('FINALMENTE, descanso merecido UwU');
//   }





let canditado = 'reprovado';

switch(canditado) {
    case "aprovado":
        console.log('Parabéns, você foi aprovada(o)!');
        break;
    
    case "lista":
        console.log('Você está na nossa lista de espera');
        break;  

    case "reprovado":
        console.log('Você foi reprovada(o)');
        break;
    
    default:
        console.log('Informação incorreta');
}
