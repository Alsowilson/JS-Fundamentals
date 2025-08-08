const firstArg=Process.argv[2];

const mynumber=parseInt(firstArg);
if (Number.isNaN(mynumber)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${mynumber}`);
}   