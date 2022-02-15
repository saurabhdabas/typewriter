const typewriter = function(sentence){
let counter = 50;
let charArray = sentence + "\n";
for (const char of charArray) {
  counter += 150;
  setTimeout(()=>{
    process.stdout.write (char);
  },counter)
}
}
typewriter("hello there from lighthouse labs");
