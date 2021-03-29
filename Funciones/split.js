
let nave1= 'ARQ255: Sara Bel-Sun'
let nave2='ARQ2556: Nodin Chavdri'
let nave3='ARQ2557: Finn'


function splitname(string){
let split= string.split(":")
let shipalone=split[0]
let splitspring= split[1]
return splitspring
}
console.log(splitname(nave1));
console.log(splitname(nave2));
console.log(splitname(nave3));
