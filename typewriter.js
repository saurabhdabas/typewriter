const typewriter = function(input){
let counter = 50;
let sentence = input + "\n";
for (const char of charArray) {
  counter += 150;
  setTimeout(()=>{
    process.stdout.write (char);
  },counter)
}
}
typewriter("hello there from lighthouse labs");
