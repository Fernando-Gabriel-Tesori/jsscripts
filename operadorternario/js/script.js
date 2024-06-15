/*
operadores ternário

? if(se)
: els (se não)
*/
//salary < 3000 ? console.log("o colaborador é junior"): console.log("Ele é pleno")
//situação codigo pequeno 1 linha, não pula linha, pequenos retornos
//max 1 linha

const salary = 10000

if(salary < 3000){
    console.log("o colaborador é junior")
} else if (salary >= 3000 && salary < 10000){
    console.log("Ele é senior")
} else {
    console.log("Ele é diretor")
}

//salary < 3000 && console.log("O colaborador é junior")