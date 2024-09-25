import readlineSync from 'readline-sync';

const maxRounds = 3;

const runGame = (gameLogic, gameDescription) => {
  console.log('¡Bienvenidos a Brain Games!');
  const name = readlineSync.question('Cuál es tu nombre: ');
  console.log(`¡Hola, ${name}! `);

  console.log(gameDescription);

  for (let i = 0; i < maxRounds; i += 1) {
    const { question, correctAnswer } = gameLogic();
    console.log(`${question}`);
    const userAnswer = readlineSync.question('Tu respuesta: ');

    if (correctAnswer === userAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(`"${userAnswer}" es incorrecto. La respuesta correcta era "${correctAnswer}"`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default runGame;
