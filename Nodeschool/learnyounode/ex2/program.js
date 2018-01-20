const args = process.argv.slice(2);

console.log(args.reduce((acc, item) => {
    return acc + Number(item);
}, 0));