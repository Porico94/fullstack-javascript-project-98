export const description = 'Responde "yes" si el número es par, de lo contrario responde "no".';

export const parityCheck = () => {
  let respuestaCorrecta = '';

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  if (randomNumber % 2 === 0) {
    respuestaCorrecta = 'yes';
  } else {
    respuestaCorrecta = 'no';
  }

  return {
    question: `Pregunta: ${randomNumber}`,
    correctAnswer: respuestaCorrecta,
  };
};
