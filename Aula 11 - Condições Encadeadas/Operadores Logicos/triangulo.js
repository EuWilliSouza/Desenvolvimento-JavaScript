let ladoA = 10
let ladoB = 10
let ladoC = 10

let ladoAB = ladoA + ladoB
let ladoAC = ladoA + ladoC
let ladoBC = ladoB + ladoC

if (ladoAB > ladoC && ladoAC > ladoB && ladoBC > ladoA){
    console.log("LADOS VÁLIDOS PARA FORMAR UM TRIÂNGULO");

    if (ladoA == ladoB == ladoC){
    console.log("TRIÂNGULO EQUILÁTERO"); 
    }
    else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    console.log("TRIÂNGULO ISÓSCELES");    
    }  
    else if (ladoA != ladoB != ladoC) {
    console.log("TRIÂNGULO ECALENO");    
    }                
}
else {
    console.log("LADOS INVALIDOS PARA FORMAÇÃO DE UM TRIÂNGULO");
}
