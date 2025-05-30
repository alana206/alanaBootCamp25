let sum = 0;
for (let i = 2; i < process.argv.length; i++) {
    const element = process.argv[i];
    sum += +element;
    
}
console.log(sum);