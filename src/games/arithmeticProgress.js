export const description = '¿Qué número falta en la progresión?';

export const arithmeticProgress = () => {
  let numIni = Math.ceil(Math.random() * 100 + 1);
  const progression = Math.ceil(Math.random() * 20) + 1;
  const arrayLength = Math.ceil(Math.random() * 6) + 5;
  const randomIndex = Math.ceil(Math.random() * arrayLength);
  const arrayProgress = [];

  for (let i = 0; i <= arrayLength; i += 1) {
    numIni += progression;
    arrayProgress.push(numIni);
  }

  const temp = arrayProgress[randomIndex];
  arrayProgress[randomIndex] = '..';

  return {
    question: `Pregunta: ${arrayProgress.join(' ')}`,
    correctAnswer: String(temp),
  };
};
