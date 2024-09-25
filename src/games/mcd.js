export const description = 'Encuentra el máximo común divisor de los números dados.';

export const mcd = () => {
  const randomNumber1 = Math.floor(Math.random() * 50 + 1);
  const randomNumber2 = Math.floor(Math.random() * 50 + 1);
  const mcd1 = [];
  const mcd2 = [];
  const mcdResult = [];

  for (let i = 1; i <= randomNumber1; i += 1) {
    if (randomNumber1 % i === 0) {
      mcd1.push(i);
    }
  }

  for (let i = 1; i <= randomNumber2; i += 1) {
    if (randomNumber2 % i === 0) {
      mcd2.push(i);
    }
  }

  for (let i = 0; i < mcd1.length; i += 1) {
    for (let y = 0; y < mcd2.length; y += 1) {
      if (mcd1[i] === mcd2[y]) {
        mcdResult.push(mcd1[i]);
      }
    }
  }

  let max = 0;
  for (let i = 0; i < mcdResult.length; i += 1) {
    if (mcdResult[i] >= max) {
      max = mcdResult[i];
    }
  }

  return {
    question: `${randomNumber1} ${randomNumber2}`,
    correctAnswer: String(max),
  };
};
