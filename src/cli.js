import readlineSync from 'readline-sync';

export const intro = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandomNumber = () => {
  const maxRandom = 100;
  const minRandom = 1;
  return Math.floor(Math.random() * (maxRandom - minRandom) + minRandom);
};

export const even = () => {
  const userName = intro();
  let attempts = 3;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (attempts !== 0) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const isEven = answer === 'yes';

    if (number % 2 !== 0 && isEven) {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    if (number % 2 === 0 && !isEven) {
      console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    attempts += -1;
  }

  console.log(`Congratulations, ${userName}!`);
};

export default intro;
