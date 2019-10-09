// 'tsc --init' will create tsc config file
// 'tsc filename.ts --watch' -> creates watch mode for each new changes
// 'tsc' cmd will compile file into a .js file without the ts params
const sum = (a: number, b: number) => {
    return a + b;
}
// typescript catches errors ('hello' = string and not number)
const answer = sum(22,29);

console.log(answer);