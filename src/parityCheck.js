import readlineSync from 'readline-sync';

const parityCheck = () => {
  let respuestaCorrecta = '';

  console.log('¡Bienvenidos a Brain Games!');
  const name = readlineSync.question('Cuál es tu nombre: ');
  console.log(`¡Hola, ${name}! `);
  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    console.log(`Pregunta: ${randomNumber}`);
    const respuestaUser = readlineSync.question('Tu respuesta: ');

    if (randomNumber % 2 === 0) {
      respuestaCorrecta = 'yes';
    } else {
      respuestaCorrecta = 'no';
    }

    if (respuestaCorrecta === respuestaUser) {
      console.log('¡Correcto!');
    } else {
      console.log(`"${respuestaUser}" es una respuesta incorrecta. La respuesta correcta era "${respuestaCorrecta}".`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default parityCheck;
