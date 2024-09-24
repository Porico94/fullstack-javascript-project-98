import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('¡Bienvenidos a Brain Games!');
  const name = readlineSync.question('Cuál es tu nombre: ');
  console.log(`¡Hola, ${name}! `);
};

export default greetUser;
