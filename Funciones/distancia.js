let FinalX=710;
let FinalY=-540;
let InicialX=20;
let InicialY=30;


function calcularDistancia(x1,x2,y1,y2){

    //resta
    let coordenadasX=x2-x1;
    let coordenadasY=y2-y1;

    //cuadrado de las x
    let cuadradoX=Math.pow(coordenadasX,2);
    //suma del cuadrado x con las y
    let suma=cuadradoX+coordenadasY;
		//cuadrado de la suma 
    let resultado=Math.pow(suma,2)
    // la raiz cuadrada de la funcion
    let distancia=Math.sqrt(resultado);

    return(distancia);
    
}

console.log('La distancia es ' +calcularDistancia(InicialX,FinalX,InicialY,FinalY));
//la funcion usada es la que esta en el taller que el cuadrado es tomado de la resta de las x y cuadrado de la suma del cuadrado de las x mas la resta de las y
