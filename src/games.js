import readlineSync from 'readline-sync';
import intro from './cli.js';
import getRandomNumber from './helpers.js';

const even = () => {
  const userName = intro();
  const minRandom = 1;
  const maxRandom = 100;

  const yes = 'yes';
  const no = 'no';

  let attempts = 3;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (attempts !== 0) {
    const number = getRandomNumber(minRandom, maxRandom);
    console.log(`Question: ${number}`);

    const correctAnswer = number % 2 === 0 ? yes : no;
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    attempts += -1;
  }

  console.log(`Congratulations, ${userName}!`);
};

export default even;
