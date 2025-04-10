import fs from "fs";

console.clear();
const num = 31337;

try {
  const result = num();
} catch (error) {
  console.error(
    error.message,
    ` num is Number, not a Function. You cannot coll num() \n`
  );
}
try {
const lowered = num.toLowerCase();
}
catch(error){
    console.error(
        error.message,
        ` num is Number, not a String. You cannot coll num.toLowerCase()\n`
      );
}
try {
fs.readFileSync("file.txt", "utf8");
}
catch(error){
    console.error(error.message, `There is no file.txt!!! \n`);
}
try {
tamagotchi.eat();
}
catch(error){
    console.error(
        error.message,
        ` You cannot cal methods on a variable that has not been daclared !!! \n You must declare the variable first \n(for exampl --- let tamagotchi = ...)`
      );
}