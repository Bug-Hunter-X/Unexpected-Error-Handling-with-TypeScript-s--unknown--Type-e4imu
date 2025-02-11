function printNumber(num: number): void {
  console.log(num);
}

function handleError(error: unknown): void {
  if (typeof error === 'string') {
    console.error('String Error:', error);
  } else if (error instanceof Error) {
    console.error('Error:', error.message);
  } else if (typeof error === 'number'){
    console.error('Number Error:', error);
  } else {
    console.error('An unexpected error of type', typeof error, 'occurred.');
  }
}

const number = 10;
printNumber(number);

const someError = new Error('Something went wrong');
handleError(someError);

handleError('Type Error');

handleError(123); 
handleError(Symbol('a')); //This will print more descriptive error message.