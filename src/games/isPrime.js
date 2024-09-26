export const description = 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".';

export const isPrime = () => {
  const number = Math.ceil(Math.random() * 100 + 1);
  let contador = 0;
  let correctAnswer = '';

  if (number === 1) {
    correctAnswer = 'yes';
  } else {
    for (let i = 1; i <= number; i += 1) {
      if (number % i === 0) {
        contador += 1;
      }
    }
  }

  if (contador === 2) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return {
    question: `Pregunta: ${number}`,
    correctAnswer: `${correctAnswer}`,
  };
};
