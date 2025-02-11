function printNumber(num: number): void {
  console.log(num);
}

function handleError(error: unknown): void {
  if (typeof error === 'string') {
    console.error('Error:', error);
  } else if (error instanceof Error) {
    console.error('Error:', error.message);
  } else {
    console.error('An unexpected error occurred.');
  }
}

const number = 10;
printNumber(number);

const someError = new Error('Something went wrong');
handleError(someError);

handleError('Type Error');

handleError(123); //This will result in error being printed as 'An unexpected error occurred.'