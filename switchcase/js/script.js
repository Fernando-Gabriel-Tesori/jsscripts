//contolador de fluxo
/* nosso codigo pode ter controladores de fluxo
define qual lado de codigo e linha executar ou não */

const temperature = 30

switch(temperature){
    case 10:
        console.log("ta meio frio")
       break

    case 20:
        console.log("morno")
        break

    case 30 :
        console.log("ta meio quente")
        break
 
    default:
         break
}
//pode utilizar quantas case quiser
//posso colocar o que eu quiser
//se não tiver a temperatura da numeração ele executa e chega no numero adrido
/* se achar o numero ele para e se não achar ele cai no default */
//tambem pode ser para achar users e outros
const user = "dalva"
switch(user){
    case "fernando":
        console.log("fernando, encontrado")
       break

    case "marcia":
        console.log("marcia, encontrada")
        break

    case "dalva" :
        console.log("dalva, encontrada")
        break
 
    default:
         break
}