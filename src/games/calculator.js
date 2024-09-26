export const description = '¿Cuál es el resultado de la expresión?';

export const calculator = () => {
  const sign = ['+', '-', '*'];
  const randomSignIndex = Math.floor(Math.random() * sign.length);
  const randomNumber1 = Math.floor(Math.random() * 50 + 1);
  const randomNumber2 = Math.floor(Math.random() * 50 + 1);
  let correctAnswer;

  const selectedSign = sign[randomSignIndex];

  switch (selectedSign) {
    case '+':
      correctAnswer = randomNumber1 + randomNumber2;
      break;
    case '-':
      correctAnswer = randomNumber1 - randomNumber2;
      break;
    case '*':
      correctAnswer = randomNumber1 * randomNumber2;
      break;
    default:
      break;
  }

  return {
    question: `Pregunta: ${randomNumber1} ${selectedSign} ${randomNumber2}`,
    correctAnswer: String(correctAnswer),
  };
};
