const firstArg = process.argv[2];

const myNumber = parseInt(firstArg);

if (Number.isNaN(myNumber)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${myNumber}`);